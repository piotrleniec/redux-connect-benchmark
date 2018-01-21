import React from 'react'
import { connect } from 'react-redux'
import { setNumber } from '../actions'

const NumberInput = props => (
  <input type="number" value={props.number} onChange={props.setNumber} />
)

const mapStateToProps = state => ({
  number: state.number
})

const mapDispatchToProps = dispatch => ({
  setNumber: event => { dispatch(setNumber(event.target.value)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput)
