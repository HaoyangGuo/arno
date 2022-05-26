import React, { useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Html(props) {
	const data = useScroll();
	const [showWelcome, setShowWelcome] = useState(true);
	const [showLeftOfBear, setShowLeftOfBear] = useState(false);
	const [showRightOfGeisel, setShowRightOfGeisel] = useState(false);
	const [showBeforeAtkinson, setShowBeforeAtkinson] = useState(false);
	const [showAtAtkinson, setShowAtAtkinson] = useState(false);
	const [showBeforeIcons, setShowBeforeIcons] = useState(false);
	const [showAtIcons, setShowAtIcons] = useState(false);
	const [showAtSuncave, setShowAtSuncave] = useState(false);

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
		if (data.range(0, 1) > 0.1 && !showRightOfGeisel) {
			setShowRightOfGeisel(true);
		}
		if (data.range(0, 1) > 0.3 && !showBeforeAtkinson) {
			setShowBeforeAtkinson(true);
		}
		if (data.range(0, 1) > 0.5 && !showAtAtkinson) {
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

	return (
		<div>
			{!props.enteredSuncave && (
			<div className="html-body">
				{showWelcome && (
					<div className="welcome fade-in">
						<div>WELCOME!</div>
						<div>SCROLL DOWN TO EXPLORE</div>
					</div>
				)}
				{showLeftOfBear && (
					<div className="left-of-bear fade-in">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Soluta, expedita natus libero ratione ipsa itaque,
						deleniti laboriosam quo sint vitae, assumenda
						consequatur dolorum maiores distinctio eaque rem dolores
						cupiditate? Iste.
					</div>
				)}
				{showRightOfGeisel && (
					<div className="right-of-geisel fade-in">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Soluta, expedita natus libero ratione ipsa itaque,
						deleniti laboriosam quo sint vitae, assumenda
						consequatur dolorum maiores distinctio eaque rem dolores
						cupiditate? Iste.
					</div>
				)}
				{showBeforeAtkinson && (
					<div className="before-atkinson fade-in">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Soluta, expedita natus libero ratione ipsa itaque,
						deleniti laboriosam quo sint vitae, assumenda
						consequatur dolorum maiores distinctio eaque rem dolores
						cupiditate? Iste.
					</div>
				)}
				{showAtAtkinson && (
					<div className="at-atkinson fade-in">
						<div className="at-atkinson-left">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta,
						</div>
						<div className="at-atkinson-right">
							expedita natus libero ratione ipsa itaque, deleniti
							laboriosam
						</div>
					</div>
				)}
				{showBeforeIcons && (
					<div className="before-icons fade-in">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis, explicabo fuga? Nostrum beatae
						voluptatibus, accusantium ipsam unde obcaecati
						perferendis, quibusdam provident corrupti soluta nisi
						labore eum. Quod doloribus dolores alias?
					</div>
				)}
				{showAtIcons && (
					<div className="at-icons fade-in">
						<div className="at-icons-left">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</div>
						<div className="at-icons-right">
							Perspiciatis, explicabo fuga? Nostrum beatae
							voluptatibus,
						</div>
					</div>
				)}
				{showAtSuncave && (
					<div className="at-suncave fade-in" onClick={props.EnterSuncave}>ENTER THE SUNCAVE</div>
				)}
			</div>)}
		</div>
	);
}
