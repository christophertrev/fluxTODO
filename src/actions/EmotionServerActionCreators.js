var AppDispatcher = require('../dispatcher/AppDispatcher');
// var ChatConstants = require('../constants/ChatConstants');

// var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveAll: function(rawMessages) {
    console.log('in receiveAll', rawMessages)
    AppDispatcher.handleServerAction({
      type: 'RECEIVE_MESSAGES',
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