const MatchPost = require('../models/MatchPost.js')

module.exports = async(req, res) => {
    const matchposts = await MatchPost.find({}).populate('userid').sort({"date" : -1});
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    var monthtostring = month.toString()
    if (monthtostring.length < 2){
        month = '0' + monthtostring
    }
    var daytostring = day.toString()
    if (daytostring.length < 2){
        day = '0' + daytostring
    }
    console.log(monthtostring)
    var currentdate =  year + '.' + month + '.' + day
    console.log(currentdate)
        res.render('matches',{
        matchposts, currentdate
    });
}