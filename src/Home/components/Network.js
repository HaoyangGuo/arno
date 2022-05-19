import React, { useLayoutEffect, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PointMaterial, Point, Points } from "@react-three/drei";

export default function Network(props) {
	// Math.random() * (max - min) + min;
	const fibers = [];
	const light = [];
	for (let i = -25; i <= 25; i += 2) {
		const Start = [0, 0, -12];
		const End = [i * 1.2, -5, -30];
		fibers.push(<Fiber start={Start} end={End} key={i} />);
		light.push(
			<MovingPoint
				position={[0, 0, -12]}
				ending={[i * 1.2, -5, -30]}
				key={i}
			/>
			// <MovingPoint position={[0, -1, -3]} ending={[i * 2, 20, -10]} />
		);
	}

	console.log(props.showNetwork);
	return (
		<group {...props}>
			{props.showNetwork && <Light points={light} />}
			{props.showNetwork && fibers}
		</group>
	);
}

function Fiber({ start, end }) {
	const ref = useRef();
	const timerRef = useRef();
	let geometry;

	useLayoutEffect(() => {
		geometry = new THREE.BufferGeometry().setFromPoints(
			[start, end].map((point) => new THREE.Vector3(...point))
		);
		ref.current.setGeometry(geometry);
	}, [start, end]);

	const [opacity, setOpacity] = React.useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setOpacity((prevOpacity) => prevOpacity + 0.05);
		}, 100);
		timerRef.current = timer;
		return () => {
			clearInterval(timer);
		};
	}, [opacity]);
	useEffect(() => {
		if (opacity > 1) {
			clearInterval(timerRef.current);
		}
	}, [opacity]);
	// console.log(opacity);
	return (
		// <line ref={ref}>
		// 	<bufferGeometry />
		// 	<lineBasicMaterial
		// 		color="#06FF00"
		// 		transparent={true}
		// 		opacity={[opacity + 0.1]}
		// 	/>
		// </line>
		<mesh>
			<meshLine attach="geometry" ref={ref} />
			<meshLineMaterial
				transparent
				// depthTest={false}
				lineWidth={0.025}
				color={"#06FF00"}
				opacity={[opacity + 0.1]}
				// dashArray={0.1}
				// dashRatio={0.2}
                alphaTest={0.1}
			/>
        	{/* <meshBasicMaterial
                attach="material"
				color="#06FF00"
		 		transparent={true}
		 		opacity={[opacity + 0.1]}
		 	/> */}
		</mesh>
	);
}

function Light(props) {
	return (
		<Points {...props}>
			<PointMaterial
				transparent
				color="#fff"
				// size={0.03999}
                size={0.1}
				sizeAttenuation={true}
				depthWrite={false}
			/>
			{props.points}
		</Points>
	);
}

function MovingPoint(props) {
	const singularLight = useRef();
	const direction = [
		props.ending[0] - props.position[0],
		props.ending[1] - props.position[1],
		props.ending[2] - props.position[2],
	];

	//Math.random() * (max - min) + min;
	const randomSpeedFactor = Math.random() * (0.5 - 0.1) + 0.5;
	useFrame((state, delta) => {
		if (singularLight.current.position.z < -15) {
			singularLight.current.position.x = 0;
			singularLight.current.position.y = 0;
			singularLight.current.position.z = -12;
		}
		singularLight.current.position.x +=
			((direction[0] * delta) / 2) * randomSpeedFactor * 0.1;
		singularLight.current.position.y +=
			((direction[1] * delta) / 2) * randomSpeedFactor * 0.1;
		singularLight.current.position.z +=
			((direction[2] * delta) / 2) * randomSpeedFactor * 0.1;
	});

	return <Point ref={singularLight} {...props} />;
}
