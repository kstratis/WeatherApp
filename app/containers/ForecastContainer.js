var React = require('react');
var getForcast = require('../helpers/api').getForcast;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        // DEBUG - We get the route from react-router
        // console.log('I got the city of: ' + this.props.routeParams.city);
        return {
          isLoading: true,
          forecastData: {}
        }
    },

    componentDidMount: function () {
        this.makeRequest(this.props.routeParams.city)
    },

    componentWillReceiveProps: function (nextProps) {
        this.makeRequest(nextProps.routeParams.city)
    },

    makeRequest: function (city) {
        getForcast(city).then(function (forecastData) {
            // DEBUG
            console.log('The API sent the following data...');
            console.log(forecastData);
            this.setState({
                isLoading: false,
                forecastData: forecastData
            });
        }.bind(this));
    },

    handleClick: function (weather, e) {

        // e.preventDefault();
        // console.log(e);

        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                weather: weather
            }
        })
        console.log('this is the weather object passed');
        console.log(weather);
    },




    // direction is purely for styling
    // propTypes: {
    //     direction: PropTypes.string
    // },

    // getDefaultProps: function(){
    //     return {
    //         city: ''
    //     }
    // },

    // getInitialState: function () {
    //     console.log('state success');
    //     console.log('I got the city of: ' + this.props.routeParams.city);
    //     return {
    //         city: this.props.routeParams.city
    //     }
    // },

    render: function(){
        // return <div><h1>Transition works</h1></div>
        // return <Forecast />
        return(
        <Forecast
            city={this.props.routeParams.city}
            isLoading={this.state.isLoading}
            handleClick={this.handleClick}
            forecastData={this.state.forecastData} />)
    }
});

module.exports = ForecastContainer;
