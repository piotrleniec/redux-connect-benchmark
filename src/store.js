import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import reducers from './reducers'

export default createStore(reducers, applyMiddleware(reduxLogger))
