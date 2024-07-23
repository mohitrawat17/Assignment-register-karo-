import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/images/banner.png')] bg-no-repeat bg-custom-image bg-cover bg-center flex  relative flex-col justify-center items-center px-16 py-20 max-md:py-8 w-full min-h-[729px] max-md:px-5 max-md:max-w-full">
      <div className="flex relative flex-col items-center mt-16 mb-12 max-md:mb-5 max-w-full max-md:my-8">
        <div className="flex flex-col text-center max-md:max-w-full">
          <div className="text-xl font-semibold leading-6 text-white max-md:max-w-full">
            From a single desk to a whole building. The choice is yours.
          </div>
        </div>
        <div className="text-6xl font-semibold tracking-tighter text-center text-white leading-[56px] max-md:max-w-full max-md:text-4xl">
          Discover the Ultimate Workspace Solution
        </div>
        <div className="flex flex-col grow justify-center pt-20 w-full rounded-2xl shadow-2xl bg-white bg-opacity-0 max-md:max-w-full">
          <div className="justify-center px-8 py-6 mt-7 rounded-3xl bg-stone-100 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 justify-end px-6 py-3 w-full text-base bg-white rounded border border-solid border-zinc-300 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Search City"
                    className="w-full outline-none text-neutral-700"
                  />
                  <div className="py-0.5 font-semibold w-40 cursor-pointer text-blue-600 border-b border-blue-600 leading-[106%]">
                    Search Nearby
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="cursor-pointer flex grow gap-2.5 justify-center px-14 py-5 w-full text-sm font-semibold tracking-wider leading-4 text-center text-white uppercase whitespace-nowrap bg-blue-600 rounded-lg max-md:px-5 max-md:mt-10">
                  <img
                    src="/images/search.png"
                    className="shrink-0 aspect-square w-[17px]"
                  />
                  <div className="my-auto">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-9 max-w-full text-white max-md:text-black w-[741px]">
          <div className="text-base font-bold leading-4 max-md:max-w-full">
            Trending cities
          </div>
          <div className="flex gap-5 mt-6 text-sm font-semibold leading-6 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/new-delhi.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">New Delhi</div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/noida.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">Noida</div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/banglore.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">Banglore</div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/mumbai.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">Mumbai</div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/hyderabad.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">Hyderabad</div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2 pt-3.5">
              <img
                src="/images/chennai.png"
                className="bg-white p-1  self-center aspect-[1.3] w-[70px] h-[70px] rounded-lg"
              />
              <div className="mt-6">Chennai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
