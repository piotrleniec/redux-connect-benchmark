import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const number = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.SET_NUMBER:
      return payload.value
    default:
      return state
  }
}

export default combineReducers({
  number
})
