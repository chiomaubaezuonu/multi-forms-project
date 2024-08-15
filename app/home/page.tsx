"use client"
import Image from "next/image";
import bgDesktop from "../public/images/bgDesktop.svg"
import "../App.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";




export default function Home() {

  const [isPlanPageActive, setIsPlanPageActive] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/plan')
  }

  const handleValidation = () => {
    if (formValues.name.trim() === "" && formValues.email.trim() === "" && formValues.phone.trim() === "") {

      setErrorMessage({ ...errorMessage, name: "This field is required", email: "This field is required", phone: "This field is required", })
    }

  }


  useEffect(() => {
    formValues.name.trim() !== "" && setErrorMessage({ ...errorMessage, name: '' }); 
    formValues.email.trim() !== "" && setErrorMessage({ ...errorMessage, email: '' });
    formValues.phone.trim() !== '' && setErrorMessage({ ...errorMessage, phone: '' });
  }, [formValues.name, formValues.email, formValues.phone])


useEffect(() => {
  const storedValues = localStorage.getItem('formvalues')
    if (storedValues) {
      setFormValues(JSON.parse(storedValues));
    }
}, [])

  useEffect(() => {
    if(formValues.email !== '' && formValues.name !== '' && formValues.phone !== '')
    localStorage.setItem('formvalues', JSON.stringify(formValues))
  }, [formValues])

  
  return (
    <div className="flex flex-col md:mt-0 bg-yellow z-20 absolute md:relative top-40 md:top-0">
      <div className="flex flex-col px-6 w-11/12 rounded-xl md:rounded-none md:px-8 mx-auto pt-4 pb-4 md:w-full bg-white">
        <div>
          <h1 className="font-bold text-2xl rounded-t-xl md:text-3xl text-[#02295A] pb-2 md:mb-2 mt-10">Personal Info</h1>
          <p className="text-[#9699AB] text-base pr-8 md:mb-8 md:font-medium md:pr-4">Please provide your name, email address, and phone number.</p>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A] w-[17.563rem] flex justify-between md:w-[26.5rem] text-sm font-medium tracking-tight">Names
              {errorMessage && <p className="text-red-500">{errorMessage.name}</p>}
            </label>
            <input value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} className="mt-[.5rem] border-[0.063rem] font-bold text-sm border-[#d7d6e6] text-[#02295a] w-[17.563rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="text" placeholder="e.g. Stephen King" required />
          </div>
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A]  w-[17.563rem] flex justify-between md:w-[26.5rem] text-sm font-medium tracking-tight">Email Address
              {errorMessage && <p className="text-red-500">{errorMessage.email}</p>}
            </label>
            <input value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} className="mt-[.5rem] border-[0.063rem] font-bold border-[#d7d6e6] text-[#02295a] w-[17.563rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="email" placeholder="e.g. stephenking@lorem.com" required />
          </div>
          <div className="grid">
            <label htmlFor="Name" className="text-[#02295A] w-[17.563rem] flex justify-between md:w-[26.5rem] text-sm font-medium tracking-tight">Phone Number
              {errorMessage && <p className="text-red-500">{errorMessage.phone}</p>}
            </label>
            <input value={formValues.phone} onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })} className="mt-[.5rem] border-[0.063rem] font-bold border-[#554cd3] text-[#02295a] w-[17.563rem] md:w-[26.5rem] h-[2.625rem] py-2 px-3 rounded-lg placeholder:font-medium placeholder:text-[#9699ab] focus-visible:outline-none focus-visible:border-[#473dff]" type="text" placeholder="e.g. +1 234 567 890" required />
          </div>
          <div className="flex justify-between w-full z-20 mt-12 md:px-8">
            <button type="submit" onClick={handleValidation} className="bg-[#02295A] py-[0.625rem] px-7  hover:bg-[#473DFF] hover:opacity-75 rounded-lg text-white ml-auto duration-[.15s] cursor-pointer">
              Next Step
            </button>

          </div>

        </form>
      </div>
    </div>

  );
}

