import React, { useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Html(props) {
	const data = useScroll();
	// const [showWelcome, setShowWelcome] = useState(true);
	// const [showLeftOfBear, setShowLeftOfBear] = useState(false);
	// const [showRightOfGeisel, setShowRightOfGeisel] = useState(false);
	// const [showBeforeAtkinson, setShowBeforeAtkinson] = useState(false);
	// const [showAtAtkinson, setShowAtAtkinson] = useState(false);
	// const [showBeforeIcons, setShowBeforeIcons] = useState(false);
	// const [showAtIcons, setShowAtIcons] = useState(false);
	// const [showAtSuncave, setShowAtSuncave] = useState(false);

	const [showWelcome, setShowWelcome] = useState(true);
	const [showLeftOfBear, setShowLeftOfBear] = useState(true);
	const [showRightOfGeisel, setShowRightOfGeisel] = useState(true);
	const [showBeforeAtkinson, setShowBeforeAtkinson] = useState(true);
	const [showAtAtkinson, setShowAtAtkinson] = useState(true);
	const [showBeforeIcons, setShowBeforeIcons] = useState(true);
	const [showAtIcons, setShowAtIcons] = useState(true);
	const [showAtSuncave, setShowAtSuncave] = useState(true);

	useFrame(() => {
		if (data.range(0, 1) < 0.01) {
			setShowWelcome(true);
			setShowLeftOfBear(false);
			setShowRightOfGeisel(false);
			setShowBeforeAtkinson(false);
			setShowAtAtkinson(false);
			setShowBeforeIcons(false);
			setShowAtIcons(false);
			setShowAtSuncave(false);
		}

		if (data.range(0, 1) > 0.005 && !showLeftOfBear) {
			setShowWelcome(false);
			setShowLeftOfBear(true);
		}
		if (data.range(0, 1) > 0.15 && !showRightOfGeisel) {
			setShowRightOfGeisel(true);
		}
		if (data.range(0, 1) > 0.3 && !showBeforeAtkinson) {
			setShowBeforeAtkinson(true);
		}
		if (data.range(0, 1) > 0.45 && !showAtAtkinson) {
			setShowAtAtkinson(true);
		}
		if (data.range(0, 1) > 0.6 && !showBeforeIcons) {
			setShowBeforeIcons(true);
		}
		if (data.range(0, 1) > 0.75 && !showAtIcons) {
			setShowAtIcons(true);
		}
		if (data.range(0, 1) > 0.8 && !showAtSuncave) {
			setShowAtSuncave(true);
		}
	});
	function showScroll() {
		console.log("we are at: " + data.range(0, 1));
	}

	return (
		<div>
			{!props.enteredSuncave && (
				<div className="html-body">
					{showWelcome && (
						<div className="welcome fade-in">
							<div>SCROLL DOWN</div>
							<div>TO EXPLORE</div>
						</div>
					)}
					{showLeftOfBear && (
						<div className="left-of-bear fade-in">
							<div className="title" onClick={showScroll}>
								<div className="title-base">WHAT IS ARNO</div>
								<div className="title-red">WHAT IS ARNO</div>
								<div className="title-green">WHAT IS ARNO</div>
							</div>
							<div className="glass-effect">
								<div>Augmented Reality Network Observatory (ARNO).</div>
								ARNO is a realtime Procedural Reality tool for monitoring and
								adminstrating active work on the NAUTILUS academic cloud. An
								ongoing research project within the NSF funded PRP-NRP,
								investigating system adminstration work at global scale.
							</div>
						</div>
					)}
					{showRightOfGeisel && (
						<div className="right-of-geisel fade-in">
							<div className="title" onClick={showScroll}>
								<div className="title-base">UCSD</div>
								<div className="title-red">UCSD</div>
								<div className="title-green">UCSD</div>
							</div>
							<div className="glass-effect">
								Homed in Calit2 and SDSC at UC San Diego, ARNO supports a
								digital twin testbed utilizing physical infrastructure and cyber
								systems to act upon our messy problem posed by complex networks
								on geo scales. Leveraging XR we investigate work using our
								system and XR tools we build too service the global system from
								anywhere on the planet.
							</div>
						</div>
					)}
					{showBeforeAtkinson && (
						<div className="before-atkinson fade-in">
							<div className="title" onClick={showScroll}>
								<div className="title-base">XR</div>
								<div className="title-red">XR</div>
								<div className="title-green">XR</div>
							</div>
							<div className="glass-effect">
								XR has recently become synonymous with metaverse, ARNO now
								serves as a foundation for a Open-Metaverse within academia. To
								accomplish ARNO our team has built tools for cloud systems,
								leveraging Unreal Engine to engineer open-source scalable
								Extended Reality (XR) workflows.
							</div>
						</div>
					)}
					{showAtAtkinson && (
						<div className="at-atkinson fade-in">
							<div className="at-atkinson-left">
								<div>Network Data</div>
								packets, traceroute, pathing, shown 1 to 1 on the globe
							</div>
							<div className="at-atkinson-right">
								Digital Twins, from architectural BIM to simple Mesh models, all
								geo+ located
							</div>
						</div>
					)}
					{showBeforeIcons && (
						<div className="before-icons fade-in">
							<div className="title" onClick={showScroll}>
								<div className="title-base">FOUNDATION</div>
								<div className="title-red">FOUNDATION</div>
								<div className="title-green">FOUNDATION</div>
							</div>
							<div className="glass-effect">
								ARNO is building a full ecosystem of development solutions. We
								aim to be platfrom agnostic, support hybrid XR systems, and make
								sure we expand access to these tools through open-source
								software, hardware, and education.
							</div>
						</div>
					)}
					{showAtIcons && (
						<div className="at-icons fade-in">
							<div className="at-icons-left">
								Linux, Windows, Android, Mac, Browser Supported
							</div>
							<div className="at-icons-right">
								AR Hololens2, VR all HMDs, Desktop, Mobile Supported
							</div>
						</div>
					)}
					{showAtSuncave && (
						<div className="at-suncave fade-in hoverable" onClick={props.EnterSuncave}>
							ENTER SUNCAVE
						</div>
					)}
				</div>
			)}
		</div>
	);
}
