import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const selections = createContext();

// 2. Create a provider
const Provider = ({ children }) => {
    const [value, setValue] = useState("Hello from context");

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

export default Provider;