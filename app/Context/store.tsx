"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, FunctionComponent, ReactNode } from 'react';


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

// export type PlanOption = {
//   image: string,
//   name: "Arcade" | "Advanced" | "Pro";
//   monthlyPrice: number,
//   yearlyPrice: number,
//   duration: string
// }

//  export type SelectedPlanName =  "Arcade" | "Advanced" | "Pro";

// interface SelectedPlanType {
//   name: SelectedPlanName
// }

export type TenureType = "monthly" | "yearly"


interface ContextProps {
  userDetails: UserDetailsType,
  setUserDetails: (newUserDetails: UserDetailsType) => void,
  // selectedPlan: SelectedPlanType,
  // setSelectedPlan: (newSelectedPlan: SelectedPlanType) => void,
  tenure: TenureType,
  // selectedPlan: PlanOption,
  // setSelectedPlan: (newSelectedPlan: PlanOption) => void,
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
  // selectedPlan: {
  //   image: '', // Replace with a default image
  //   name: 'Arcade', // Default to "Arcade"
  //   monthlyPrice: 0,
  //   yearlyPrice: 0,
  //   duration: '',
  // },
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
  // const [selectedPlan, setSelectedPlan] = useState<PlanOption>(
  //   {
  //     image: '',
  //     name: 'Arcade',
  //     monthlyPrice: 0,
  //     yearlyPrice: 0,
  //     duration: '',
  //   }
  // )
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanName>("Arcade");

  const [tenure, setTenure] = useState<TenureType>("monthly")
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
    setSelectedAddon
  };

  return (
    <GlobalContext.Provider value={contextValue} >
      {children}
    </GlobalContext.Provider >
  )
}

export const useGlobalContext = () => useContext(GlobalContext);



