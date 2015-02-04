var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var webAPIUtils = require('../utils/webAPIUtils');

var _emotions = {};
// var _emotions = {
//   1: {emotion: 'happy', description:'Having a great Day'},
//   2: {emotion:'sad', description:'Day could be going better'}
// };


var EmotionsStore = assign({}, EventEmitter.prototype, {
  
  getAll: function() {
    return _emotions;
  },

});

EmotionsStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log(action)
  switch(action.type){

    case 'RECEIVE_MESSAGES':
      console.log('am in recived RECEIVE_MESSAGES')
      console.log(action.rawMessages)
      for ( var i  in action.rawMessages){
        _emotions[i] = {
          id: i,
          emotion: action.rawMessages[i]
        }
      }
      break;
  }
  

})

webAPIUtils.getAllEmotions()

module.exports = EmotionsStore;
