import React from 'react'
import { connect } from 'react-redux'
import { incrementTimerValue } from '../../actions'

class Timer extends React.Component {
  componentDidMount() {
    const incrementValue = () => {
      this.props.incrementTimerValue()

      this.timeoutId = setTimeout(incrementValue, this.props.delay)
    }

    this.timeoutId = setTimeout(incrementValue, this.props.delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  render() {
    return (
      <div className="timer">
        <p>Value: {this.props.value}</p>
        <p>Delay: {this.props.delay}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  value: state.timers[props.id]
})

const mapDispatchToProps = (dispatch, props) => ({
  incrementTimerValue: () => { dispatch(incrementTimerValue(props.id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
