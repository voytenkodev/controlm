const MatchPost = require('../models/MatchPost.js')
const MatchContact = require('../models/Contact.js')
const MatchStadium = require('../models/Stadium.js')

module.exports = async(req, res) => {
    const matchpost = await (await MatchPost.findById(req.params.id)).populate('userid');
    
    const matchcommentator = await (await MatchContact.aggregate([
        { $match: {name: matchpost.commentator}},
        { $project: {name: 1}}
    ]))[0]
    const stadiummatch = await (await MatchStadium.aggregate([
        { $match: {name: matchpost.stadium}},
        { $project: {name: 1, _id: 0}}
    ]))[0]
    const stadium = await (await MatchStadium.aggregate([
        { $match: {name: stadiummatch.name}}
    ]))
    res.render('match', {
        matchpost, matchcommentator, stadiummatch,
        stadium
    });
}

/*
    const matchcontact = await (await MatchContact.aggregate([
        { $lookup: { from: "MatchPost", localField: "contact", foreginField: "_id", as: "result"} },
        { $unwind: "$result" },
        { $project: { "contact": 1, _id:1, "id": "result.name"}}
    ]))
*/