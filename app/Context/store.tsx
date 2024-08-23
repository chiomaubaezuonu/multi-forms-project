"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, FunctionComponent, ReactNode } from 'react';



// interface UserDetailsType {
//   name: string;
//   email: string;
//   phone: string;
// }
// interface ContextProps {
//   userDetails: UserDetailsType,
//   setUserDetails: (newUserDetails: {}) => void
//     online: boolean,
//     largerStorage: boolean,
//     customizable: boolean,
//     monthlyArcade: boolean,
//     monthlyAdvanced: boolean,
//     monthlyPro: boolean,
//     yearlyArcade: boolean,
//     yearlyAdvanced: boolean,
//     yearlyPro: boolean,
//     yearly : boolean,
//     setYearly:(newYearly: boolean) => void,
//     setOnline: (newOnline: boolean) => void,
//     setLargerStorage: (newLargerStorage: boolean) => void,
//     setCustomizable:(newCustomizable: boolean) => void,
//     setMonthlyArcade: (newMonthlyArcade : boolean) => void,
//     setMonthlyAdvanced: (newMonthlyArcade : boolean) => void,
//     setMonthlyPro: (newMonthlyPro : boolean) => void,
//     setYearlyArcade: (newYearlyArcade : boolean) => void,
//     setYearlyAdvanced:(newYearlyAdvanced : boolean) => void,
//     setYearlyPro:(newYearlyPro : boolean) => void,

// }

// const GlobalContext = createContext<ContextProps>({
//   userDetails: {
//     name: "",
//     email: "",
//     phone: ""
//   },
//   setUserDetails: () => { }
//     online: false,
//     largerStorage: false,
//     customizable: false,
//     monthlyArcade: false,
//     monthlyAdvanced: false,
//     monthlyPro: false,
//     yearlyArcade: false,
//     yearlyAdvanced: false,
//     yearlyPro: false,
//     yearly: false,
//     setYearly: () => { },   
//     setOnline: () => { },
//     setLargerStorage: () => { },
//     setCustomizable: () => { },
//     setMonthlyArcade: () => { },
//     setMonthlyAdvanced: () => { },
//     setMonthlyPro: () => { },
//     setYearlyArcade: () => { },
//     setYearlyAdvanced: () => { },
//     setYearlyPro: () => { },
// })

// export const GlobalContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
//   const [userDetails, setUserDetails] = useState<UserDetailsType>({
//     name: "",
//     email: "",
//     phone: ""
// });
//     const [online, setOnline] = useState(false)
//     const [largerStorage, setLargerStorage] = useState(false)
//     const [customizable, setCustomizable] = useState(false)
//     const [monthlyArcade, setMonthlyArcade] = useState(false)
//     const [monthlyAdvanced, setMonthlyAdvanced] = useState(false)
//     const [monthlyPro, setMonthlyPro] = useState(false)
//     const [yearlyArcade, setYearlyArcade] = useState(false)
//     const [yearlyAdvanced, setYearlyAdvanced] = useState(false)
//     const [yearlyPro, setYearlyPro] = useState(false)

//     const [yearly, setYearly] = useState(false)



// const contextValue = {
//   userDetails,
//   setUserDetails
//         online,
//         largerStorage,
//         customizable,
//         monthlyArcade,
//         monthlyAdvanced,
//         monthlyPro,
//         yearlyArcade,
//         yearlyAdvanced,
//         yearlyPro,
//         // ... other values
//         yearly,
//         // ... other state setter functions
//         setYearly,
//         setOnline,
//         setLargerStorage,
//         setCustomizable,
//         setMonthlyArcade, 
//         setMonthlyAdvanced,
//         setMonthlyPro,
//         setYearlyArcade, 
//         setYearlyAdvanced,
//         setYearlyPro
// };

// return (
//  <GlobalContext.Provider value={{ online, largerStorage, customizable, monthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro }}>
//     <GlobalContext.Provider value={contextValue} >
//       {children}
//     </GlobalContext.Provider >
//   )
// }

// export const useGlobalContext = () => useContext(GlobalContext);



interface UserDetailsType {
  name: string;
  email: string;
  phone: string;
}

interface SelectedPlanType {
  selectedPlan: "Arcade" | "Advanced" | "Pro"
}

interface ContextProps {
  userDetails: UserDetailsType,
  setUserDetails: (newUserDetails: UserDetailsType) => void,
  selectedPlan: SelectedPlanType,
  setSelectedPlan: (newSelectedPlan: SelectedPlanType) => void
}

const GlobalContext = createContext<ContextProps>({
  userDetails: {
    name: "",
    email: "",
    phone: ""
  },
  selectedPlan: {
    selectedPlan: "Arcade"
  },
  setUserDetails: () => { },
  setSelectedPlan: () => { }
})

export const GlobalContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: "",
    email: "",
    phone: ""
  });
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType>({
    selectedPlan: "Arcade"
  });

  const contextValue = {
    userDetails,
    selectedPlan,
    setUserDetails,
    setSelectedPlan
  };

  return (
    <GlobalContext.Provider value={contextValue} >
      {children}
    </GlobalContext.Provider >
  )
}

export const useGlobalContext = () => useContext(GlobalContext);



