import React, {useRef, useState} from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

export default function Particles(props) {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 10 })
	);
	useFrame((state, delta) => {
		ref.current.rotation.x += -delta / 10;
		ref.current.rotation.y += -delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]} position={[0, 6, 0]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					transparent
					color="pink"
					size={0.05}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}
