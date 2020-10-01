import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css'
import Home from "./views/Home";
import About from "./views/About";
import SpeedCounterPage from "./views/SpeedCounter";
function App() {
	return (
		<div>
			<BrowserRouter>
				<AppLinks />
				<AppRoutes/>
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
const AppRoutes = ()=>{
	return (
		<>
			<Route path='/' exact><Home/></Route>
			<Route path='/about'><About/></Route>
			<Route path='/speed-counter'><SpeedCounterPage/></Route>
			</>
	)
}
export default App;
