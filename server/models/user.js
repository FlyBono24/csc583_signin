const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var User = new Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  officialVisit: {
    type: Boolean,
    required: true
  },
  escortRequired: {
    type: Boolean,
    required: true
  },
  escortName: {
    type: String
  }
})

module.exports = mongoose.model('User', User)
