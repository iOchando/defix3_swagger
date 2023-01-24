'use strict';


/**
 * Add a new pet to the store
 * Add a new pet to the store
 *
 * body Pet Create a new pet in the store
 * returns Pet
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 10,
  "category" : {
    "name" : "Dogs",
    "id" : 1
  },
  "tags" : [ {
    "name" : "name",
    "id" : 0
  }, {
    "name" : "name",
    "id" : 0
  } ],
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new pet to the store
 * Add a new pet to the store
 *
 * body Pet Create a new pet in the store
 * returns Pet
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "doggie",
  "id" : 10,
  "category" : {
    "name" : "Dogs",
    "id" : 1
  },
  "tags" : [ {
    "name" : "name",
    "id" : 0
  }, {
    "name" : "name",
    "id" : 0
  } ],
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

