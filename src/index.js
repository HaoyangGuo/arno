import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { SuncaveContextProvider } from "./Home/SuncaveContext";

ReactDOM.render(
	<React.StrictMode>
			<SuncaveContextProvider>
				<App />
			</SuncaveContextProvider>
	</React.StrictMode>
	,document.getElementById("root")
);
