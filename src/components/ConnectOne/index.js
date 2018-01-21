import React from 'react'
import { connect } from 'react-redux'
import { range } from 'lodash-es'
import { incrementTimerValue } from '../../actions'
import Timer from './Timer'

const ConnectOne = props => (
  <div>
    <Timer
      delay={10}
      value={props.timers[-1] || 0}
      id={-1}
      incrementTimerValue={props.incrementTimerValue}
    />
    {range(100).map(index =>
      <Timer
        key={index}
        delay={Math.ceil(1000 * Math.random())}
        value={props.timers[index] || 0}
        incrementTimerValue={props.incrementTimerValue}
        id={index}
      />
    )}
  </div>
)

const mapStateToProps = state => ({
  timers: state.timers
})

const mapDispatchToProps = {
  incrementTimerValue
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectOne)
