var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var HomeContainer = require('../containers/HomeContainer');
var CityContainer = require('../containers/CityContainer');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/beach_background.png')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
    backgroundColor: '#9bdef8'
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <CityContainer />
    </div>
  )
}

module.exports = Home;
