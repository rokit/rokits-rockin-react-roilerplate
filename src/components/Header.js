import React, {Component} from 'react'
import logo from '../images/logo.svg'

import './Header.css'

class Header extends Component {
	state = {}
	render() {
		return (
			<div className="app-header">
				<img src={logo} className="app-logo" alt="logo" />
				<div className="app-name">New App</div>					
			</div>
		)
	}
}

export default Header