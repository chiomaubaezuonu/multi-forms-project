import Image from 'next/image'
import React from 'react'

const Appreciation = () => {
  return (
    <div className="flex flex-col justify-center h-full text-center items-center my-auto mx-auto">
        <Image src="/images/thank-you.svg" className="mx-auto" alt='thank you'  width={80} height={80}  />
        <h1 className="mt-6 mb-2 text-[#02295A] text-3xl font-bold">Thank you!</h1>
    <p className="text-[#9699ab] text-base w-[28.5rem]"> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com. </p>
    </div>
  )
}

export default Appreciation