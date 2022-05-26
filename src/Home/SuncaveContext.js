import React, { useContext, useState } from "react";

const SuncaveContext = React.createContext();

function SuncaveContextProvider({ children }) {
	const [enteredSuncave, setEnteredSuncave] = useState(false);

	function EnterSuncave() {
		setEnteredSuncave(true);
	}

    function ExitSuncave() {
        setEnteredSuncave(false);
    }

    console.log("SuncaveContext changed to: " + enteredSuncave);

	return (
		<SuncaveContext.Provider
			value={{ enteredSuncave, EnterSuncave, ExitSuncave }}
		>
			{children}
		</SuncaveContext.Provider>
	);
}

export {SuncaveContextProvider, SuncaveContext};