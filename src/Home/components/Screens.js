import React from "react";

export default function Screens(props) {
	return (
		<group {...props}>
			<mesh position={[0, 0.775, -0.75]} rotation={[Math.PI / 6, 0, 0]}>
				<planeGeometry attach="geometry" args={[0.55, 0.25]} />
				<meshStandardMaterial attach="material" color="red" side={2} />
			</mesh>
			<mesh position={[0, 0.45, -0.85]} rotation={[Math.PI / 10, 0, 0]}>
				<planeGeometry attach="geometry" args={[0.55, 0.25]} />
				<meshStandardMaterial attach="material" color="red" side={2} />
			</mesh>
			<mesh position={[0, 0.15, -0.9]}>
				<planeGeometry attach="geometry" args={[0.55, 0.25]} />
				<meshStandardMaterial attach="material" color="red" side={2} />
			</mesh>
			<mesh position={[0, -0.15, -0.85]} rotation={[-Math.PI / 10, 0, 0]}>
				<planeGeometry attach="geometry" args={[0.55, 0.25]} />
				<meshStandardMaterial attach="material" color="red" side={2} />
			</mesh>
			<mesh position={[0, -0.425, -0.65]} rotation={[-Math.PI / 4, 0, 0]}>
				<planeGeometry attach="geometry" args={[0.55, 0.25]} />
				<meshStandardMaterial attach="material" color="red" side={2} />
			</mesh>
		</group>
	);
}
