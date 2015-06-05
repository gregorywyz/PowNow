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
    location: {     // 2d index defined and ensured via bootstrap.js
      type: "json",
      required: true
    },
    website: {
      type: 'string'
    },
    powID: {
      type: 'integer'
    },

    /////// associations /////

    //has many Comment
    comments: {
      collection:'Comment',
      via:'resort'
    }

  }
};

