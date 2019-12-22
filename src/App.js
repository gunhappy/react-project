import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Info from './pages/info'

import 'bulma/css/bulma.css'

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/">
							<img
								src="https://bulma.io/images/bulma-logo.png"
								width="112"
								height="28"
								alt=""
							/>
						</Link>
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<Link to="/" className="navbar-item">
								Home
							</Link>
							<Link to="/info" className="navbar-item">
								Information
							</Link>
							<Link to="/about" className="navbar-item">
								About
							</Link>
						</div>
					</div>
				</nav>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/info">
						<Info />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
