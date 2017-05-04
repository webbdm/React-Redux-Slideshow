import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {increase, decrease} from './actions'

const mapStateToProps = (state) => {
    return {count: state}
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

const Slideshow = ({onIncrease, onDecrease, count, images}) => (
    <div>
        <div className="main">
            <img src={images[count].url}/>
            <h1>{images[count].caption}</h1>
            <button onClick={onDecrease}>Prev</button>
            {count}
            <button onClick={onIncrease}>Next</button>
        </div>
    </div>
)

{/*Slideshow.propTypes = {
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.bool.isRequired,
  count: PropTypes.string.isRequired
}*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Slideshow)
