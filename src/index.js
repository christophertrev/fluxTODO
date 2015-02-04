// var Dispatcher = require('flux').Dispatcher;
var VideoHTML5 = require('./components/VideoHTML5');
var EmotionList = require('./components/emotionList');
var EmotionStore = require('./stores/EmotionsStore');


var EmotionApp = React.createClass({
  getInitialState: function (){
    return {
      allEmotions: EmotionStore.getAll()
    }
  },


  render: function() {
    return (
      <p>
      <VideoHTML5 src='video/video.mp4' />
      <EmotionList allEmotions={this.state.allEmotions}/>
        Hello, <input type="text" placeholder="Your name here Please s" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  React.render(
    <EmotionApp date={new Date()} />,
    document.getElementById('example')
  );
}, 500);