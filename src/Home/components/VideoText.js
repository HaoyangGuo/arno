import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import videoPath from "../assets/placeholdervideo.mp4";
import fontPath from "../assets/Inter-Bold.woff";

export default function VideoText({ playVideo, ...props }) {
	const [video] = useState(() =>
		Object.assign(document.createElement("video"), {
			src: videoPath,
			crossOrigin: "Anonymous",
			loop: true,
			muted: true,
		})
	);
	useEffect(() => void (playVideo && video.play()), [video, playVideo]);
	return (
		<Text font={fontPath} fontSize={3} letterSpacing={-0.06} {...props}>
			ARNO
			<meshBasicMaterial toneMapped={false}>
				<videoTexture
					attach="map"
					args={[video]}
					encoding={THREE.sRGBEncoding}
				/>
			</meshBasicMaterial>
		</Text>
	);
}
