'use client'
import React, { useState } from 'react'
// import arcade from "/images/arcade.svg"
import Image from 'next/image'
import { Switch } from 'antd';
import Link from 'next/link';
// import "./App.css"
import "../App.css"
import { useGlobalContext } from '../Context/store';


const Plan = () => {

    type planData = {
        image: string,
        plan: string,
        monthlyPrice: number,
        yearlyPrice: number,
        duration: string
    }

    const plans = [
        {
            image: "/images/arcade.svg",
            plan: "Arcade",
            monthlyPrice: 9,
            yearlyPrice: 90,
            duration: "2 months free"

        },
        {
            image: "/images/advanced.svg",
            plan: "Advanced",
            monthlyPrice: 12,
            yearlyPrice: 120,
            duration: "2 months free"

        },
        {
            image: "/images/pro.svg",
            plan: "Pro",
            monthlyPrice: 15,
            yearlyPrice: 150,
            duration: "2 months free"

        }
    ]

    const { monthlyArcade, setMonthlyArcade, monthlyAdvanced, setMonthlyAdvanced, monthlyPro, setMonthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro } = useGlobalContext();
    const [toggleOn, setToggleOn] = useState(false)
    const [monthly, setMonthly] = useState<planData[]>()
    const [yearly, setYearly] = useState(false)
    const [border1, setBorder1] = useState(false)
    const [border2, setBorder2] = useState(false)
    const [border3, setBorder3] = useState(false)
    const [clickedPlan, setClickedPlan] = useState(-1)

    const onChange = (checked: boolean) => {
        setToggleOn(checked)
        //  console.log(`switch to ${checked}`);
        if (toggleOn === false) {
            setYearly(true)
        } else {
            setYearly(false)
        }
    };
    const handlePlan = (index:number) => {
           setClickedPlan(index)
    }
    return (
        <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white  absolute top-40 md:top-0 w-80 md:relative ">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
                <div>
                    <h1 className="font-bold text-2xl mt-[2.063] md:text-3xl text-[#02295A]">Select your plan</h1>
                    <p className="text-[#9699AB] mt-[0.688rem] text-base">You have the option of monthly or yearly billing.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                   {
                        plans.map((plan, index) => (
                            <div key={index} onClick={() => handlePlan(index)} className={`bg-[#473dff0d]  ${clickedPlan === index ? 'border-[#473dff]' : 'border-[#d6d9e6]'} hover:border-[#473dff] border-[0.0623rem] text-sm rounded-lg w-full border-[0.063] cursor-pointer flex md:flex-col h-[5.75rem] py-3 md:h-[11rem] p-4 gap-3 duration-200`}>
                                <Image width={50} height={50} src={plan.image} alt='arcade' />
                                <p className='text-[#0229A] font-bold text-lg mt-6'>{plan.plan}</p>
                                <div className='mt-auto'>
                                    {yearly ?
                                        <div>
                                            <p className='text-sm text-[#9699ab]'>{plan.yearlyPrice}</p>
                                            <p className="text-[02295A] text-sm">{plan.duration}</p>
                                        </div>
                                        :
                                        <div>
                                            <p className='text-[#9699ab] text-sm'>{plan.monthlyPrice}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }

                 {/*  */}
                </div>
                <div className='py-4 x-5 rounded-lg bg-[#F0F6FF] md:col-span-3'>
                    <div className='flex gap-4 items-center justify-center'>
                        <p className='text-primary-100 font-bold duration-200'>Monthly</p>
                        <Switch className='bg-[#02295A]' defaultChecked={toggleOn} onChange={onChange} />
                        <p className='font-bold text-[#9699ab] text-base duration-200'>Yearly</p>
                    </div>
                </div>
                <div className="flex justify-between mt-8 md:mt-[146px]">
                    <button className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]"><Link href="/">Go Back</Link></button>
                    <button className="bg-[#02295A] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        <Link href="/add-ons">Next Step</Link>
                    </button>
                </div>
            </div>

        </div >
    )
}

export default Plan

