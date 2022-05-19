import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
	useScroll,
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
import { Devices, Cursor, Base } from "../components/Cluster";
import Geisel from "../components/Geisel";
import Trails from "../components/Trails";

export default function Planet(props) {
	const data = useScroll();
	const planet = useRef(null);
	const [playVideo, setPlayVideo] = useState(false);
	const [showNetwork, setShowNetwork] = useState(false);
	const [showCluster, setShowCluster] = useState(true);

	useFrame(() => {
		planet.current.rotation.x = Math.PI * data.range(0, 1);
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

	console.log("rerendered");

	const testBoxes = [];
	for (let i = 0; i < 10; i++) {
		testBoxes.push(<Devices key={i} />);
	}

	function calculateCordinates(r, theta, phi) {
		const vec = new THREE.Vector3();
		vec.setFromSphericalCoords(r, theta, phi);
		return vec;
	}

	const vaporWaveColors = [
		"#FEFE69",
		"#FFF668",
		"#F8CE64",
		"#F2A178",
		"#EF8B82",
		"#ED778B",
		"#EB6793",
		"#E9599A",
		"#E84EA7",
		"#E848AC",
	];
	const vaporWave = [];
	for (let i = 0; i < 1; i++) {
		vaporWave.push(
			<Trails key={i} color={vaporWaveColors[9 - i]} higher={i * 0.05} />
		);
	}

	return (
		<group ref={planet} {...props}>
			{vaporWave}
			{/* <Trails color={"red"} higher={0} /> */}

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
			<Bear position={[2.2, 12.5, 0]} rotation={[0, 0, -0.25]} />
			{/* atkinson */}
			<Atkinson
				position={[0, 0, -12.4]}
				rotation={[Math.PI + Math.PI / 2, 0, 0]}
				scale={[0.5, 0.5, 0.5]}
			/>
			{/* suncave */}
			<Suncave position={[0, -11.9, 0]} scale={[0.5, 0.35, 0.5]} />

			{/* videotext */}
			<VideoText
				playVideo={playVideo}
				position={[0, -13.5, 3]}
				rotation={[Math.PI, 0, 0]}
			/>

			{/* cluster */}
			{showCluster && (
				<group position={[0, -9.5, -9]}>
					<Physics gravity={[0, 0, 0]}>
						<Devices />
						{testBoxes}
						<Cursor />
						<Base />
					</Physics>
				</group>
			)}
		</group>
	);
}
