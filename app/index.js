var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var HelloMessage = React.createClass({
  render: function() {
    return (<div>Hello World</div>);
  }
});

ReactDOM.render(<HelloMessage/>, document.getElementById('app'));
