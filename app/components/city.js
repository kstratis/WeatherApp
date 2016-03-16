var React = require('react');
var PropTypes = React.PropTypes;

// var ref;

function Button (props) {
  return (
    <button type='submit'
      style={{margin: 10}}
      className='btn btn-success' >
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      id='citySubmitInput'
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='Athens, Greece'
      type='text'
      value={props.city} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 300,
    alignSelf: 'right'
  }
}

function City (props) {
  return (
    <form onSubmit={props.onSubmitCity}>
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
    </form>
  )
}

City.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = City;
