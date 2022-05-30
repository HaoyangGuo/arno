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
				<div className="nav-bar-logo">
            <div className="nav-bar-logo-base">ARNO</div>
            <div className="nav-bar-logo-red">ARNO</div>
            <div className="nav-bar-logo-green">ARNO</div>
        </div>
				<Link className="nav-bar-link" to="/">
					HOME
				</Link>
				<div onClick={EnterSuncave} className="nav-bar-link">
					PROJECTS
				</div>
				<Link className="nav-bar-link" to="/demo">
					DEMO
				</Link>
				<Link className="nav-bar-link" to="/element">
					ELEMENT
				</Link>
				{!enteredSuncave && <div className="nav-bar-line"></div>}
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
