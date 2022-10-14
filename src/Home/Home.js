import React, { Suspense, useContext } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
	Scroll,
	ScrollControls,
	OrbitControls,
} from "@react-three/drei";

import * as THREE from "three";
import { MeshLine, MeshLineMaterial } from "./MeshLine";

import Planet from "./components/Planet";
import Html from "./components/Html";

import { SuncaveContext } from "./SuncaveContext";

import CloseIcon from "../Home/assets/close-icon.svg";

extend({ MeshLine, MeshLineMaterial });

export default function Home() {
	const {
		enteredSuncave,
		EnterSuncave,
		ExitSuncave,
		ShowProjectCard,
		CloseProjectCard,
		showProjectDetail,
	} = useContext(SuncaveContext);
	return (
		<div className="full">
			{showProjectDetail && (
				<div className="product-card">
					<div onClick={CloseProjectCard}>
						<img src={CloseIcon} className="close" />
					</div>
					<div className="iframe-container">
						<iframe
							className="responsive-iframe"
							src="https://www.youtube.com/embed/1pOCzFvyKG4"
							frameborder="0"
							allow="autoplay; encrypted-media"
							allowfullscreen
							title="video"
						/>{" "}
					</div>
				</div>
			)}
			<Canvas camera={{ fov: 55, position: [0, 0, 5] }}>
				<Suspense fallback={null}>
					<color attach="background" args={["midnightblue"]} />
					{/* <color attach="background" args={["blue"]} /> */}
					{enteredSuncave && (
						<OrbitControls enableZoom={false} enablePan={false} />
					)}
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					{/* <CameraLerp /> */}
					<ScrollControls pages={[5]}>
						<Planet
							position={[0, -12.5, 0]}
							enteredSuncave={enteredSuncave}
							EnterSuncave={EnterSuncave}
							ShowProjectCard={ShowProjectCard}
						/>
						<Scroll html>
							<Html
								enteredSuncave={enteredSuncave}
								EnterSuncave={EnterSuncave}
							/>
						</Scroll>
					</ScrollControls>
					{/* <gridHelper
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
				/> */}
				</Suspense>
			</Canvas>
		</div>
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
