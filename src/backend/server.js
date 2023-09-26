const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routesUrls = require('./routes')
const cors = require('cors')
const uri =
    "mongodb+srv://react:react@cluster.hvmm4z0.mongodb.net/mytables?retryWrites=true&w=majority";

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51Mj7S0FkKf7A4lt8B4IQJ85w3QEpsVfJRXXxURMkqFCosTTkfHkQTEj5AFfJ55kvGtk1IPXlSYl9CtOVcld42ZBY00anbwtDFF');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

    if (items == "500") {
        return 500;
    }
    if (items == "1000") {
        return 1000;
    }
    if (items == "1500") {
        return 1500;
    }

  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

    setTimeout(function () {

        if (paymentIntent.status != "succeeded") {
            stripe.paymentIntents.cancel(
                paymentIntent.id
            );
        }

    }, 600000)

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});



app.listen(4242, () => console.log("Node server listening on port 4242!"));


async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(8000, () => {
    console.log("Server started on port 8000");
});




