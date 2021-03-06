import React, { useEffect, useRef, useState, useContext } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import {
	useScroll,
	Html,
	Edges,
	GradientTexture,
	useTexture,
	Billboard,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import Atkinson from "../components/Atkinson";
import Bear from "../components/Bear";
import Suncave from "../components/Suncave";
import VideoText from "../components/VideoText";
import Network from "../components/Network";
// import Objects, { Object, Cursor, Base } from "../components/Cluster";
import Cluster from "../components/Cluster";
import Geisel from "../components/Geisel";
import Trails from "../components/Trails";
import Particles from "./Particles";
import Screens from "./Screens";


export default function Planet(props) {
	const data = useScroll();
	const planet = useRef(null);
	const [playVideo, setPlayVideo] = useState(false);
	const [showNetwork, setShowNetwork] = useState(false);
	const [showCluster, setShowCluster] = useState(true);
	const { camera } = useThree();

	useFrame(() => {
		if (props.enteredSuncave == false) {
			planet.current.rotation.x = Math.PI * data.range(0, 1);
		} else if (props.enteredSuncave == true && camera.position.z > 0.5) {
			camera.position.z -= 0.1;
		}
		if (data.range(0, 1) > 0.8 && !playVideo) {
			setPlayVideo(true);
		}

		if (data.range(0, 1) > 0.4 && data.range(0, 1) < 0.6 && !showNetwork) {
			setShowNetwork(true);
		} else if (
			(showNetwork && data.range(0, 1) < 0.4) ||
			data.range(0, 1) > 0.6
		) {
			setShowNetwork(false);
		}
		// animatedPath.current.position.z = data.range(0, 1);
		if (data.range(0, 1) > 0.85 && showCluster) {
			setShowCluster(false);
		}
		if (data.range(0, 1) < 0.85 && !showCluster) {
			setShowCluster(true);
		}
	});

	useEffect(() => {
		if (props.enteredSuncave == true) {
			planet.current.rotation.x = Math.PI;
			setPlayVideo(true);
		} else {
			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = 5;
			camera.rotation.x = 0;
			camera.rotation.y = 0;
			camera.rotation.z = 0;
		}
	}, [props.enteredSuncave]);

	// console.log("rerendered");

	// const testBoxes = [];
	// for (let i = 0; i < 10; i++) {
	// 	testBoxes.push(<Object key={i} />);
	// }

	function calculateCordinates(r, theta, phi) {
		const vec = new THREE.Vector3();
		vec.setFromSphericalCoords(r, theta, phi);
		return vec;
	}

	// const vaporWaveColors = [
	// 	"#FEFE69",
	// 	"#FFF668",
	// 	"#F8CE64",
	// 	"#F2A178",
	// 	"#EF8B82",
	// 	"#ED778B",
	// 	"#EB6793",
	// 	"#E9599A",
	// 	"#E84EA7",
	// 	"#E848AC",
	// ];
	// const vaporWave = [];
	// for (let i = 0; i < 10; i++) {
	// 	vaporWave.push(
	// 		<Trails key={i} color={vaporWaveColors[9 - i]} higher={i * 0.05} />
	// 	);
	// }

	return (
		<group ref={planet} {...props}>
			{/* {vaporWave} */}
			{/* <Trails color={"red"} higher={0} /> */}

			{/* particles */}
			<Particles />

			{/* globe */}
			<mesh scale={[1, 1, 1]} receiveShadow>
				<sphereBufferGeometry attach="geometry" args={[12, 64, 64]} />
				<meshStandardMaterial
					attach="material"
					color="#E15FED"
					// transparent={true}
					// opacity={0.5}
				></meshStandardMaterial>
			</mesh>

			{/* placeholder */}

			{/* geisel */}
			<Geisel position={[-2, 9.8, -8]} rotation={[-0.675, 0, 0.2]} />

			{/* network */}
			<Network showNetwork={showNetwork} />
			{/* warren bear */}
			<Bear position={[1.5, 12.5, 0]} rotation={[0, 0, -0.25]} />
			{/* atkinson */}
			<Atkinson
				position={[0, 0, -12.4]}
				rotation={[Math.PI + Math.PI / 2, 0, 0]}
				scale={[0.5, 0.5, 0.5]}
			/>
			{/* suncave */}
			<Suncave position={[0, -11.95, 0]} scale={[0.5, 0.5, 0.5]} />

			{/* screens */}
			{/* front */}
			<Screens
				position={[0, -12.525, 0]}
				rotation={[-Math.PI, 0, 0]}
				playVideo={playVideo}
        enteredSuncave={props.enteredSuncave}
        ShowProjectCard={props.ShowProjectCard}
			/>
			{/* left front */}
			<Screens
				position={[-0.0055, -12.525, -0.0055]}
				rotation={[-Math.PI, Math.PI / 3, 0]}
				playVideo={playVideo}
        enteredSuncave={props.enteredSuncave}
        ShowProjectCard={props.ShowProjectCard}
			/>
			{/* right front */}
			<Screens
				position={[0.0055, -12.525, 0.0055]}
				rotation={[-Math.PI, -Math.PI / 3, 0]}
				playVideo={playVideo}
        enteredSuncave={props.enteredSuncave}
        ShowProjectCard={props.ShowProjectCard}
			/>
			{/* left back */}
			<Screens
				position={[0.0055, -12.525, -0.0055]}
				rotation={[-Math.PI, Math.PI / 1.5, 0]}
				playVideo={playVideo}
        enteredSuncave={props.enteredSuncave}
        ShowProjectCard={props.ShowProjectCard}
			/>
			{/* right front */}
			<Screens
				position={[0.0055, -12.525, -0.0055]}
				rotation={[-Math.PI, Math.PI + Math.PI / 3, 0]}
				playVideo={playVideo}
        enteredSuncave={props.enteredSuncave}
        ShowProjectCard={props.ShowProjectCard}
			/>

			{/* videotext */}
			<VideoText
				playVideo={playVideo}
				position={[0, -15, 3]}
				rotation={[Math.PI, 0, 0]}
			/>

			{/* cluster */}
			{showCluster && (
				<group position={[0, -9.25, -9]}>
					<Cluster />
				</group>
			)}
		</group>
	);
}
