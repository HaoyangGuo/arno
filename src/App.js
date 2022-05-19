import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Demo from "./Demo/Demo.js";
import Element from "./Element/Element.js";


export default function App() {
	return (
		<div id="app">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/demo">Demo</Link>
				<Link to="/element">Element</Link>
			</nav>
			<Routes>
				<Route exact path="/" element={<Home className="hello"/>} />
                <Route path="/about" element={<About />} />
                <Route path="demo" element={<Demo />} />
                <Route path="/element" element={<Element />} />
			</Routes>
		</div>
	);
}
