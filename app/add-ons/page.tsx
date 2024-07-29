"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import "../App.css";
import { useGlobalContext } from '../Context/store';


const Add_ons = () => {
    const { online, setOnline, largerStorage, setLargerStorage, customizable, setCustomizable, yearly, setYearly } = useGlobalContext();

    const handleCheckedBox = (e: any) => {
        const checked = e.target.value
        console.log(checked)
    }


    return (
        <div className="rounded-lg shadow-lg md:shadow-none -ml-2 z-20 flex-1 absolute md:relative top-40 md:top-0 p-1">
            <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8  mx-auto pt-4 pb-4 md:w-full bg-white">
                <div>
                    <h1 className="text-[#02295A] rounded-t-xl pt-5 md:pt-10 pb-4 px-0 md:p-0 text-2xl md:text-3xl text-marine-blue font-bold md:mb-2">Pick add-ons</h1>
                    <p className="text-[#9699AB] text-base px-0 mb-4 md:px-0 pr-2 md:pr-4 tracking-tight md:mb-8 md:font-medium">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='grid gap-4'>
                    <label className='add-ons hover:border-[#473dff] flex gap-4 py-4 px-4 text-sm duration-200  rounded-lg  items-center' htmlFor="online">
                        <input type="checkbox" onChange={(changeEvent) => setOnline(changeEvent.target.checked)} id='online' checked={online} />
                        <div>
                            <p className='text-[#02295a] text-sm font-bold'>Online Service</p>
                            <p className='text-[#9699ab] text-sm'>Access to multiplayer</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${10}/yr`}</p> : <p className='ml-auto text-[#473DFF]'>{`+$${1}/mo`}</p>
                        }
                    </label>
                    <label className='add-ons hover:border-[#473dff] flex gap-4 py-4 px-4 text-sm duration-200 rounded-lg items-center' htmlFor="largerStorage">
                        <input type="checkbox" onChange={(changeEvent) => setLargerStorage(changeEvent.target.checked)} id='largerStorage' checked={largerStorage} value='Larger Storage' />
                        <div className=''>
                            <p className="font-bold text-primary-100">Larger storage</p>
                            <p className="text-sm text-[#9699ab]">Extra 1TB of cloud save</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${20}/yr`}</p> : <p className='ml-auto text-[#473DFF]'>{`+$${2}/mo`}</p>
                        }
                    </label>
                    <label className='add-ons hover:border-[#473dff] rounded-lg flex gap-4 py-4 px-4 text-sm duration-200 items-center' htmlFor="customizable">
                        <input type="checkbox" onChange={(changeEvent) => setCustomizable(changeEvent.target.checked)} id='customizable' checked={customizable} />
                        <div>
                            <p className="font-bold text-primary-100">Customizable Profile</p>
                            <p className="text-sm text-[#9699ab]">Custom theme on your profile</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${20}/yr`}</p> : <p className='ml-auto text-[#473DFF]'>{`+$${2}/mo`}</p>
                        }
                    </label>
                </div>

                <div className="flex justify-between md:mt-20 items-center">
                    <Link href="/plan" className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]">Go Back</Link>
                    <Link href="/summary" className="bg-[#02295A] py-[0.625rem] px-7  hover:bg-[#473DFF] hover:opacity-75 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        Next Step
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Add_ons