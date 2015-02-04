var EmotionItem = require('./emotionItem')

var EmotionList = React.createClass({


  render: function (){
    var emotions = [];
    var allTodos = {'key':"value", 'key2':"value"}
    for (var key in allTodos) {
      // emotions.push(<TodoItem key={key} todo={allemotions[key]} />);
      emotions.push(<EmotionItem />);
    }


    return (
      <ul id="emotion-list">{emotions}</ul>
    )
  }



})


module.exports = EmotionList;