"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/store';

const Summary = () => {

    const { online, setOnline, largerStorage, setLargerStorage, customizable, setCustomizable, monthlyArcade, setMonthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro, yearly, setYearly } = useGlobalContext();
    let onlineMonthly = 1;
    let monthlyLargerStorage = 2;
    let monthlyCustomizable = 2;
    let yearlyOnline = 10;
    let yearlyLargerStorage = 20;
    let yearlyCustomizable = 20

    const displayedMonthyPrice: number = monthlyArcade ? 9 : (monthlyAdvanced ? 12 : (monthlyPro ? 15 : 0))
    const displayedYearlyPrice: number = yearlyArcade ? 90 : (yearlyAdvanced ? 120 : (yearlyPro ? 150 : 0))
    const displayedMonthlyTitle = monthlyArcade ? "Arcade (Monthly)" : (monthlyAdvanced ? "Advanced (Monthly)" : (monthlyPro ? "Pro (Monthly)" : ""))
    const displayedYearlyTitle = yearlyArcade ? "Arcade (Yearly)" : (yearlyAdvanced ? "Advanced (Yearly)" : (yearlyPro ? "Pro (Yearly)" : ""))
    const selectedPlanPrice: number = yearly ? displayedYearlyPrice : displayedMonthyPrice
    const MonthlyServicePrice: number = !yearly && online ? onlineMonthly : (!yearly && largerStorage ? monthlyLargerStorage : (!yearly && customizable ? monthlyCustomizable : 0))
    const YearlyServicePrice: number = yearly && online ? yearlyOnline : (yearly && largerStorage ? yearlyLargerStorage : (yearly && customizable ? yearlyCustomizable : 0))
    const totalYearlyServicePrice: number = yearly && online
        ? yearlyOnline
        + (largerStorage ? yearlyLargerStorage : 0)
        + (customizable ? yearlyCustomizable : 0)
        : 0;
    const totalMonthlyServicePrice = !yearly && online ? onlineMonthly
        + (largerStorage ? monthlyLargerStorage : 0)
        + (customizable ? monthlyCustomizable : 0)
        : 0

    let customerTotalPrice;
    if (selectedPlanPrice && MonthlyServicePrice) {
        customerTotalPrice = selectedPlanPrice + MonthlyServicePrice

    } if (selectedPlanPrice && YearlyServicePrice) {
        customerTotalPrice = selectedPlanPrice + YearlyServicePrice
    } if (selectedPlanPrice && totalYearlyServicePrice) {
        customerTotalPrice = selectedPlanPrice + totalYearlyServicePrice
    }
    if (selectedPlanPrice && totalMonthlyServicePrice) {
        customerTotalPrice = selectedPlanPrice + totalMonthlyServicePrice
    }
    return (
        <div className="flex flex-col md:mt-0 bg-yellow z-20 absolute md:relative flex-1 top-40 md:top-0">
            <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8 mx-auto md:pt-8 pb-4 md:w-full bg-white">
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl text-[#02295A] rounded-t-xl pt-9 md:pt-10 pb-4 px-0 md:px-6 md:p-0 md:mb-2">Finishing up</h1>
                    <p className="tracking-tight text-[#9699AB] text-base px-0 pr-7 md:pr-4 mb-8 md:font-medium">Double-check everything looks OK before confirming.</p>
                </div>
                <div className='bg-[#FAFBFF] grid gap-4 rounded-lg p-5'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#02295A] text-base  font-bold'>{yearly ? displayedYearlyTitle : displayedMonthlyTitle}</p>
                            <button className='text-[#9699AB] text-base cursor-pointer underline hover:text-[#473DFF]'><Link href='/plan'>Change</Link></button>
                        </div>
                        {
                            yearly ? <p className='font-bold text-[#02295A] text-base'>{displayedYearlyPrice}/yr</p>
                                : <p className='font-bold text-[#02295A] text-base'>{displayedMonthyPrice}/mo</p>
                        }
                    </div>
                    <div className='grid pt-4 border-t border-accent-200 gap-2'>
                        {online &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Online service</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${10}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${1}/mo</p>
                                }
                            </div>
                        }
                        {largerStorage &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Larger storage</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${20}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${2}/mo</p>
                                }
                            </div>
                        }
                        {customizable &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Customizable</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${20}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${2}/mo</p>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className='p-5 flex justify-between items-center mb-20'>
                    <p className='text-[#9699AB] text-base'>{yearly ? "Total (per year)" : "Total (per month)"}</p>
                    {yearly ? <p className='font-bold text-[#473DFF] text-lg'>+${customerTotalPrice}/yr</p>
                        : <p className='font-bold text-[#473DFF] text-lg'>+${customerTotalPrice}/mo</p>
                    }
                </div>





                <div className="flex justify-between mt-20">
                    <button className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]"><Link href="/plan">Go Back</Link></button>
                    <button className="bg-[#473dff] py-2.5 px-7 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        <Link href="/appreciation">Confirm</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Summary