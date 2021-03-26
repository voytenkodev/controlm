const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
    name: String,
});

const League = mongoose.model('League', LeagueSchema)

module.exports = League