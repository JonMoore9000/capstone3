
const mongoose = require('mongoose');

const adventureSchema = mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  }
});

const time = mongoose.model('logs', timeSchema);

module.exports = adventure;
