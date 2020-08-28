"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var MatchPostSchema = new Schema({
  date: String,
  league: String,
  city: String,
  stadium: String,
  address: {
    type: mongoose.Schema.Types.String,
    ref: 'Stadium',
    required: true
  },
  contact: {
    type: mongoose.Schema.Types.String,
    ref: 'Stadium',
    required: true
  },
  ethernet: {
    type: mongoose.Schema.Types.String,
    ref: 'Stadium',
    required: true
  },
  team_1: String,
  team_2: String,
  time: String,
  commentator: {
    type: mongoose.Schema.Types.String,
    ref: 'Contact',
    required: true
  },
  comment: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  datePosted: {
    type: Date,
    "default": new Date()
  }
});
var MatchPost = mongoose.model('MatchPost', MatchPostSchema);
module.exports = MatchPost;