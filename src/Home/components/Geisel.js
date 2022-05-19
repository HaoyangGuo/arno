import React, { useRef } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import modelPath from "../assets/geisel.glb";

export default function Model(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF(modelPath);
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Aluminum.geometry}
				// material={nodes.Aluminum.material}
				scale={0.00125}
				position={[0, 0, 0]}
                rotation={[0, Math.PI, 0]}
			>
				<meshStandardMaterial
					attach="material"
					transparent={true}
					opacity={0.6}
					color={"#332FD0"}
				/>
				<Edges scale={1.002} threshold={15} color="#E15FED" />
			</mesh>
		</group>
	);
}

useGLTF.preload(modelPath);
