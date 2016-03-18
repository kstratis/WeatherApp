var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/main');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:location' component={ForecastContainer} />
    </Route>
  </Router>
);

module.exports = routes;
