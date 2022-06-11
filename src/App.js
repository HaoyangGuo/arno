import React, { useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Demo from "./Demo/Demo.js";
import Element from "./Element/Element.js";

import { SuncaveContext } from "./Home/SuncaveContext.js";

export default function App() {
	const { enteredSuncave, EnterSuncave, ExitSuncave, showProjectDetail } =
		useContext(SuncaveContext);
	return (
		<div id="app">
			<nav className="nav-bar">
				<div className="nav-bar-logo">
					<div className="nav-bar-logo-base">ARNO</div>
					<div className="nav-bar-logo-red">ARNO</div>
					<div className="nav-bar-logo-green">ARNO</div>
				</div>
				{!enteredSuncave && (
					<Link className="nav-bar-link hoverable" to="/">
						HOME
					</Link>
				)}
				{!enteredSuncave && (
					<Link onClick={EnterSuncave} className="nav-bar-link hoverable" to="/">
						PROJECTS
					</Link>
				)}
				{!enteredSuncave && (
					<Link className="nav-bar-link hoverable" to="/demo">
						DEMO
					</Link>
				)}
				{!enteredSuncave && (
					<Link className="nav-bar-link hoverable" to="/element">
						ELEMENT
					</Link>
				)}
				{/* {!enteredSuncave && <div className="nav-bar-line"></div>} */}
				{enteredSuncave && !showProjectDetail && (
					<div className="nav-bar-exit hoverable" onClick={ExitSuncave}>
						EXIT SUNCAVE
					</div>
				)}
				<div className="project-card">
					
				</div>
			</nav>
			<Routes>
				<Route exact path="/" element={<Home className="hello" />} />
				<Route path="demo" element={<Demo />} />
				<Route path="/element" element={<Element />} />
			</Routes>
		</div>
	);
}
