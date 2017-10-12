import { fromJS } from 'immutable'

import {
	REQUEST_POSTS,
	RECEIVE_POSTS
} from '../actions/apiActions'

var initialState = {
	requesting: false,
	posts: []
}

var immutableState = fromJS(initialState)

const apiReducer = (state = immutableState, action) => {
	switch(action.type) {
		case REQUEST_POSTS: {
			return state.set('requesting', true)
		}
		case RECEIVE_POSTS: {
			state = state.set('posts', action.posts)
			state = state.set('requesting', false)
			return state
		}
		default: {
			return state
		}
	}
}

export default apiReducer