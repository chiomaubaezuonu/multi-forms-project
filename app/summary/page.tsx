"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGlobalContext, selectedAddonPrice } from '../Context/store';


const Summary = () => {
    const displayedYearlyTitle = "Yearly"
    const displayedMonthlyTitle = "Monthly"
    const { selectedPlan, setSelectedPlan, selectedAddon, setSelectedAddon, tenure, setTenure } = useGlobalContext();
    const calculateSubtotal = () => {
        let subTotal = 0;
        // subTotal = tenure === 'monthly' && selectedPlan === "Arcade" ? 9 : 0;
        // subTotal = tenure === "yearly" && selectedPlan === "Arcade" ? 90 : 0;
        // subTotal = tenure === "monthly" && selectedPlan === 'Advanced' ? 12 : 0
        // subTotal = selectedPlan === 'Advanced' && tenure === "yearly" ? 120 : 0
        // subTotal = selectedPlan === 'Pro' && tenure === "monthly" ? 15 : 0
        // subTotal = selectedPlan === 'Pro' && tenure === "yearly" ? 150 : 0
        // return subTotal
        if (tenure === 'monthly' && selectedPlan === 'Arcade') {
            subTotal = 9
        } else if (tenure === 'monthly' && selectedPlan === 'Advanced') {
            subTotal = 12
        } else if (tenure === 'monthly' && selectedPlan === 'Pro') {
            subTotal = 15
        } else if (tenure === 'yearly' && selectedPlan === 'Arcade') {
            subTotal = 90
        } else if (tenure === 'yearly' && selectedPlan === 'Advanced') {
            subTotal = 120
        } else if (tenure === 'yearly' && selectedPlan === 'Pro') {
            subTotal = 150
        }
        return subTotal
    }


    function calculateTotalPrice() {
        let totalAddonPrice = 0;

        //  Monthly
        if (tenure === "monthly") {
            totalAddonPrice =
                selectedAddon.online ? totalAddonPrice + selectedAddonPrice.online : totalAddonPrice;
            console.log(totalAddonPrice)
            totalAddonPrice = selectedAddon.largerStorage ? totalAddonPrice + selectedAddonPrice.largerStorage : totalAddonPrice;
            totalAddonPrice = selectedAddon.customizable ? totalAddonPrice + selectedAddonPrice.customizable : totalAddonPrice;
        }

        // yearly
        else {
            totalAddonPrice = tenure === 'yearly'
                ? totalAddonPrice + (selectedAddon.online ? selectedAddonPrice.onlineYearly : 0) + (selectedAddon.largerStorage ? selectedAddonPrice.largerStorageYearly : 0) + (selectedAddon.customizable ? selectedAddonPrice.customizableYearly : 0)
                : totalAddonPrice;
        }

        return totalAddonPrice + calculateSubtotal();
    }

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
                            <p className='text-[#02295A] text-base  font-bold'>{tenure === "yearly" ? displayedYearlyTitle : displayedMonthlyTitle}</p>
                            <Link href='/plan' className='text-[#9699AB] text-base cursor-pointer underline hover:text-[#473DFF]'>Change</Link>
                        </div>
                        {
                            tenure === "yearly" && selectedPlan === "Arcade" ? <p className='font-bold text-[#02295A] text-base'>{calculateSubtotal()}/yr</p>
                                : <p className='font-bold text-[#02295A] text-base'>{calculateSubtotal()}/mo</p>
                        }
                    </div>
                    <div className='grid pt-4 border-t border-accent-200 gap-2'>
                        {selectedAddon.online &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Online service</p>
                                {
                                    tenure === "yearly" ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.onlineYearly}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.online}/mo</p>
                                }
                            </div>
                        }
                        {selectedAddon.largerStorage === true &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Larger storage</p>
                                {
                                    tenure === "yearly" ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.largerStorageYearly}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.largerStorage}/mo</p>
                                }
                            </div>
                        }
                        {selectedAddon.customizable &&
                            <div className='flex justify-between items-center'>
                                <p className='text-[#9699AB] text-base'>Customizable</p>
                                {
                                    tenure === 'yearly' ? <p className='text-[#02295A] text-base'>+${selectedAddonPrice.customizableYearly}/yr</p>
                                        : <p className='text-[#02295A] text-base'>+${selectedAddonPrice.customizable}/mo</p>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className='p-5 flex justify-between items-center'>
                    <p className='text-[#9699AB] text-base'>{tenure === "yearly" ? "Total (per year)" : "Total (per month)"}</p>
                    <p className='font-bold text-[#473DFF] bg-red-500 text-lg'>+${calculateTotalPrice()}{tenure === "yearly" ? '/yr' : '/mo'}</p>
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























// const calculateSubtotal = () => {
//     let subTotal = 0;
//     subTotal = tenure === 'monthly' && selectedPlan === "Arcade" ? 9 : 0;
//     subTotal = tenure === "yearly" && selectedPlan === "Arcade" ? 90 : 0;
//     subTotal = tenure === "monthly" && selectedPlan === 'Advanced' ? 12 : 0
//     subTotal = selectedPlan === 'Advanced' && tenure === "yearly" ? 120 : 0
//     subTotal = selectedPlan === 'Pro' && tenure === "monthly" ? 15 : 0
//     subTotal = selectedPlan === 'Pro' && tenure === "yearly" ? 150 : 0
//     return subTotal
// }