import React from "react";

export default function Html() {
	return (
		<div
			style={{
				background: "white",
				fontFamily: "sans-serif",
				fontSize: "min(12vw, 86px)",
				lineHeight: 0.75,
			}}
		>
			<h1
				style={{
					position: "absolute",
					top: "50vh",
					left: "50vw",
					transform: "translateX(-50%)",
					color: "white",
					margin: 0,
				}}
			>
				EXPLORE
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "140vh",
					left: "70vw",
					transform: "translateX(-65%)",
					color: "white",
					margin: 0,
				}}
			>
				THE&nbsp;NEXT
			</h1>
			<h1
				style={{
					position: "absolute",
					top: "250vh",
					left: "35vw",
					transform: "translateX(-50%)",
					color: "white",
					margin: 0,
				}}
			>
				REALITY
			</h1>
            <h1
				style={{
					position: "absolute",
					top: "350vh",
					left: "50vw",
					transform: "translateX(-50%)",
					color: "white",
					margin: 0,
				}}
			>
				WITH
			</h1>
		</div>
	);
}
