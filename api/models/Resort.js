/**
* Resort.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    location: {      // {lat: 11.123123123, lon: 11.1231411}
      type: "json",
      required: true
    },
    website: {
      type: 'string'
    },
    powID: {
      type: 'integer'
    }

  }
};

