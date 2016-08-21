var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle')

var div = React.DOM.div

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
