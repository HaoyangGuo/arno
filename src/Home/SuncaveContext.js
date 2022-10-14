import React, { useContext, useState } from "react";

const SuncaveContext = React.createContext();

function SuncaveContextProvider({ children }) {
	const [enteredSuncave, setEnteredSuncave] = useState(false);
	const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [currVideo, setCurrVideo] = useState("");

	function EnterSuncave() {
		setEnteredSuncave(true);
	}

	function ExitSuncave() {
		setEnteredSuncave(false);
	}

	function ShowProjectCard() {
		if (enteredSuncave) {
			setShowProjectDetail(true);
		}
	}

	function CloseProjectCard() {
		if (enteredSuncave) {
			setShowProjectDetail(false);
		}
	}

	return (
		<SuncaveContext.Provider
			value={{
				enteredSuncave,
				showProjectDetail,
				EnterSuncave,
				ExitSuncave,
				ShowProjectCard,
				CloseProjectCard,
			}}
		>
			{children}
		</SuncaveContext.Provider>
	);
}

export { SuncaveContextProvider, SuncaveContext };
