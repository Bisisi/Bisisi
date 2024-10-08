const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your Stripe Secret Key

const app = express();
app.use(bodyParser.json());

// Payment Processing Route
app.post('/api/payment', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,  // Stripe uses the smallest currency unit (e.g., cents)
            currency: currency,
            payment_method_types: ['card'],
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
