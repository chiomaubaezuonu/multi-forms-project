import Link from 'next/link'
import React from 'react'
import "../App.css"

const Add_ons = () => {
    return (
        <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
                <div>
                    <h1 className="font-bold text-3xl text-[#02295A]">Pick add-ons</h1>
                    <p className="text-[#9699AB] text-base">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='grid gap-4'>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200  rounded  items-center' htmlFor="add-ons">
                        <input type="checkbox" />
                        <div>
                            <p className='text-[#02295a] text-sm font-bold'>Online Service</p>
                            <p className='text-[#9699ab] text-sm'>Access to multiplayer</p>
                        </div>
                        <p className='ml-auto text-[#473DFF]'>$1/mo</p>
                    </label>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200 rounded items-center' htmlFor="add-ons">
                        <input type="checkbox" />
                        <div className=''>
                            <p className="font-bold text-primary-100">Larger storage</p>
                            <p className="text-sm text-[#9699ab]">Extra 1TB of cloud save</p>
                        </div>
                        <p className="ml-auto text-[#473DFF]"> $2/mo</p>
                    </label>
                    <label className='add-ons flex gap-4 py-3 px-4 text-sm duration-200 rounded items-center' htmlFor="add-ons">
                        <input type="checkbox" />
                        <div>
                            <p className="font-bold text-primary-100">Customizable Profile</p>
                            <p className="text-sm text-[#9699ab]">Custom theme on your profile</p>
                        </div>
                        <p className="ml-auto text-[#473DFF]"> $2/mo</p>
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