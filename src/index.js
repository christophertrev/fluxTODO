// var Dispatcher = require('flux').Dispatcher;
var VideoHTML5 = require('./components/VideoHTML5')



var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
      <VideoHTML5 />
        Hello, <input type="text" placeholder="Your name here Please s" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

// console.log(VideoHTML5)
setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);