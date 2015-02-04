var EmotionItem = React.createClass({

  render: function (){
    // console.log(this.props)
    return (
      <li>
        yo! buddy! {this.props.emotion.text}
      </li>
    )
  }
})


module.exports = EmotionItem;