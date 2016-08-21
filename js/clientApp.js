var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render (){
    return (
        div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'This is the first paragraph.', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'This is the second paragraph.', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'This is the third paragraph.', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
