const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MatchPostSchema = new Schema({
    date: String,
    league: String,
    city: String,
    stadium: {
        type: mongoose.Schema.Types.String,
        ref: 'Stadium',
        required: true,
    },
    team_1: String,
    team_2: String,
    time: String,
    responsible: {
        type: mongoose.Schema.Types.String,
        ref: 'Contact',
        required: true,
    },
    commentator: {
        type: mongoose.Schema.Types.String,
        ref: 'Contact',
        required: true,
    },
    commentator_location: String,
    comment: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
});

const MatchPost = mongoose.model('MatchPost',MatchPostSchema);

module.exports = MatchPost