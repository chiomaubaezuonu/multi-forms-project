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

  // [355px] ml-10 md:ml-0
  return (
    <div>
      <div className="sidebar absolute md:relative md:top-0 bg-[url('/images/bg-sidebar-mobile.svg')] top-0 left-0 md:mr-4 md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover w-full md:w-[254px] h-[185px] md:h-[538px] md:rounded-xl">
        {/* <div className="sidebar absolute md:relative top-0 left-0 right-0 md:-bottom-24 md:-left-5 md:right-24 bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover w-full md:w-[254px] h-48 md:h-[538px] md:rounded-xl"> */}
        <div className="flex justify-center gap-4 py-5 p-8 pt-9 md:flex-col z-20 md:gap-6">
          {/* <div className="flex justify-center gap-4 py-5 z-5 md:hidden"> */}

          {/* //test out */}
          {
            sideLinks.map((sideLink) => {
              const isActive = pathname === sideLink.href;

              return <div key={sideLink.id}>
                {/* <Link href='/plan'> */}
                <div className="flex gap-4 items-center cursor-pointer onClick={handleNavigation(id)}">
                  <div className={`${isActive ? 'bg-[#BFE2FD] text-[#09225A] border-[#BFE2FD]' : ''} text-white py-1 px-[0.628rem] w-8 h-8 flex items-center justify-center border-[1px] text-sm font-bold rounded-full border-gray-100`}>{sideLink.linkNum}</div>
                  <div className="hidden md:flex flex-col uppercase text-sm">
                    <p className="font-light text-xs text-[#9699AB]">{sideLink.stepNum}</p>
                    <p className="text-[#FAFBFF] font-semibold text-sm tracking-wider">{sideLink.details}</p>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Sidebar