"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, FunctionComponent, ReactNode } from 'react';

const storedTenure = typeof window !== "undefined" ? localStorage.getItem('tenure') as TenureType | null : null;


const storedPlan = typeof window !== "undefined" ? localStorage.getItem('myData') : null
const parsedPlan = storedPlan ? (JSON.parse(storedPlan)) : null

interface UserDetailsType {
  name: string;
  email: string;
  phone: string;
}

export type SelectedPlanName = "Arcade" | "Advanced" | "Pro";


interface AddonType {
  online: boolean;
  largerStorage: boolean;
  customizable: boolean
}


export type TenureType = "monthly" | "yearly"


interface ContextProps {
  userDetails: UserDetailsType,
  setUserDetails: (newUserDetails: UserDetailsType) => void,
  tenure: TenureType,
  selectedAddon: AddonType,
  setSelectedAddon: (newSelectedAddon: AddonType) => void,
  selectedPlan: SelectedPlanName,
  setSelectedPlan: (newSelectedPlan: SelectedPlanName) => void,
  setTenure: (newTenure: TenureType) => void
}

const GlobalContext = createContext<ContextProps>({
  userDetails: {
    name: "",
    email: "",
    phone: ""
  },
  selectedPlan: "Arcade",
  tenure: "monthly",
  selectedAddon: {
    online: false,
    largerStorage: false,
    customizable: false,
  },

  setUserDetails: () => { },
  setSelectedPlan: () => { },
  setTenure: () => { },
  setSelectedAddon: () => { }
})

export const GlobalContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: "",
    email: "",
    phone: ""
  })
  // state sample 1
  // const [selectedPlan, setSelectedPlan] = useState<SelectedPlanType>({
  //   plan: "Arcade"
  // });
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanName>(parsedPlan || "Arcade");


  const [tenure, setTenure] = useState<TenureType>(storedTenure || "monthly")
  const [selectedAddon, setSelectedAddon] = useState<AddonType>({
    online: false,
    largerStorage: false,
    customizable: false
  })
  const contextValue = {
    userDetails,
    selectedPlan,
    setUserDetails,
    setSelectedPlan,
    tenure,
    setTenure,
    selectedAddon,
    setSelectedAddon,
   
  };

  return (
    <GlobalContext.Provider value={contextValue} >
      {children}
    </GlobalContext.Provider >
  )
}

export const useGlobalContext = () => useContext(GlobalContext);



