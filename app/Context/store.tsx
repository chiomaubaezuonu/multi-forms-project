"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProps {
    online: number,
    largerStorage: number,
    customizable: number,
    monthlyArcade: number,
    monthlyAdvanced: number,
    monthlyPro: number,
    yearlyArcade: number,
    yearlyAdvanced: number,
    yearlyPro: number,

}

const GlobalContext = createContext<ContextProps>({
    online: 1,
    largerStorage: 2,
    customizable: 2,
    monthlyArcade: 9,
    monthlyAdvanced: 9,
    monthlyPro: 15,
    yearlyArcade: 90,
    yearlyAdvanced: 120,
    yearlyPro: 150,

})

export const GlobalContextProvider = ({ children }) => {
    let online = 1
    let largerStorage = 2;
    let customizable = 2;
    let monthlyArcade = 9;
    let monthlyAdvanced = 9;
    let monthlyPro = 15
    let yearlyArcade = 90;
    let yearlyAdvanced = 120
    let yearlyPro = 150

    return (
        <GlobalContext.Provider value={{ online, largerStorage, customizable, monthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);