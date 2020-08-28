"use strict";

var MatchPost = require('../models/MatchPost.js');

var MatchContact = require('../models/Contact.js');

var MatchStadium = require('../models/Stadium.js');

module.exports = function _callee(req, res) {
  var matchpost, matchcontact, matchcommentator, stadiummatch;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime;
          _context.next = 3;
          return regeneratorRuntime.awrap(MatchPost.findById(req.params.id));

        case 3:
          _context.t1 = _context.sent.populate('userid');
          _context.next = 6;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 6:
          matchpost = _context.sent;
          _context.t2 = regeneratorRuntime;
          _context.next = 10;
          return regeneratorRuntime.awrap(MatchStadium.aggregate([{
            $match: {
              name: contact
            }
          }, {
            $project: {
              name: 1
            }
          }]));

        case 10:
          _context.t3 = _context.sent[0];
          _context.next = 13;
          return _context.t2.awrap.call(_context.t2, _context.t3);

        case 13:
          matchcontact = _context.sent;
          _context.t4 = regeneratorRuntime;
          _context.next = 17;
          return regeneratorRuntime.awrap(MatchContact.aggregate([{
            $match: {
              name: matchpost.commentator
            }
          }, {
            $project: {
              name: 1
            }
          }]));

        case 17:
          _context.t5 = _context.sent[0];
          _context.next = 20;
          return _context.t4.awrap.call(_context.t4, _context.t5);

        case 20:
          matchcommentator = _context.sent;
          _context.t6 = regeneratorRuntime;
          _context.next = 24;
          return regeneratorRuntime.awrap(MatchStadium.aggregate([{
            $match: {
              name: matchpost.stadium
            }
          }, {
            $project: {
              name: 1
            }
          }]));

        case 24:
          _context.t7 = _context.sent[0];
          _context.next = 27;
          return _context.t6.awrap.call(_context.t6, _context.t7);

        case 27:
          stadiummatch = _context.sent;
          res.render('match', {
            matchpost: matchpost,
            matchcontact: matchcontact,
            matchcommentator: matchcommentator,
            stadiummatch: stadiummatch
          });

        case 29:
        case "end":
          return _context.stop();
      }
    }
  });
};
/*
    const matchcontact = await (await MatchContact.aggregate([
        { $lookup: { from: "MatchPost", localField: "contact", foreginField: "_id", as: "result"} },
        { $unwind: "$result" },
        { $project: { "contact": 1, _id:1, "id": "result.name"}}
    ]))
*/