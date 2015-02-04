var EmotionList = React.createClass({


  render: function (){
    var emotions = [];
    var allTodos = {'key':"value", 'key2':"value"}
    for (var key in allTodos) {
      // emotions.push(<TodoItem key={key} todo={allemotions[key]} />);
      emotions.push(<li>yo!</li>);
    }


    return (
      <ul id="todo-list">{emotions}</ul>
    )
  }



})


module.exports = EmotionList;