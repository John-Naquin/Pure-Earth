
const mongoose = require('mongoose');

const volunteerTemplate = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    slotId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AvailableDate.slots',
        required: true,
    },
});




const slotSchema = new mongoose.Schema({
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isTaken: {
        type: Boolean,
        default: false,
    },
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volunteer',
        default: null,
    },
});

const availableDateSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    park: {
        type: String,
        required: true,
    },
    slots: [slotSchema],
});

module.exports = {
    Volunteer: mongoose.model("Volunteer", volunteerTemplate),
    AvailableDate: mongoose.model("AvailableDate", availableDateSchema),
};


