import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counterReducer'
import apiReducer from './apiReducer'

export default combineReducers({
	counterReducer: counterReducer,
	apiReducer: apiReducer,
	router: routerReducer
})