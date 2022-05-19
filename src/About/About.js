import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";

export default function About() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <color attach="background" args={["#000"]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" color="green" />
                </mesh>
            </Suspense>
        </Canvas>
    );
}