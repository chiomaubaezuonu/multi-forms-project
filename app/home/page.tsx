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
    <div className="flex flex-col md:mt-0 bg-yellow z-20 absolute md:relative top-40 md:top-0">
      <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8 mx-auto pt-4 pb-4 md:w-full bg-white">
        <div>
          <h1 className="font-bold text-2xl rounded-t-xl md:text-3xl text-[#02295A] pb-2 md:mb-2 mt-10">Personal Info</h1>
          <p className="text-[#9699AB] text-base pr-16 md:mb-8 md:font-medium md:pr-4">Please provide your name, email address, and phone number.</p>
        </div>

        <form className="grid gap-4">
          {/* <div className="grid"> */}
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A] text-sm font-medium tracking-tight">Names
            </label>
            <input className="mt-[.5rem] border-[1px] font-bold text-sm border-[#d7d6e6] text-[#02295a] w-[15rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="text" placeholder="e.g. Stephen King" required />
          </div>
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A] text-sm font-medium tracking-tight">Email Address
            </label>
            <input className="mt-[.5rem] border-[1px] font-bold border-[#d7d6e6] text-[#02295a] w-[15rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="text" placeholder="e.g. stephenking@lorem.com" required />
          </div>
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A] text-sm font-medium tracking-tight">Phone Number
            </label>
            <input className="mt-[.5rem] border-[1px] font-bold border-[#554cd3] text-[#02295a] w-[15rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="text" placeholder="e.g. +1 234 567 890" required />
          </div>
          <div className="flex justify-between w-full z-20 mt-12 md:px-8">
            {/* <button className="">Go Back</button> */}
            <button className="bg-[#02295A] py-[0.625rem] px-7  hover:bg-[#473DFF] hover:opacity-75 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
              <Link href="/plan">Next Step</Link>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

