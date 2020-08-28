"use strict";

var Stadium = require('../models/Stadium.js');

var StadiumContact = require('../models/Contact.js');

module.exports = function _callee(req, res) {
  var stadiums;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Stadium.find({}));

        case 2:
          stadiums = _context.sent;
          res.render('stadiums', {
            stadiums: stadiums
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};