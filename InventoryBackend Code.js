const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/inventoryDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Inventory Schema
const inventorySchema = new mongoose.Schema({
    productName: String,
    stockLevel: Number,
    category: String,
    barcode: String,
    expiryDate: String
});

const Inventory = mongoose.model('Inventory', inventorySchema);

// API Routes

// Get Inventory Items
app.get('/api/inventory', (req, res) => {
    Inventory.find({}, (err, items) => {
        if (err) res.status(500).send(err);
        res.json(items);
    });
});

// Add Inventory Item
app.post('/api/inventory', (req, res) => {
    const newItem = new Inventory(req.body);
    newItem.save((err, item) => {
        if (err) res.status(500).send(err);
        res.status(201).json(item);
    });
});

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));
