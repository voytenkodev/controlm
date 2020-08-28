"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var stadiumSchema = new Schema({
  name: String,
  city: String,
  address: String,
  contact: {
    type: mongoose.Schema.Types.String,
    ref: 'Contact',
    required: true
  },
  photo: String,
  ethernet: String,
  comment: String
});
var Stadium = mongoose.model('Stadium', stadiumSchema);
module.exports = Stadium;