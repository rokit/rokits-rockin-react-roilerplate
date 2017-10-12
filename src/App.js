import React, { Component } from 'react'
import './App.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './redux/actions'

import {
	Switch,
	Route,
	Link
} from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import RedditPosts from './containers/RedditPosts'
import NotFound from './containers/NotFound'

import Header from './components/Header'

class App extends Component {

	handleComponentClick = () => {
		// all of our redux actions are mapped to the component's props
		this.props.increment()
		
	}

	handleButtonClick = () => {
		// programmatically change the route
		// redux still handles the history
		this.props.history.push('/reddit-posts')
		this.props.fetchPosts('reactjs')
	}

  render() {
		const posts = this.props.api.get('posts').map((post) =>
    	<p key={post.id}><a href={`https://www.reddit.com${post.permalink}`} >{post.title}</a></p>
		);

    return (
				<div className="app" onClick={this.handleComponentClick}>
					<Header />
					<p className="app-intro">
						Click anywhere to dispatch a redux action that will increment the counter by one.
					</p>
					<h2>Counter: {this.props.counter}</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>

					<button onClick={this.handleButtonClick}>Programmatically push to a different page. This is not a link.</button>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route exact path="/reddit-posts" render={()=>
							<RedditPosts posts={posts} requesting={this.props.api.get('requesting')} />} />
						<Route component={NotFound} />
					</Switch>
				</div>
    );
  }
}

const mapStateToProps = (state) => {
	// the name "counterReducer" comes from the name of our reducer in 'reducers/index.js'
	return {
		counter: state.counterReducer.get('counter'),
		router: state.router,
		api: state.apiReducer
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)