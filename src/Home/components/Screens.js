import React, { useState, useEffect, useContext } from "react";
// import videoPath from "../assets/placeholdervideo.mp4";
import * as THREE from "three";

export default function Screens(props) {
	return (
		<group position={props.position} rotation={props.rotation}>
			<Screen
				position={[0, 0.775, -0.75]}
				rotation={[Math.PI / 6 + 0.1, 0, 0]}
				playVideo={props.playVideo}
				ShowProjectCard={props.ShowProjectCard}
        enteredSuncave={props.enteredSuncave}
			/>
			<Screen
				position={[0, 0.45, -0.85]}
				rotation={[Math.PI / 10, 0, 0]}
				playVideo={props.playVideo}
				ShowProjectCard={props.ShowProjectCard}
        enteredSuncave={props.enteredSuncave}
			/>
			<Screen
				position={[0, 0.15, -0.9]}
				playVideo={props.playVideo}
				ShowProjectCard={props.ShowProjectCard}
        enteredSuncave={props.enteredSuncave}
			/>
			<Screen
				position={[0, -0.15, -0.85]}
				rotation={[-Math.PI / 10, 0, 0]}
				playVideo={props.playVideo}
				ShowProjectCard={props.ShowProjectCard}
        enteredSuncave={props.enteredSuncave}
			/>
			<Screen
				position={[0, -0.4, -0.65]}
				rotation={[-Math.PI / 4, 0, 0]}
				playVideo={props.playVideo}
				ShowProjectCard={props.ShowProjectCard}
        enteredSuncave={props.enteredSuncave}
			/>
		</group>
	);
}

function Screen(props) {
	// const { enteredSuncave, ShowProjectCard } = useContext(SuncaveContext);
	const [hovered, hover] = useState(false);
	// const [video] = useState(() =>
	// 	Object.assign(document.createElement("video"), {
	// 		src: videoPath,
	// 		crossOrigin: "Anonymous",
	// 		loop: true,
	// 		muted: true,
	// 	})
	// );
	// useEffect(
	// 	() => void (props.playVideo && video.play()),
	// 	[video, props.playVideo]
	// );
	useEffect(() => {
		document.body.style.cursor = hovered && props.enteredSuncave ? "pointer" : "auto";
	}, [hovered]);
	return (
		<mesh
			position={props.position}
			rotation={props.rotation}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
      onClick={() => props.ShowProjectCard(props.youtubeUrl)}
		>
			<planeGeometry attach="geometry" args={[0.55, 0.26]} />
			<meshStandardMaterial attach="material" side={0}>
				{/* <videoTexture
					attach="map"
					args={[video]}
					encoding={THREE.sRGBEncoding}
				/> */}
			</meshStandardMaterial>
		</mesh>
	);
}
