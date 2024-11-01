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
    get: (v) => `https://ieee-week.onrender.com/images/${v}` 
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price:{
    type:String,
    required:true,
  },
  priceIEEE:{
    type:String,
    required:true,
  },
  category: {
    type: String,
    required:true
  },
  registrationOpen: {
    type: Boolean,
    default: true,
  },
  registrationForm: {
    type: String,
    required:true
  },
}, {
  toJSON: { getters: true },  // Applying getters in JSON conversion
  toObject: { getters: true } // Applying getters in object conversion
  // Moved the options object outside of the schema fields to correct syntax
});

module.exports = mongoose.model('Event', EventSchema);
