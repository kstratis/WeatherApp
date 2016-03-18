var React = require('react');
var CityContainer = require('./CityContainer');
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// require('../main.css');

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
        padding: '15px',
        fontSize: 45,
        color: 'gray',
        fontWeight: 100,
    }
}

var Main = React.createClass({
    render: function () {
        return(
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={{margin: 0}}><i>Weather Forecast Demo</i></h2>
                    <CityContainer direction='row' />
                </div>
                {this.props.children}
            </div>)
    }
});

module.exports = Main;
