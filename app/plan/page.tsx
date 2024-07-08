'use client'
import React, { useState } from 'react'
// import arcade from "/images/arcade.svg"
import Image from 'next/image'
import { Switch } from 'antd';
import Link from 'next/link';
// import "./App.css"
import "../App.css"


const Plan = () => {
    const [toggleOn, setToggleOn] = useState(false)
    const [yearly, setYearly] = useState(false)
    const [border1, setBorder1] = useState(false)
    const [border2, setBorder2] = useState(false)
    const [border3, setBorder3] = useState(false)

    const onChange = (checked: boolean) => {
        setToggleOn(checked)
        //  console.log(`switch to ${checked}`);
        if (toggleOn === false) {
            setYearly(true)
        } else {
            setYearly(false)
        }
    };
    return (
        <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white  absolute top-40 md:top-0 w-80 md:relative ">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
                <div>
                    <h1 className="font-bold text-2xl mt-[2.063] md:text-3xl text-[#02295A]">Select your plan</h1>
                    <p className="text-[#9699AB] mt-[0.688rem] text-base">You have the option of monthly or yearly billing.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div onClick={() => setBorder1(true)} className={`bg-[#473dff0d]  ${border1 ? 'border-[#473dff]' : 'border-[#d6d9e6]'} text-sm rounded-lg w-full border-[0.063] cursor-pointer flex md:flex-col h-[5.75rem] py-3 md:h-[11rem] p-4 gap-3 duration-200`}>

                        <label
                            htmlFor="Arcade">
                            <Image width={50} height={50} src="/images/arcade.svg" alt='arcade' />
                        </label>
                        <div className='mt-auto'>
                            {yearly ?
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Arcade</p>
                                    <p className='text-sm text-[#9699ab]'>$90/yr</p>
                                    <p className="text-[02295A] text-sm"> 2 months free </p>
                                </div>
                                :
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Arcade</p>
                                    <p className='text-[#9699ab] text-sm'>$9/mo</p>
                                </div>
                            }
                        </div>
                    </div>

                    <div onClick={() => {
                        setBorder1(false)
                        setBorder2(true)
                    }} className={`bg-[#473dff0d] ${border2 ? 'border-[#473dff]' : 'border-[#d6d9e6]'} text-sm rounded-lg w-full border-[0.063] cursor-pointer flex md:flex-col py-3 h-[5.75rem] md:h-[11rem] p-4 gap-3 duration-200`}>
                        <label htmlFor="Advanced">
                            <Image width={50} height={50} src="/images/advanced.svg" alt='arcade' />
                        </label>
                        <div className='mt-auto'>
                            {yearly ?
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Advanced</p>
                                    <p className='text-sm text-[#9699ab]'>$120/yr</p>
                                    <p className="text-[02295A] text-sm"> 2 months free </p>
                                </div>
                                :
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Advanced</p>
                                    <p className='text-[#9699ab] text-sm'>$9/mo</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div onClick={() => {
                        setBorder1(false)
                        setBorder2(false)
                        setBorder3(true)
                    }}
                        className={`bg-[#473dff0d] ${border3 ? 'border-[#473dff]' : 'border-[#d6d9e6]'} text-sm rounded-lg w-full border-[0.063] cursor-pointer flex md:flex-col py-3 h-[5.75rem] md:h-[11rem] p-4 gap-3 duration-200`}>
                        <label htmlFor="pro">
                            <Image width={50} height={50} src="/images/pro.svg" alt='arcade' />
                        </label>
                        <div className='mt-auto'>
                            {yearly ?
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Pro</p>
                                    <p className='text-sm text-[#9699ab]'>$150/yr</p>
                                    <p className="text-[02295A] text-sm"> 2 months free </p>
                                </div>
                                :
                                <div>
                                    <p className='text-[#0229A] font-bold text-lg'>Pro</p>
                                    <p className='text-[#9699ab] text-sm'>$15/mo</p>
                                </div>
                            }
                        </div>
                    </div>
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

