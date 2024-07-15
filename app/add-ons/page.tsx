"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import "../App.css";
import { useGlobalContext } from '../Context/store';

const Add_ons = () => {
    // let online = 1;
    // let largerStorage = 2;
    // let customizable = 2;
// const { online, largerStorage, customizable } = useGlobalContext();
const { online, setOnline, largerStorage, setLargerStorage, customizable, setCustomizable, yearly, setYearly } = useGlobalContext();

const handleCheckedBox = (e:any) => {
    const checked = e.target.value
    console.log(checked)
}


    return (
        <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
                <div>
                    <h1 className="font-bold text-3xl text-[#02295A]">Pick add-ons</h1>
                    <p className="text-[#9699AB] text-base">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='grid gap-4'>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200  rounded  items-center' htmlFor="add-ons">
                        <input type="checkbox" onChange={(changeEvent) => setOnline(changeEvent.target.checked)} checked={online} />
                        <div>
                            <p className='text-[#02295a] text-sm font-bold'>Online Service</p>
                            <p className='text-[#9699ab] text-sm'>Access to multiplayer</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${10}/yr`}</p>: <p className='ml-auto text-[#473DFF]'>{`+$${1}/mo`}</p>
                        }
                    </label>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200 rounded items-center' htmlFor="add-ons">
                        <input type="checkbox" onChange={(changeEvent) => setLargerStorage(changeEvent.target.checked)} checked={largerStorage} value= 'Larger Storage' />
                        <div className=''>
                            <p className="font-bold text-primary-100">Larger storage</p>
                            <p className="text-sm text-[#9699ab]">Extra 1TB of cloud save</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${20}/yr`}</p>: <p className='ml-auto text-[#473DFF]'>{`+$${2}/mo`}</p>
                        }
                    </label>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200 rounded items-center' htmlFor="add-ons">
                        <input type="checkbox" onChange={(changeEvent) => setCustomizable(changeEvent.target.checked)} checked={customizable} />
                        <div>
                            <p className="font-bold text-primary-100">Customizable Profile</p>
                            <p className="text-sm text-[#9699ab]">Custom theme on your profile</p>
                        </div>
                        {
                            yearly ? <p className='ml-auto text-[#473DFF]'>{`+$${20}/yr`}</p>: <p className='ml-auto text-[#473DFF]'>{`+$${2}/mo`}</p>
                        }
                    </label>
                </div>
                <div className="hidden md:flex justify-between mt-[146px]">
                    <button className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]"><Link href="/plan">Go Back</Link></button>
                    <button className="bg-[#02295A] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        <Link href="/summary">Next Step</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Add_ons