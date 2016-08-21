var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle')

var MyFirstComponent = () => (
    <div>
      <MyTitle title='Whateves' color='rebeccawhite' />
      <MyTitle title='LOL' color='papayawhip' />
      <MyTitle title='OMGLOLROFLBBQ' color='#f06d06' />
    </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
