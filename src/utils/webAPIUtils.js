var EmotionServerActionCreators = require('../actions/EmotionServerActionCreators');

module.exports = {
  getAllEmotions: function (){
    console.log('getting all emotions')
    var emotions = ['happy','sad'];
    EmotionServerActionCreators.receiveAll(emotions);
  }
}
