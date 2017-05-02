import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './actions'

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => {
      dispatch(increase())
    },
    onDecrease: () => {
      dispatch(decrease())
    }
  }
}


const Slideshow = ({ onIncrease, onDecrease, count, headers }) => (
  <div>
    <div className="main">
        <img/>
        <h1></h1>
        <button onClick={onIncrease}>+</button>
        {count}
        <button onClick={onDecrease}>-</button>
    </div>
  </div>
)

{/*Slideshow.propTypes = {
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.bool.isRequired,
  count: PropTypes.string.isRequired
}*/}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slideshow)
