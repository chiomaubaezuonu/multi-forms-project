"use client"
import Image from "next/image";
import bgDesktop from "../public/images/bgDesktop.svg"
import "../App.css"
import Link from "next/link";
import { useState } from "react";
// import Sidebar from "./sidebar/page";




export default function Home() {

  const [isPlanPageActive, setIsPlanPageActive] = useState(false);

  return (
    <div className="z-10 flex-1 p-0 md:p-5 bg-white rounded-lg shadow-lg md:shadow-none">
      <div>
        <div className="md:block p-3 rounded-lg shadow-lg md:shadow-none z-10 flex-1 md:p-5 bg-white">
          <div className="flex flex-col sm:bg-red-500 bg-purple-500 md:shadow-none gap-4 mx-auto h-full md:w-4/5">
            <div>
              <h1 className="font-bold text-3xl text-[#02295A]">Personal Info</h1>
              <p className="text-[#9699AB] text-base">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="hidden"></div>
            <div className="hidden"></div>
            <div className="hidden"></div>

            <form action="onSubmit" className="grid gap-4">
              {/* <div className="grid"> */}
              <div className="grid ">
                <label htmlFor="Name">Name
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. Stephen King" required />
              </div>
              <div className="grid">
                <label htmlFor="Name">Email Address
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. stephenking@lorem.com" required />
              </div>
              <div className="grid">
                <label htmlFor="Name">Phone Number
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. +1 234 567 890" required />
              </div>
              <div className="hidden md:flex justify-between mt-[146px]">
                <button className="hidden">Go Back</button>
                <button className="bg-[#02295A] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                  <Link href="/plan">Next Step</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div>

  );
}

{/* bgDesktop */ }

{/* <div className="md:hidden w-80 absolute shadow-lg z-10 flex-1 p-0 top-40 md:shadow-none bg-red-500">
          <div className="flex flex-col rounded-lg md:shadow-none w-full gap-4 mx-auto p-4 h-full md:w-4/5">
            <div>
              <h1 className="font-bold text-3xl text-[#02295A]">Personal Info</h1>
              <p className="text-[#9699AB] text-base">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="hidden"></div>
            <div className="hidden"></div>
            <div className="hidden"></div>
            

            <form action="onSubmit" className="grid gap-4">
              
              <div className="grid ">
                <label htmlFor="Name">Name
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. Stephen King" required />
              </div>
              <div className="grid">
                <label htmlFor="Name">Email Address
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. stephenking@lorem.com" required />
              </div>
              <div className="grid">
                <label htmlFor="Name">Phone Number
                </label>
                <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. +1 234 567 890" required />
              </div>
              <div className="hidden md:flex justify-between mt-[146px]">
                <button className="hidden">Go Back</button>
                <button onClick={() => setIsPlanPageActive(true)} className="bg-[#02295A] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
                  <Link href="/plan">Next Step</Link>
                </button>
              </div>
            
            </form>
          </div>
        </div> */}