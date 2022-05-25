import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Demo from "./Demo/Demo.js";
import Element from "./Element/Element.js";


export default function App() {
	return (
		<div id="app">
			<nav className="nav-bar">
                <div className="nav-bar-logo">
                    ARNO
                </div>
				<Link className="nav-bar-link" to="/">Home</Link>
				<Link className="nav-bar-link" to="/about">About</Link>
				<Link className="nav-bar-link" to="/demo">Demo</Link>
				<Link className="nav-bar-link" to="/element">Element</Link>
			</nav>
			<Routes>
				<Route exact path="/" element={<Home className="hello"/>} />
                <Route path="demo" element={<Demo />} />
                <Route path="/element" element={<Element />} />
			</Routes>
            
		</div>
	);
}
