var EmotionServerActionCreators = require('../actions/EmotionServerActionCreators');

module.exports = {
  getAllEmotions: function (){
    var emotions = ['happy','sad'];
    EmotionServerActionCreators.receiveAll(emotions);
  }
}
