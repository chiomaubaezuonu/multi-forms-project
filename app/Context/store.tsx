"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProps {
    online: number,
    largerStorage: number,
    customizable: number
}

const GlobalContext = createContext<ContextProps>({
    online: 1,
    largerStorage: 2,
    customizable: 2
})

export const GlobalContextProvider = ({ children }) => {
    let online = 1
    let largerStorage = 2;
    let customizable = 2;

    return (
        <GlobalContext.Provider value={{ online, largerStorage, customizable }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);