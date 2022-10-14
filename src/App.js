import React, { useContext } from "react";
import Home from "./Home/Home.js";

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
					<div onClick={EnterSuncave} className="nav-bar-link hoverable">
						PROJECTS
					</div>
				)}
				{/* {!enteredSuncave && <div className="nav-bar-line"></div>} */}
				{enteredSuncave && !showProjectDetail && (
					<div className="nav-bar-exit hoverable" onClick={ExitSuncave}>
						EXIT SUNCAVE
					</div>
				)}
			</nav>
			<Home className="hello" />
		</div>
	);
}
