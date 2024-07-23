'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Enquiry_form = () => {
  const navigate=useRouter()
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/images/landing-form-bg.png')] bg-no-repeat bg-custom-image bg-cover bg-center w-full px-5 pt-4 pb-20">
        <div className="flex gap-5 justify-between w-full text-sm font-bold tracking-wide leading-5 text-white max-w-[1224px] max-md:flex-wrap max-md:max-w-full">
          <img
            src="/images/header-logo.png"
            className="shrink-0 max-w-full aspect-[1.39] w-[124px]"
            alt="logo"
          />
          <Link href="/home-page" className="flex gap-4 px-6 py-4 my-auto bg-sky-500 rounded-md max-md:px-5 cursor-pointer">
            <div>Enquire now</div>
            <img
              src="/images/enquire-arrow.png"
              className="shrink-0 my-auto w-3 aspect-[1.2]"
            />
          </Link>
        </div>
        <div className="mt-14 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-5xl font-extrabold tracking-wide text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Work From Anywhere, Grow Everywhere. <br />
                Get Your Instant Virtual Office
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow px-6 py-9 w-full text-base leading-6 bg-white text-slate-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-center text-2xl font-bold tracking-tight leading-10 text-center text-gray-900">
                  Get in touch with us
                </div>
                <div className="mt-6 text-center max-md:max-w-full">
                  Submit your Details to get an Instant{" "}
                  <span className="font-semibold text-amber-500">
                    All-inclusive
                  </span>{" "}
                  Quote to your email and a{" "}
                  <span className="font-bold text-amber-500">FREE</span> Expert
                  consultation
                </div>
                <div className="self-start mt-8">Name</div>
                <input
                type='text'
                  placeholder="Your name"
                  className="self-start px-4 py-3 w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                />

                <div className="mt-5 max-md:max-w-full">Mobile</div>
                <input
                type='number'
                  placeholder="Mobile No."
                  className="self-start px-4 py-3 w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                />
                <div className="mt-5 max-md:max-w-full">Email</div>
                <input
                type='text'
                  placeholder="Email"
                  className="self-start px-4 py-3 w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                />
                <div className="self-start mt-5">City</div>
                <input
                type='text'
                  placeholder="City Name"
                  className="self-start px-4 py-3 w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                />
                <button onClick={()=>navigate.push('/home-page')} type='button' className="px-5 text-center py-3 mt-7 font-bold leading-7 text-white bg-indigo-700 rounded-lg shadow-sm max-md:px-5 max-md:max-w-full">
                  Get a Detailed Quotation Now!
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Enquiry_form
