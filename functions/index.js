const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HqaltJRGvPOxjM8zZeR0xtPw9LUSwCxWJ190bIssjv38KgtJUziqXQDvw2Ow0sYAKIRIeflCIEKwAHdeKkp50Dl00tkL8Vc8A')

//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200)
    .send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received. Amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//Enpoint
//http://localhost:5001/clone-da72d/us-central1/api