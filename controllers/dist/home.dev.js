"use strict";

var MatchPost = require('../models/MatchPost.js');

module.exports = function _callee(req, res) {
  var matchposts, date, month, day, currentdate;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(MatchPost.find({}).populate('userid'));

        case 2:
          matchposts = _context.sent;
          date = new Date();
          month = date.getMonth() + 1;
          day = date.getDate();
          currentdate = month + '.' + day;
          console.log(currentdate);
          res.render('matches', {
            matchposts: matchposts,
            currentdate: currentdate
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};