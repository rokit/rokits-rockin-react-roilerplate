import axios from 'axios'

const Actions = {
	REQUEST_POSTS: 'REQUEST_POSTS',
	RECEIVE_POSTS: 'RECEIVE_POSTS',
	RECEIVE_POSTS_FAILED: 'RECEIVE_POSTS_FAILED'
}
export default Actions;

const requestPosts = subreddit => ({
	type: Actions.REQUEST_POSTS,
	subreddit
})

const receivePosts = (subreddit, data) => ({
	type: Actions.RECEIVE_POSTS,
	subreddit,
	posts: data.data.data.children.map(child => child.data),
	receivedAt: Date.now()
})

export const fetchPosts = subreddit => dispatch => {
	dispatch(requestPosts(subreddit))
	return axios.get(`https://www.reddit.com/r/${subreddit}.json`, {
		responseType:'json'
	})
	.then(data => {
		dispatch(receivePosts(subreddit, data))
	})
	.catch(error => dispatch({type: Actions.RECEIVE_POSTS_FAILED, msg: `${error}`}))
}