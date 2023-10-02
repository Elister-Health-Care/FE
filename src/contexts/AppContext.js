import React, { createContext, useContext, useState } from 'react';
const AppContext = createContext();

export function AppProvider({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [otherValue, setOtherValue] = useState(0); 

    const handleInputChange = (newValue) => {
        setInputValue(newValue);
    };

    const handleButtonClick = () => {
        setOtherValue((prevValue) => prevValue + 1); 
    };

    return (
        <AppContext.Provider value={{ inputValue, handleInputChange, otherValue, handleButtonClick }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
