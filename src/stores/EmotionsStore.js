var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');


var _emotions = {};


var EmotionsStore = assign({}, EventEmitter.prototype, {
  

  getAll: function() {
    return _emotions;
  },


});



module.exports = EmotionsStore;
