"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/store';

const Summary = () => {
   
    const { online, setOnline, largerStorage, setLargerStorage, customizable, setCustomizable, monthlyArcade, setMonthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro, yearly, setYearly } = useGlobalContext();


const displayedMonthyPrice = monthlyArcade ? 9 : (monthlyAdvanced ? 12 : (monthlyPro ? 15 : "" ))
const displayedYearlyPrice = yearlyArcade ? 90: (yearlyAdvanced ? 120: (yearlyPro ? 150 : ""))
const displayedMonthlyTitle = monthlyArcade ? "Arcade (Monthly)" : (monthlyAdvanced ? "Advanced (Monthly)" : (monthlyPro ? "Pro (Monthly)" : "" ))
const displayedYearlyTitle = yearlyArcade ? "Arcade (Yearly)" : (yearlyAdvanced ? "Advanced (Yearly)" : (yearlyPro ? "Pro (Yearly)" : "" ))

    return (
        <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
                <div>
                    <h1 className="font-bold text-3xl text-[#02295A]">Finishing up</h1>
                    <p className="text-[#9699AB] text-base">Double-check everything looks OK before confirming.</p>
                </div>
                <div className='bg-[#f0f6ff] grid gap-4 rounded-lg p-5'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#02295A] text-base  font-bold'>{yearly ? displayedYearlyTitle : displayedMonthlyTitle}</p>
                            <button className='text-[#9699AB] text-base cursor-pointer underline hover:text-[#473DFF]'><Link href='/plan'>Change</Link></button>
                        </div>
                        <p className='font-bold text-[#02295A] text-base'>${yearly? displayedYearlyPrice : displayedMonthyPrice}/yr</p>
                    </div>
                    <div className='grid pt-4 border-t border-accent-200 gap-2'>
                        {online &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Online service</p>
                                <p className='text-[#02295A] text-base'>+${online ? 1 : ""}/yr</p>
                            </div>
                        }
                        {largerStorage &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Larger storage</p>
                                <p className='text-[#02295A] text-base'>+S{largerStorage ? 2 : ""}/mo</p>
                            </div>
                        }
                        {customizable &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Customizable</p>
                                <p className='text-[#02295A] text-base'>+${customizable ? 2 : ""}/yr</p>
                            </div>
                        }
                    </div>
                </div>

                <div className='p-5 flex justify-between items-center'>
                    <p className='text-[#9699AB] text-base'>Total (per year)</p>
                    <p className='font-bold text-[#473DFF]'>+$160/yr</p>
                </div>





                <div className="hidden md:flex justify-between mt-[146px]">
                    <button className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]"><Link href="/plan">Go Back</Link></button>
                    <button className="bg-[#473dff] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        <Link href="/appreciation">Confirm</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Summary