var EmotionItem = React.createClass({

  render: function (){
    // console.log(this.props)
    return (
      <li>
        {this.props.emotion.emotion}
      </li>
    )
  }
})


module.exports = EmotionItem;