const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
//const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HQWM9HoZqyGuo9HeyJT8kvnuTzPddYgQ0SrF4VNbDuV1aL2O5IMx9MuEVcc8sKKq546Tb7Z2n5QvO7UOZsAhOfr00z9amH9Lr"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved Boom!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub units
    currency: "usd",
  });
  //ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/challenge-8d4dd/us-central1/api
