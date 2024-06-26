import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar md:bg-[url('/images/bgDesktop.svg')] bg-cover w-[274px] h-[568px] rounded-xl hidden md:block">
        <div className="bg-[url('/images/bg-sidebar-mobile')]  md:hidden bg-mobile w-full h-[172px] absolute top-0 left-0 bg-cover -z-10">
          <div className="grid gap-6 p-10">
            <div>
              <Link href='/' >
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white  bg-[#BFE2FD]">1</div>
                  <div className="uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">Step 1</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">Your info</p>
                  </div>
                </div>
              </Link>

            </div>
            <div>
              <Link href='/plan'>
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">2</div>
                  <div className="uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">Step 2</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">Select Plan</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href='/add-ons'>
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">3</div>
                  <div className="uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">Step 3</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">add-ons</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href='/summary'>
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">4</div>
                  <div className="uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">Step 4</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">summary</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar