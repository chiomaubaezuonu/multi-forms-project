"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, FunctionComponent, ReactNode } from 'react';

interface ContextProps {
    online: boolean,
    largerStorage: boolean,
    customizable: boolean,
    monthlyArcade: number,
    monthlyAdvanced: number,
    monthlyPro: number,
    yearlyArcade: number,
    yearlyAdvanced: number,
    yearlyPro: number,
    setOnline: (newOnline: boolean) => void,
    setLargerStorage: (newLargerStorage: boolean) => void,
    setCustomizable:(newCustomizable: boolean) => void

}

const GlobalContext = createContext<ContextProps>({
    online: false,
    largerStorage: false,
    customizable: false,
    monthlyArcade: 9,
    monthlyAdvanced: 9,
    monthlyPro: 15,
    yearlyArcade: 90,
    yearlyAdvanced: 120,
    yearlyPro: 150,
    setOnline: () => { },
    setLargerStorage: () => { },
    setCustomizable: () => { },
})

export const GlobalContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [online, setOnline] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [customizable, setCustomizable] = useState(false)
    const [monthlyArcade, setMonthlyArcade] = useState(9)
    const [monthlyAdvanced, setMonthlyAdvanced] = useState(9)
    const [monthlyPro, SetMonthlyPro] = useState(15)
    const [yearlyArcade, setYearlyArcade] = useState(90)
    const [yearlyAdvanced, setYearlyAdvanced] = useState(120)
    const [yearlyPro, setYearlyPro] = useState(150)


    // const updateLStorage = (newValue: number) => {
    //     setLargerStorage(newValue)
    // }
    // const updateCustomizable = (newValue: number) => {
    //     setCustomizable(newValue)
    // }
    const updateMoArcade = (newValue: number) => {
        setMonthlyArcade(newValue)
    }
    const updateMoAdvanced = (newValue: number) => {
        setMonthlyAdvanced(newValue)
    }
    const updateMoPro = (newValue: number) => {
        SetMonthlyPro(newValue)
    }
    const updateYrArcade = (newValue: number) => {
        setYearlyArcade(newValue)
    }
    const updateYrAdvanced = (newValue: number) => {
        setYearlyAdvanced(newValue)
    }
    const updateYrPro = (newValue: number) => {
        setYearlyPro(newValue)
    }

    const contextValue = {
        online,
        largerStorage,
        customizable,
        monthlyArcade,
        monthlyAdvanced,
        monthlyPro,
        yearlyArcade,
        yearlyAdvanced,
        yearlyPro,
        // ... other values
        setOnline,
        setLargerStorage,
        setCustomizable,
        // ... other update functionss
        updateMoArcade,
        updateMoAdvanced,
        updateMoPro,
        updateYrArcade,
        updateYrAdvanced,
        updateYrPro
    };

    // let online = 1
    // let largerStorage = 2;
    // let customizable = 2;
    // let monthlyArcade = 9;
    // let monthlyAdvanced = 9;
    // let monthlyPro = 15
    // let yearlyArcade = 90;
    // let yearlyAdvanced = 120
    // let yearlyPro = 150

    return (
        // <GlobalContext.Provider value={{ online, largerStorage, customizable, monthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro }}>
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);