"use strict";

var Stadium = require('../models/Stadium.js');

var StadiumContact = require('../models/Contact.js');

module.exports = function _callee(req, res) {
  var stadium, stadiumcontact;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime;
          _context.next = 3;
          return regeneratorRuntime.awrap(Stadium.findById(req.params.id));

        case 3:
          _context.t1 = _context.sent;
          _context.next = 6;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 6:
          stadium = _context.sent;
          _context.t2 = regeneratorRuntime;
          _context.next = 10;
          return regeneratorRuntime.awrap(StadiumContact.aggregate([{
            $match: {
              name: stadium.contact
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
          stadiumcontact = _context.sent;
          res.render('stadium', {
            stadium: stadium,
            stadiumcontact: stadiumcontact
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
};