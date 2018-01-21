import * as actionTypes from './actionTypes'

export const setNumber = value => ({
  type: actionTypes.SET_NUMBER,
  payload: { value }
})
