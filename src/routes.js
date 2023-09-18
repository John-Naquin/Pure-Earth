const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('./SignUpModels')
const contactTemplateCopy = require('./ContactModels')
const bcrypt = require('bcrypt');
const { Volunteer, AvailableDate } = require('./VolunteerModels');


router.post('/signup', async (req, res) => {
    const defaultUserReward = 100;

    const existingUser = await signupTemplateCopy.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    } else if (req.body.password.length < 6) {
        return res.status(402).json({ message: 'Password must be at least 6 characters long' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const signedUpUser = new signupTemplateCopy({
        email: req.body.email,
        password: hashedPassword,
        UserReward: defaultUserReward
    });

    signedUpUser.save()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        });
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await signupTemplateCopy.findOne({ email });

        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while processing the request' });
    }
});

router.post('/contact', (req, res) => {
    const SignedUpUser = new contactTemplateCopy({
        email:req.body.email,
        message:req.body.message
    })
    SignedUpUser.save()
        .then(data =>{
            res.json(data)
        })
        .catch(error =>{
            res.json(error)
        })
})


router.post('/volunteer', async (req, res) => {
    const { firstName, lastName, email, phone, slotId } = req.body;

    const availableDate = await AvailableDate.findOne({ 'slots._id': slotId });

    if (!availableDate) {
        res.status(404).json({ message: 'Slot not found' });
        return;
    }

    const slot = availableDate.slots.id(slotId);

    const volunteer = new Volunteer({
        firstName,
        lastName,
        email,
        phone,
        date: availableDate.date,
        slotId,
    });

    try {
        const savedVolunteer = await volunteer.save();

        slot.isTaken = true;
        slot.volunteer = savedVolunteer._id;

        await availableDate.save();

        res.status(201).json(savedVolunteer);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while processing the request' });
    }
});


router.get("/available-dates", async (req, res) => {
    try {
        const park = req.query.park;

        const filter = park ? { park: decodeURIComponent(park) } : {};

        const availableDates = await AvailableDate.find(filter);

        res.status(200).json(availableDates);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred while fetching available dates" });
    }
});


module.exports = router
