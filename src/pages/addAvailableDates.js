const mongoose = require("mongoose");
const { Volunteer, AvailableDate } = require("../VolunteerModels");

const uri = "mongodb+srv://react:react@cluster.hvmm4z0.mongodb.net/mytables?retryWrites=true&w=majority";

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Error connecting to the database:", err);
    });

const addAvailableDates = async () => {
    const availableDatesData = [
        {
            park: "Jean Lafitte National Historical Park and Preserve",
            date: "2023-05-01",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Kisatchie National Forest",
            date: "2023-05-02",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Cane River Creole National Forest",
            date: "2023-05-01",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Poverty Point Reservoir State Park",
            date: "2023-05-02",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Atchafalaya National Heritage Area",
            date: "2023-05-01",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Cypremort Point State Park",
            date: "2023-05-02",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "Grand Isle",
            date: "2023-05-01",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
        {
            park: "New Orleans Jazz National Park",
            date: "2023-05-02",
            slots: [
                { startTime: "08:00am", endTime: "12:00pm" },
                { startTime: "1:00pm", endTime: "5:00pm" },
            ],
        },
    ];

    try {
        for (const dateData of availableDatesData) {
            const newAvailableDate = new AvailableDate(dateData);
            await newAvailableDate.save();
        }
        console.log("Available dates and time slots added successfully");
        process.exit(0);
    } catch (error) {
        console.error("Error adding available dates and time slots:", error);
        process.exit(1);
    }
};

addAvailableDates();
