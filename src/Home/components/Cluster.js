import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree, useFrame, extend, useLoader } from "@react-three/fiber";
import { Edges, Billboard, Text, Image } from "@react-three/drei";
import {
	useCompoundBody,
	useSphere,
	useBox,
	Physics,
} from "@react-three/cannon";
import K8sIcon from "../assets/k8s-icon.png";
import CephIcon from "../assets/ceph-icon.png";
import DockerIcon from "../assets/docker-icon.png";
import NautilusIcon from "../assets/nautilus-icon.png";
import NsfIcon from "../assets/nsf-icon.png";
import GitlabIcon from "../assets/gitlab-icon.png";
import ElementIcon from "../assets/element-icon.svg";
import PodsIcon from "../assets/pods-icon.png";
import PrpIcon from "../assets/prp-icon.jpeg";
import UcsdIcon from "../assets/ucsd-icon.png";

const vec = new THREE.Vector3();
// const testMaterial = new THREE.MeshStandardMaterial({ color: "yellow", map: new THREE.TextureLoader().load(testIcon) });
const testMaterial = new THREE.MeshStandardMaterial({
	color: "white",
	transparent: true,
	opacity: 0,
});
const testGeometry = new THREE.BoxGeometry(0.65, 0.65, 0.65);

export default function Cluster(props) {
	const iconUrls = [
		K8sIcon,
		CephIcon,
		DockerIcon,
		NautilusIcon,
		NsfIcon,
		GitlabIcon,
		ElementIcon,
		PodsIcon,
		PrpIcon,
		UcsdIcon,
	];
	const objectsArr = [];
	for (let i = 0; i < 10; i++) {
		objectsArr.push(<Object key={i} url={iconUrls[i]} />);
	}
	return (
		<Physics gravity={[0, 0, 0]}>
			{/* <Object /> */}
			{objectsArr}
			{/* {testBoxes} */}
			<Cursor />
			<Base />
		</Physics>
	);
}

function Object(props) {
	const [ref, api] = useBox(() => ({
		args: [0.65, 0.65, 0.65],
		mass: 1,
		angularDamping: 0.9,
		linearDamping: 0.9,
		position: [0, 0, 0],
	}));

	useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-20).toArray(), [0, 0, 0])), [api]) // prettier-ignore

	const pos = useRef([0, 0, 0]);
	useEffect(() => api.position.subscribe((v) => (pos.current = v)), []);

	const imageRef = useRef();

	useFrame(() => {
		imageRef.current.position.x = pos.current[0];
		imageRef.current.position.y = pos.current[1];
		imageRef.current.position.z = pos.current[2];
	});
	return (
		// <group ref={ref} dispose={null}>
		// 	<mesh
		// 		castShadow
		// 		receiveShadow
		// 		geometry={testGeometry}
		// 		material={testMaterial}
		// 	/>
		// </group>
		<group>
			<group ref={ref} dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={testGeometry}
					material={testMaterial}
				>
					{/* <Edges scale={2} threshold={15} color="white" />
					<Edges scale={1.99} threshold={15} color="white" />
					<Edges scale={1.98} threshold={15} color="white" /> */}
					<Edges scale={1} threshold={15} color="white" />
					<Edges scale={1.005} threshold={15} color="white" />
					<Edges scale={1.01} threshold={15} color="white" />
				</mesh>

				{/* <Image url={props.url} scale={0.5} rotation={[0, 0, 0]} />
				<Image url={props.url} scale={0.5} rotation={[0, Math.PI / 2, 0]} />
				<Image url={props.url} scale={0.5} rotation={[0, -Math.PI / 2, 0]} /> */}
			</group>
			<Billboard ref={imageRef}>
				<Image
					url={props.url}
					scale={0.5}
					rotation={[Math.PI + 0.5, 0, 0]}
				/>
			</Billboard>
		</group>
	);
}

function Base(props) {
	const [ref, api] = useBox(() => ({
		type: "Kinematic",
		args: [8, 8, 0.05],
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
			{/* <boxGeometry attach="geometry" args={[8, 8, 0.05]} />
			<meshPhongMaterial attach="material" transparent={true} opacity={0} /> */}
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
