const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/api/contact', async(req, res)=>{
    console.log(req.body);
    const {name, email, message} = req.body;

    const newContact = new Contact({
        name,
        email,
        message
    });

    try{
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    }catch(err){
        res.status(500).json({message: 'Error saving contact submission', error: err });    
    }
});

module.exports = router;