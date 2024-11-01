const express=require("express");
const router=express.Router();
const EventSchema=require("../models/EventSchema");

console.log('EventSchema:', EventSchema);

router.get('/', async (req, res) => {
  try {
    const events = await EventSchema.find();
    res.status(200).json(events);
    // console.log('events: in router', events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  const { title, description, image, date, time,price,priceIEEE, category, registrationOpen, registrationForm } = req.body;
  const event = new EventSchema({ title, description, image, date, time,price,priceIEEE, category, registrationOpen, registrationForm  });
  try {
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const event = await EventSchema.findById(req.params.id);
    if (!title || !description || !date || !venue) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await EventSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports=router;
