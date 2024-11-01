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
    get: (v) => `http://ieee-week.onrender.com/images/${v}` 
  },
  date: {
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
  registrationForm:{
    type:String,
  }
  
},
{
  toJSON: { getters: true },
  toObject: { getters: true },
}
);

module.exports = mongoose.model('Event', EventSchema);