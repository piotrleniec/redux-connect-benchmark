import * as actionTypes from './actionTypes'

export const incrementTimerValue = timerId => ({
  type: actionTypes.INCREMENT_TIMER_VALUE,
  payload: { timerId }
})
