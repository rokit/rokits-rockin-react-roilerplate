import axios from 'axios'

// Reddit example
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
const receivePosts = (subreddit, json) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchPosts = (subreddit) => dispatch => {
	dispatch(requestPosts(subreddit))
	return axios.get(`https://www.reddit.com/r/${subreddit}.json`)
	.then(
		response => response.data,
		error => console.log('An error occured.', error)
	)
	.then(json =>
		dispatch(receivePosts(subreddit, json))
	)
}