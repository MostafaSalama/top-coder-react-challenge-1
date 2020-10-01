import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<AppLinks/>
			</BrowserRouter>
		</div>
	);
}
const AppLinks = ()=>{
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/About'>About</Link>
			<Link to='/speed-counter'>Speed Counter</Link>
		</>
	)
}
export default App;
