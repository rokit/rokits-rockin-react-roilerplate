import { fromJS } from 'immutable'

import {
	INCREMENT,
	DECREMENT
} from '../actions/counterActions'

var initialState = {
	counter: 0
}
var immutableState = fromJS(initialState)

const counterReducer = (state = immutableState, action) => {
	switch(action.type) {
		case INCREMENT: {
			return state.set('counter', state.get('counter') + 1)
			// return {...state, counter: state.counter + action.value}
		}
		case DECREMENT: {
			return state.set('counter', state.get('counter') - 1)			
			// return {...state, counter: state.counter - action.value}
		}
		default: {
			return state
		}
	}
}

export default counterReducer