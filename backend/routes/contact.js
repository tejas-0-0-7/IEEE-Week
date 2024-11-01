const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res) => {  // Notice it's just '/contact' now
    // console.log(req.body); For debugging, remove in production

    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message
    });

    try {
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(500).json({ message: 'Error saving contact submission', error: err });    
    }
});

module.exports = router;
