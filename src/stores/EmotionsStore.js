var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');


var _emotions = {
  1: {emotion: 'happy', description:'Having a great Day'},
  2: {emotion:'sad', description:'Day could be going better'}
};


var EmotionsStore = assign({}, EventEmitter.prototype, {
  
  getAll: function() {
    return _emotions;
  },

});



module.exports = EmotionsStore;
