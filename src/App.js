import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const Hats = () => {
	return (
		<div>
			<h1>Hats</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Route exact path="/" component={Homepage} />
			<Route path="/hats" component={Hats} />
		</div>
	);
}

export default App;
