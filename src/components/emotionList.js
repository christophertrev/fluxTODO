var EmotionItem = require('./emotionItem')

var EmotionList = React.createClass({


  render: function (){
    var emotions = [];
    var allTodos = {'1':{text: 'This is Item 1'}, '2':{text:'This is item 2'}}
    for (var key in allTodos) {
      // emotions.push(<TodoItem key={key} todo={allemotions[key]} />);
      emotions.push(<EmotionItem key= {key}  emotion= {allTodos[key]}/>);
    }


    return (
      <ul id="emotion-list">{emotions}</ul>
    )
  }



})


module.exports = EmotionList;