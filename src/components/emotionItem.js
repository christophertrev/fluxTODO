var EmotionItem = React.createClass({

  render: function (){
    // console.log(this.props)
    return (
      <li>
        {this.props.emotion.description}
      </li>
    )
  }
})


module.exports = EmotionItem;