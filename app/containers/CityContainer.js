var React = require('react');
var City = require('../components/city');
var PropTypes = React.PropTypes;

var CityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

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

    handleSubmitCity: function (e) {
        e.preventDefault();
        // console.log('The city typed is: ' + this.state.city)
        var city = this.state.city;

        // var username = this.state.username;
        this.setState({
            city: ''
        });

        // if (this.props.routeParams.playerOne) { // playerOne is how we name the optional GET parameter in routes.js
        //     this.context.router.push({ // That's how we dynamically route. query has the GET parameters
        //         pathname: '/battle',
        //         query: {
        //             playerOne: this.props.routeParams.playerOne,
        //             playerTwo: this.state.username,
        //         }
        //     })
        // }
        // else {
        this.context.router.push('/forecast/' + city)
        // }
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
