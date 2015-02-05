// var Dispatcher = require('flux').Dispatcher;
var VideoHTML5 = require('./components/VideoHTML5');
var EmotionList = require('./components/emotionList');
var EmotionStore = require('./stores/EmotionsStore');



var getTodoState = function (){
  return {
    allEmotions: EmotionStore.getAll()
  }
}



var EmotionApp = React.createClass({
  getInitialState: function (){
    return getTodoState();
  },
  
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
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
  },

  _onChange: function (){
    this.setState(getTodoState());
  }
});

// setInterval(function() {
React.render(
  <EmotionApp date={new Date()} />,
  document.getElementById('example')
);
