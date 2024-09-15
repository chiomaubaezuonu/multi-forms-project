'use client'
import React, { useEffect, useState } from 'react'
// import arcade from "/images/arcade.svg"
import Image from 'next/image'
import { Switch } from 'antd';
import Link from 'next/link';
// import "./App.css"
import "../App.css"
import { SelectedPlanName,  TenureType, useGlobalContext } from '../Context/store';

export type PlanOption = {
    image: string,
    name: "Arcade" | "Advanced" | "Pro";
    monthlyPrice: number,
    yearlyPrice: number,
    duration: string
}
const planOptions: PlanOption[] = [
    {
        image: "/images/arcade.svg",
        name: "Arcade",
        monthlyPrice: 9,
        yearlyPrice: 90,
        duration: "2 months free"

    },
    {
        image: "/images/advanced.svg",
        name: "Advanced",
        monthlyPrice: 12,
        yearlyPrice: 120,
        duration: "2 months free"

    },
    {
        image: "/images/pro.svg",
        name: "Pro",
        monthlyPrice: 15,
        yearlyPrice: 150,
        duration: "2 months free"

    }
]

const Plan = () => {
    const { selectedPlan, setSelectedPlan, tenure, setTenure, } = useGlobalContext();
    // const [toggleOn, setToggleOn] = useState(false)
    // const [monthly, setMonthly] = useState<planData[]>()
    const [clickedPlan, setClickedPlan] = useState(-1)
    // const [yearly, setYearly] = useState(false)

   
    const handleNextPage = () => {
        if (selectedPlan) {
            console.log({ selectedPlan })
            localStorage.setItem('myData', JSON.stringify(selectedPlan))
        }
        else {
            console.error("Please select a plan")
        }
    }
    console.log({ selectedPlan })

    const toggleTenure = () => {
        console.log("conditional value", tenure === "monthly" ? "yearly" : "monthly")
        setTenure(tenure === "monthly" ? "yearly" : "monthly")
    };

    console.log({ tenure })

    useEffect(() => {
        if (tenure) {
            localStorage.setItem('tenure', tenure);
        }
        console.log("random")
    }, [tenure]);



    return (
        <div className="flex flex-col md:mt-0 bg-yellow z-20 absolute md:relative flex-1 top-40 md:top-0">
            <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8 mx-auto pt-4 pb-4 md:w-full bg-white">
                <div>
                    <h1 className="font-bold text-2xl mt-[2.063] md:mb-2 pt-8 md:pt-0 pb-2 md:p-0 md:text-3xl text-[#02295A]">Select your plan</h1>
                    <p className="text-[#9699AB] mt-[0.688rem] text-base bg-white px-0 md:px-0 pr-14 md:pr-4  tracking-tight mb-4 md:mb-8 md:font-medium">You have the option of monthly or yearly billing.</p>
                </div>
                <div className='grid md:grid-cols-3  gap-4'>
                    {
                        planOptions.map((option, index) => (
                            <div key={index} onClick={() => setSelectedPlan(option.name)} className={`bg-[#473dff0d]  ${selectedPlan === option.name ? 'border-[#473dff]' : 'border-[#d6d9e6]'} hover:border-[#473dff] border-[0.0623rem] text-sm rounded-lg w-full md:w-[8.166rem] border-[0.063] cursor-pointer flex md:flex-col px-[0.688rem] py-[1rem] gap-3 duration-200`}>
                                <Image width={40} height={40} src={option.image} alt='arcade' className='mb-4' />
                                <p className='text-[#02295A] font-semibold text-base '>{option.name}</p>
                                <div className='mt-0'>
                                    {tenure === "yearly" ?
                                        <div>
                                            <p className='text-sm text-[#9699ab] font-medium'>{option.yearlyPrice}/yr</p>
                                            <p className="text-[02295A] text-sm">{option.duration}</p>
                                        </div>
                                        :
                                        <div>
                                            <p className='text-[#9699ab] font-medium text-sm'>{option.monthlyPrice}/mo</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }

                    {/*  */}
                </div>
                <div className='flex gap-6 py-3 items-center bg-[#FAFBFF] md:mb-12 justify-center mt-8 rounded-xl '>
                    <p className='text-primary-100 font-bold duration-200'>Monthly</p>
                    <Switch className='bg-[#02295A]' onChange={toggleTenure} checked={tenure === "yearly"} />
                    <p className='font-bold text-[#9699ab] text-base duration-200'>Yearly</p>
                </div>

                <div className="flex justify-between items-center md:mt-20">
                    <Link href="/" className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]">Go Back</Link>
                    <Link href="/add-ons" onClick={handleNextPage} className="bg-[#02295A] py-[0.625rem] px-7  hover:bg-[#473DFF] hover:opacity-75 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        Next Step
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Plan


// planOptions.map((option, index) => (
//     <div key={index} onClick={() => setSelectedPlan({ plan: option.name })} className={`bg-[#473dff0d]  ${selectedPlan.plan === option.name ? 'border-[#473dff]' : 'border-[#d6d9e6]'} hover:border-[#473dff] border-[0.0623rem] text-sm rounded-lg w-full md:w-[8.166rem] border-[0.063] cursor-pointer flex md:flex-col px-[0.688rem] py-[1rem] gap-3 duration-200`}>
//         <Image width={40} height={40} src={option.image} alt='arcade' className='mb-4' />
//         <p className='text-[#02295A] font-semibold text-base '>{option.name}</p>
//         <div className='mt-0'>
//             {yearly ?
//                 <div>
//                     <p className='text-sm text-[#9699ab] font-medium'>{option.yearlyPrice}/yr</p>
//                     <p className="text-[02295A] text-sm">{option.duration}</p>
//                 </div>
//                 :
//                 <div>
//                     <p className='text-[#9699ab] font-medium text-sm'>{option.monthlyPrice}/mo</p>
//                 </div>
//             }
//         </div>
//     </div>