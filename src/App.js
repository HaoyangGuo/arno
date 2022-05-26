import React, { useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Demo from "./Demo/Demo.js";
import Element from "./Element/Element.js";

import { SuncaveContext } from "./Home/SuncaveContext.js";

export default function App() {
	const { enteredSuncave, EnterSuncave, ExitSuncave } =
		useContext(SuncaveContext);
	return (
		<div id="app">
			<nav className="nav-bar">
				<div className="nav-bar-logo">ARNO</div>
				<Link className="nav-bar-link" to="/">
					Home
				</Link>
				<div onClick={EnterSuncave} className="nav-bar-link">
					About
				</div>
				<Link className="nav-bar-link" to="/demo">
					Demo
				</Link>
				<Link className="nav-bar-link" to="/element">
					Element
				</Link>
				{enteredSuncave && (
					<div className="nav-bar-exit" onClick={ExitSuncave}>
						EXIT THE SUNCAVE
					</div>
				)}
			</nav>
			<Routes>
				<Route exact path="/" element={<Home className="hello" />} />
				<Route path="demo" element={<Demo />} />
				<Route path="/element" element={<Element />} />
			</Routes>
		</div>
	);
}
