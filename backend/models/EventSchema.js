const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  time:{
    type: String,
    required: true,
  },
  registrationOpen: {
    type: Boolean,
    default: true,
  },
  
});

module.exports = mongoose.model('EventSchema', EventSchema);