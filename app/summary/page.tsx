"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/store';

const Summary = () => {

    const { online, setOnline, largerStorage, setLargerStorage, customizable, setCustomizable, monthlyArcade, setMonthlyArcade, monthlyAdvanced, setMonthlyAdvanced, monthlyPro, setMonthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro, yearly, setYearly } = useGlobalContext();
    const [selectedAddonPrice, setSelectedAddonPrice] = useState({
        onlineMonthly: 1,
        monthlyLargerStorage: 2,
        monthlyCustomizable: 2,
        yearlyOnline: 10,
        yearlyLargerStorage: 20,
        yearlyCustomizable: 20
    })
    // const onlineMonthly = 1
    // const monthlyLargerStorage = 2
    // const monthlyCustomizable = 2
    // const yearlyOnline = 10
    // const yearlyLargerStorage = 20
    // const yearlyCustomizable = 20
    const [selectedMonthly, setSelectedMonthly] = useState()
    const [selectedYearly, setSelectedYearly] = useState(0)
    let displayedMonthlyPrice: number = monthlyArcade ? 9 : (monthlyAdvanced ? 12 : (monthlyPro ? 15 : 0))
    const displayedYearlyPrice: number = yearlyArcade ? 90 : (yearlyAdvanced ? 120 : (yearlyPro ? 150 : 0))
    const displayedMonthlyTitle = monthlyArcade ? "Arcade (Monthly)" : (monthlyAdvanced ? "Advanced (Monthly)" : (monthlyPro ? "Pro (Monthly)" : ""))
    const displayedYearlyTitle = yearlyArcade ? "Arcade (Yearly)" : (yearlyAdvanced ? "Advanced (Yearly)" : (yearlyPro ? "Pro (Yearly)" : ""))
    const selectedPlanPrice: number = yearly ? displayedYearlyPrice : displayedMonthlyPrice
    const MonthlyServicePrice: number = !yearly && online ? selectedAddonPrice.onlineMonthly : (!yearly && largerStorage ? selectedAddonPrice.monthlyLargerStorage : (!yearly && customizable ? selectedAddonPrice.monthlyCustomizable : 0))
    const YearlyServicePrice: number = yearly && online ? selectedAddonPrice.yearlyOnline : (yearly && largerStorage ? selectedAddonPrice.yearlyLargerStorage : (yearly && customizable ? selectedAddonPrice.yearlyCustomizable : 0))
    const totalYearlyServicePrice: number = yearly && online
        ? selectedAddonPrice.yearlyOnline
        + (largerStorage ? selectedAddonPrice.yearlyLargerStorage : 0)
        + (customizable ? selectedAddonPrice.yearlyCustomizable : 0)
        : 0;
    const totalMonthlyServicePrice = !yearly && online ? selectedAddonPrice.onlineMonthly
        + (largerStorage ? selectedAddonPrice.monthlyLargerStorage : 0)
        + (customizable ? selectedAddonPrice.monthlyCustomizable : 0)
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
        // console.log(displayedMonthyPrice)
    }


    useEffect(() => {
        const storedData = localStorage.getItem('selectedAddonPrice');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setSelectedAddonPrice(parsedData);
            } catch (error) {
                console.error('Error parsing stored data:', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedAddonPrice', JSON.stringify({ selectedAddonPrice }))
    }, [selectedAddonPrice])

    useEffect(() => {
        const storedPlanPrices = localStorage.getItem('planPrices')
        if (storedPlanPrices) {
            const parsedPrices = JSON.parse(storedPlanPrices)
            console.log(parsedPrices)
            setMonthlyArcade(parsedPrices.monthlyArcade)
            setMonthlyAdvanced(parsedPrices.monthlyAdvanced)
            setMonthlyPro(parsedPrices.monthlyPro)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('planPrices', JSON.stringify({ monthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro }))
    }, [monthlyArcade, monthlyAdvanced, monthlyPro, yearlyArcade, yearlyAdvanced, yearlyPro])
    console.log(monthlyAdvanced)

    return (
        <div className="rounded-lg shadow-lg md:shadow-none -ml-2 z-20 flex-1 absolute md:relative top-40 md:top-0 p-1">
            <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8  mx-auto pt-4 pb-4 md:w-full bg-red-white">
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl text-[#02295A] rounded-t-xl pt-9 md:pt-7 pb-4 px-0 md:p-0 md:mb-2">Finishing up</h1>
                    <p className="tracking-tight text-[#9699AB] text-base px-0 pr-7 md:pr-4 mb-8 md:font-medium">Double-check everything looks OK before confirming.</p>
                </div>
                <div className='bg-[#FAFBFF] grid gap-4 rounded-lg p-5'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[#02295A] text-base  font-bold'>{yearly ? displayedYearlyTitle : displayedMonthlyTitle}</p>
                            <Link href='/plan' className='text-[#9699AB] text-base cursor-pointer underline hover:text-[#473DFF]'>Change</Link>
                        </div>
                        {
                            yearly ? <p className='font-bold text-[#02295A] text-base'>{selectedYearly}/yr</p>
                                : <p className='font-bold text-[#02295A] text-base bg-yellow-300'>{displayedMonthlyPrice}/mo</p>
                        }
                    </div>
                    <div className='grid pt-4 border-t border-accent-200 gap-2'>
                        {online &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Online service</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.yearlyOnline}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.onlineMonthly}/mo</p>
                                }
                            </div>
                        }
                        {largerStorage &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Larger storage</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.yearlyLargerStorage}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.monthlyLargerStorage}/mo</p>
                                }
                            </div>
                        }
                        {customizable &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Customizable</p>
                                {
                                    yearly ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.yearlyCustomizable}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.monthlyCustomizable}/mo</p>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className='p-5 flex justify-between items-center'>
                    <p className='text-[#9699AB] text-base'>{yearly ? "Total (per year)" : "Total (per month)"}</p>
                    <p className='font-bold text-[#473DFF] text-lg'>+${customerTotalPrice}{yearly ? '/yr' : '/mo'}</p>
                </div>
                <div className="flex justify-between items-center md:mt-20">
                    <Link href="/add-ons" className="text-[#9699AB] text-base duration-200 hover:text-[#02295A]">Go Back</Link>
                    <Link href="/appreciation" className="bg-[#473dff] py-2.5 px-7 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                        Confirm
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Summary