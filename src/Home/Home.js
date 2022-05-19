import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
	Scroll,
	ScrollControls,
	useScroll,
	Stars,
	OrbitControls,
    Cloud
} from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import { MeshLine, MeshLineMaterial } from "./MeshLine";

import Planet from "./components/Planet";
import Html from "./components/Html";

extend({ MeshLine, MeshLineMaterial });

export default function Home() {
	return (
		<Canvas camera={{ fov: 55, position: [0, 0, 5] }}>
			<Suspense fallback={null}>
				//"#332FD0"
				<color attach="background" args={["midnightblue"]} />
				<OrbitControls />
				<Stars />
                
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				{/* <CameraLerp /> */}
				<ScrollControls pages={[5]}>
					<Planet position={[0, -12.5, 0]} />
					{/* <Scroll html>
						<Html />
					</Scroll> */}
				</ScrollControls>
				<gridHelper
					args={[40, 20, "red", "white"]}
					position={[0, -12.5, 0]}
				/>
				<gridHelper
					args={[40, 20, "red", "white"]}
					position={[0, -12.5, 0]}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<gridHelper
					args={[40, 20, "red", "white"]}
					position={[0, -12.5, 0]}
					rotation={[0, 0, Math.PI / 2]}
				/>
			</Suspense>
		</Canvas>
	);
}

function CameraLerp() {
	useFrame(({ mouse, camera }) => {
		camera.position.x = THREE.MathUtils.lerp(
			camera.position.x,
			mouse.x * 0.5,
			0.03
		);
		camera.position.y = THREE.MathUtils.lerp(
			camera.position.y,
			mouse.y * 0.8,
			0.01
		);
		camera.position.z = THREE.MathUtils.lerp(
			camera.position.z,
			Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
			0.01
		);
		camera.rotation.y = THREE.MathUtils.lerp(
			camera.rotation.y,
			mouse.x * -Math.PI * 0.025,
			0.001
		);
	});
	return <></>;
}
