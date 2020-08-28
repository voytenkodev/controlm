"use strict";

var Contact = require('../models/Contact.js');

module.exports = function _callee(req, res) {
  var contact;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime;
          _context.next = 3;
          return regeneratorRuntime.awrap(Contact.findById(req.params.id));

        case 3:
          _context.t1 = _context.sent;
          _context.next = 6;
          return _context.t0.awrap.call(_context.t0, _context.t1);

        case 6:
          contact = _context.sent;
          res.render('contact', {
            contact: contact
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};