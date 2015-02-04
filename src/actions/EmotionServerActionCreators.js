var AppDispatcher = require('../dispatcher/AppDispatcher');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_RAW_MESSAGES',
      rawMessages: rawMessages
    });
  },

  // receiveCreatedMessage: function(createdMessage) {
  //   AppDispatcher.handleServerAction({
  //     type: 'RECEIVE_RAW_CREATED_MESSAGE',
  //     rawMessage: createdMessage
  //   });
  // }

};