'use strict';

var utils = require('../utils/writer.js');
var Dasd = require('../service/DasdService');

module.exports.addPet = function addPet (req, res, next, body) {
  Dasd.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addPet = function addPet (req, res, next, body) {
  Dasd.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
