import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const timers = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT_TIMER_VALUE:
      const timerValue = state[payload.timerId] || 0

      return { ...state, [payload.timerId]: timerValue + 1 }
    default:
      return state
  }
}

export default combineReducers({
  timers
})
