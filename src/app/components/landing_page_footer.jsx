import Link from "next/link";
import React from "react";

const Landing_page_footer = () => {
  return (
    <>
      <div className="justify-center p-10 mt-40 w-full max-md:mt-10 max-md:max-w-full bg-[url('/images/footer-bg.png')]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col grow justify-center px-16 pt-5 pb-8 w-full text-sm leading-4 bg-zinc-100 text-slate-700 max-md:px-5 max-md:mt-10">
              <div className="self-center text-xl font-bold tracking-tight leading-7 text-center text-gray-900">
                Get in touch with us
              </div>
              <div className="self-center mt-4 text-xs text-center">
                Submit your Details to get an Instant{" "}
                <span className="font-bold text-amber-500">All-inclusive</span>{" "}
                Quote to your email and a{" "}
                <span className="font-bold text-amber-500">FREE </span>Expert
                consultation
              </div>
              <div className="mt-2.5">Name</div>
              <input
                type="text"
                placeholder="Your name"
                className="self-start px-4 py-1 outline-none w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              />
              <div className="mt-2.5">Mobile</div>
              <input
                type="number"
                placeholder="Mobile No."
                className="self-start px-4 py-1 outline-none w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              />
              <div className="mt-2.5 max-md:mr-2.5">Email</div>
              <input
                type="text"
                placeholder="Email"
                className="self-start px-4 py-1 outline-none w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              />
              <div className="mt-2.5">City</div>
              <input
                type="text"
                placeholder="City Name"
                className="self-start px-4 py-1 outline-none w-full mt-1.5 text-sm leading-6 text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              />
              <button className="px-3 py-px mt-5 text-base font-bold leading-7 text-white bg-indigo-700 rounded shadow-sm max-md:px-5">
                Get a Detailed Quotation Now!
              </button>
            </form>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <img
                src="/images/header-logo-black.png"
                className="self-center max-w-full aspect-[1.39] w-[124px]"
              />
              <div className="self-center mt-11 text-2xl font-semibold text-black max-md:mt-10">
                Feel free to connect with us
              </div>
              <div className="flex gap-3 justify-between mt-5 text-xl text-black max-md:flex-wrap">
                <div className="flex gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c24af64487f15883ea9c3d2e9ce50d17c60fb916988827dac149c021aab574c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="shrink-0 self-start aspect-[0.96] w-[23px]"
                  />
                  <a className="text-sm font-600" href="tel:+91 93112 21210">+91 93112 21210</a>
                </div>
                <div className="flex gap-2 whitespace-nowrap">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb4a13443cfd6d305a321332f57da1d01bd1d6605fbc59861f635634ad46bb4?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="shrink-0 self-start w-6 aspect-square"
                  />
                  
                  <a
                    className="text-sm font-600"
                    href="mailto:virtualoffice@teamco.work"
                  >
                    virtualoffice@teamco.work
                  </a>{" "}
                </div>
              </div>
              <div className="flex gap-2 mt-5 text-xl text-black max-md:flex-wrap">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/146b4daf1feaa5f5988266f1e5e7efc030c8b358c074c50b81b62a9e78cd343a?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-start aspect-[0.96] w-[23px]"
                />
                <h2 className="text-lg">
                  704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana,
                  122007
                </h2>
              </div>
              <div className="flex gap-5 justify-between items-start pr-2.5 mx-8 mt-11 max-md:mx-2.5 max-md:mt-10">
                <Link href="#">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e062951c6e0e3cebd2ca85b3c10a5da051061d71c30c7f9397a8c56c33c312c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="cursor-pointer shrink-0 aspect-[1.35] w-[27px]"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/529a759c64182821b46c79a0de8930e7b852d573fd6d6eecc6e29790b619929d?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="cursor-pointer shrink-0 aspect-[1.35] w-[27px]"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c37ee52633a362b60cdfbcd253a26b306b6646eb564439067264e660e5e39dc?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="cursor-pointer shrink-0 w-7 aspect-[1.41]"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/133f37d17000f35dc04a1bdef71e06fa5aa14a545dce938025ca56ad0d408123?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="cursor-pointer shrink-0 self-stretch aspect-[1.41] w-[31px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden grow px-8 py-6 max-md:px-5 max-md:mt-10 bg-[url('/images/map.png')] bg-no-repeat"></div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-16 py-6  w-full text-base font-bold tracking-tight leading-7 text-center bg-zinc-800 text-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        © 2024 - Safe Ledger Private Limited. All rights reserved.
      </div>
    </>
  );
};

export default Landing_page_footer;
