"use client"
import Image from "next/image";
import bgDesktop from "../public/images/bgDesktop.svg"
import "./App.css"




export default function Home() {
  return (
    <div className=" bg-[#f0f6ff] relative flex min-h-screen flex-col items-center justify-between p-8">
      <main className="p-5 md:rounded md:bg-white md:shadow-lg w-9/12 ">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* for mobile */}
          {/* <div className="md:hidden w-full h-[172px] absolute top-0 bg-mobile left-0 bg-cover -z-10">

              </div> */}
          {/* sidebar */}
          <div className="sidebar md:bg-[url('/images/bgDesktop.svg')] bg-cover w-[274px] h-[568px] roundex-xl hidden md:block">
            <div className="grid gap-6 p-10"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* form container */}
          <div className="rounded-lg shadow-lg md:shadow-none z-10 flex-1 p-5 bg-white ">
            <div className="flex flex-col md:shadow-none gap-4 mx-auto h-full md:w-4/5">
              <div>
                <h1 className="font-bold text-3xl text-[#02295A]">Personal Info</h1>
                <p className="text-[#9699AB] text-base">Please provide your name, email address, and phone number.</p>
              </div>
              <div className="hidden"></div>
              <div className="hidden"></div>
              <div className="hidden"></div>
              {/* form */}

              <form action="onSubmit" className="grid gap-4">
                {/* <div className="grid"> */}
                <div className="grid ">
                  <label htmlFor="Name">Name
                  </label>
                  <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className="grid">
                  <label htmlFor="Name">Phone Number
                  </label>
                  <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className="grid">
                  <label htmlFor="Name">Email Address
                  </label>
                  <input className="mt-[.25rem] border-2 border-[#d6d9e6] w-full py-2 px-3 rounded" type="text" placeholder="e.g. +1 234 567 890" />
                </div>
                <div className="hidden md:flex justify-between mt-[146px] bg-red-500">
                  <button className="hidden">Go Back</button>
                  <button className="bg-[#02295A] py-3 px-5 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer" type="submit">
                    Next Step
                  </button>
                </div>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
