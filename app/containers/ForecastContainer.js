var React = require('react');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    // direction is purely for styling
    // propTypes: {
    //     direction: PropTypes.string
    // },

    getDefaultProps: function(){
        return {
            city: ''
        }
    },

    getInitialState: function () {
        console.log('state success');
        return {
            city: this.props.routeParams.location
        }
    },

    render: function(){
        return <div><h1>Transition works</h1></div>
    }
});

module.exports = ForecastContainer;
