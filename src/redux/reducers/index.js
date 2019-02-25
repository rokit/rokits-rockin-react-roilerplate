import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counterR'
import apiReducer from './apiR'

export default combineReducers({
	counterReducer: counterReducer,
	apiReducer: apiReducer,
	router: routerReducer
})