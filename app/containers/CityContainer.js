var React = require('react');
var City = require('../components/city');
var PropTypes = React.PropTypes;

var CityContainer = React.createClass({

    // direction is purely for styling
    propTypes: {
        direction: PropTypes.string
    },

    getDefaultProps: function(){
        return {
            directions: 'column'
        }
    },

    getInitialState: function () {
        return {
            city: ''
        }
    },

    handleSubmitCity: function () {
        console.log('handlesubmitcity was just invoked');
        console.log(this.state.city)
    },

    handleUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
    },

    render: function(){
        return (
            <City
                direction={this.props.direction}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                city={this.state.city} />
        );
    }
})

module.exports = CityContainer;
