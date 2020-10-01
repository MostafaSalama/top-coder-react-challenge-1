import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css'
function App() {
	return (
		<div>
			<BrowserRouter>
				<AppLinks />
			</BrowserRouter>
		</div>
	);
}
const AppLinks = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/speed-counter">Speed Counter</Link>
				</li>
			</ul>
		</nav>
	);
};
export default App;
