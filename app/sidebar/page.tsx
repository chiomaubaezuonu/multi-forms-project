"use client"
import Link from 'next/link'
// import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'


interface Sidebarlinks {
  id: number
  linkNum: number,
  stepNum: string,
  details: string,
  href?: string
}

const sideLinks = [
  {
    id: 1,
    linkNum: 1,
    stepNum: "Step 1",
    details: "Your info",
    href: '/' 
  },
  {
    id: 2,
    linkNum: 2,
    stepNum: "Step 2",
    details: "Select Plan",
    href: '/plan'
  },
  {
    id: 3,
    linkNum: 3,
    stepNum: "Step 3",
    details: "Add-Ons",
     href: '/add-ons'
  },
  {
    id: 4,
    linkNum: 4,
    stepNum: "Step 4",
    details: "Summary",
      href: '/summary'
  }
]

const routeToLinkIdMap = {
  '/': 1, // Home page maps to link ID 1
  '/plan': 2, // Plan page maps to link ID 2
  '/add-ons': 3,
  'summary': 4
};

const Sidebar = () => {


  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState<number | null>(null)
  const [links, setLinks] = useState<Sidebarlinks>()
  const [activePage, setActivepage] = useState()

  
  return (
    <div>
      <div className="sidebar bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bgDesktop.svg')] bg-cover w-full md:w-[274px] h-[172px] md:h-[538px] md:rounded-xl">
        <div className="flex justify-center gap-4 py-5 z-5  md:grid md:gap-6 md:p-10">
          {/* <div className="flex justify-center gap-4 py-5 z-5 md:hidden"> */}

          {/* //test out */}
          {
            sideLinks.map((sideLink) => {
              const isActive = pathname === sideLink.href;

              return <div key={sideLink.id}>
                {/* <Link href='/plan'> */}
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className={`${isActive ? 'bg-[#BFE2FD]' : ''} text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white`}>{sideLink.linkNum}</div>
                  <div className="hidden md:block uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">{sideLink.stepNum}</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">{sideLink.details}</p>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            })
          }



          {/* <div onClick={() => setActiveColor(true)}>
              <Link href='/' >
                <div className="flex gap-4 items-center cursor-pointer">
                  <div className={`text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white ${activeColor ? 'bg-[#BFE2FD]' : " "}`}>1</div>
                  <div className="hidden md:block uppercase text-sm">
                    <p className="font-light text-xs text-[#ADBEFF]">Step 1</p>
                    <p className="tracking-widest text-[#F0F6FF] font-bold">Your info</p>
                  </div>
                </div>
              </Link>
            </div> */}
          {/* </div> */}
          {/* <div>
            <Link href='/plan'>
              <div className="flex gap-4 items-center cursor-pointer">
                <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">2</div>
                <div className="hidden md:block uppercase text-sm">
                  <p className="font-light text-xs text-[#ADBEFF]">Step 2</p>
                  <p className="tracking-widest text-[#F0F6FF] font-bold">Select Plan</p>
                </div>
              </div>
            </Link>
          </div> */}
          {/* <div>
            <Link href='/add-ons'>
              <div className="flex gap-4 items-center cursor-pointer">
                <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">3</div>
                <div className="hidden md:block uppercase text-sm">
                  <p className="font-light text-xs text-[#ADBEFF]">Step 3</p>
                  <p className="tracking-widest text-[#F0F6FF] font-bold">add-ons</p>
                </div>
              </div>
            </Link>
          </div> */}
          {/* <div>
            <Link href='/summary'>
              <div className="flex gap-4 items-center cursor-pointer">
                <div className="text-[#02295A] py-1 px-[0.628rem] border-[1px] text-sm font-bold rounded-full border-white">4</div>
                <div className="hidden md:block uppercase text-sm">
                  <p className="font-light text-xs text-[#ADBEFF]">Step 4</p>
                  <p className="tracking-widest text-[#F0F6FF] font-bold">summary</p>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </div >
  )
}

export default Sidebar