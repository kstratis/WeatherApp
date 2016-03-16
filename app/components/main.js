var React = require('react');
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// require('../main.css');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var Main = React.createClass({
  render: function () {
    return(<div style={styles.container}>
        <h1>Header</h1>
        {this.props.children}
      </div>)
  }
});

module.exports = Main;
