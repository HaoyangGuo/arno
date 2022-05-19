import React, { useEffect } from "react";
import * as THREE from "three";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useCompoundBody, useSphere, useBox } from "@react-three/cannon";
import { RGBA_ASTC_12x12_Format } from "three";

const vec = new THREE.Vector3();
const testMaterial = new THREE.MeshStandardMaterial({ color: "yellow" });
const testGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

function Devices(props) {
	const [ref, api] = useBox(() => ({
		args: [0.5, 0.5, 0.5],
		mass: 1,
		angularDamping: 0.9,
		linearDamping: 0.9,
		position: [0, 0, 0],
	}));

	useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-20).toArray(), [0, 0, 0])), [api]) // prettier-ignore

	return (
		<group ref={ref} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={testGeometry}
				material={testMaterial}
			/>
		</group>
	);
}

function Base(props) {
	const [ref, api] = useBox(() => ({
		type: "Kinematic",
		args: [3, 3, 0.05],
		position: [0, 0.75, 0.75],
		rotation: [-0.8, 0, 0],
	}));

	return (
		<mesh
			ref={ref}
			dispose={null}
			position={[0, 0.75, 0.75]}
			rotation={[-0.8, 0, 0]}
		>
			<boxGeometry attach="geometry" args={[3, 3, 0.05]} />
			<meshStandardMaterial attach="material" color="red" />
		</mesh>
	);
}

function Cursor({ ...props }) {
	const viewport = useThree((state) => state.viewport);
	const [, api] = useSphere(() => ({
		type: "Kinematic",
		args: [1],
		// position: [0, 0, 0],
	}));
	return useFrame((state) =>
		api.position.set(
			(state.mouse.x * viewport.width) / 2,
			(state.mouse.y * viewport.height) / 2,
			0
		)
	);
}

export { Devices, Cursor, Base };
