import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { SuncaveContextProvider } from "./Home/SuncaveContext";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<SuncaveContextProvider>
				<App />
			</SuncaveContextProvider>
		</Router>
	</React.StrictMode>
	,document.getElementById("root")
);
