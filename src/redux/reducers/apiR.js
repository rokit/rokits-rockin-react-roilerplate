import { fromJS } from 'immutable'

import Actions from '../actions/apiA'

var initialState = {
	requesting: false,
	posts: [],
	msg: ""
}

var immutableState = fromJS(initialState)

const apiReducer = (state = immutableState, action) => {
	switch(action.type) {
		case Actions.REQUEST_POSTS: {
			state = state.set('msg', '')
			return state.set('requesting', true)
		}
		case Actions.RECEIVE_POSTS: {
			state = state.set('posts', action.posts)
			state = state.set('requesting', false)
			state = state.set('msg', '')
			return state
		}
		case Actions.RECEIVE_POSTS_FAILED: {
			state = state.set('requesting', false)
			state = state.set('msg', action.msg)
			return state
		}
		default: {
			return state
		}
	}
}

export default apiReducer