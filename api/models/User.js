/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 4
    },

    /////// associations /////

    //has many Comment
    comments:{
      collection:'Comment',
      via:'user'
    },

    // override built-in toJSON method and remove password
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }

  },

  beforeCreate: function(values, callback){
    bcrypt.hash(values.password,10,function(err,hash){
      if (err) return callback(err);
      values.password = hash;
      callback();
    });
  }

};

