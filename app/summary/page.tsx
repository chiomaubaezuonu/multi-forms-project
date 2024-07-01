import Link from 'next/link'
import React from 'react'

const Summary = () => {
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
                            <p className='text-[#02295A] text-base  font-bold'>Pro (Yearly)</p>
                            <button className='text-[#9699AB] text-base cursor-pointer underline hover:text-[#473DFF]'><Link href='/plan'>Change</Link></button>
                        </div>
                        <p className='font-bold text-[#02295A] text-base'>$150/yr</p>
                    </div>
                    <div className='grid pt-4 border-t border-accent-200 gap-2'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#9699AB] text-base'>Online service</p>
                            <p className='text-[#02295A] text-base'>+$10/yr</p>
                        </div>
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