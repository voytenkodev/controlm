"use strict";

var Stadium = require('../models/Stadium');

module.exports = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Stadium.create(req.body));

        case 2:
          res.redirect('/stadiums');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};