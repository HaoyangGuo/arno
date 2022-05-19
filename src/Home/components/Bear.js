import React, { useRef } from "react";
import { useGLTF, Edges, Trail } from "@react-three/drei";
import modelPath from "../assets/bear.glb";

export default function Model(props) {
	const group = useRef();
	const bear = useRef();
	const { nodes, materials } = useGLTF(modelPath);
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				ref={bear}
				castShadow
				receiveShadow
				geometry={
					nodes["Import_Symbol_location_<Not_Shared>_803063001"]
						.geometry
				}
				// material={
				// 	nodes["Import_Symbol_location_<Not_Shared>_803063001"]
				// 		.material
				// }
				position={[0, 0, 0]}
				rotation={[0, Math.PI / 4, 0]}
				scale={0.075}
				transparent={true}
				opacity={0.5}
			>
				<meshStandardMaterial
					attach="material"
					transparent={true}
					opacity={1}
					color={"#DFDFDE"}
				/>
			</mesh>
		</group>
	);
}

useGLTF.preload(modelPath);
