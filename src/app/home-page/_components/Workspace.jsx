"use client";
import Link from "next/link";
import React, { useState } from "react";

const Workspace = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col items-center self-stretch px-16 pt-16 pb-9 mt-12 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1584px] max-md:max-w-full">
        {/* first row */}
        <div className="flex gap-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex-auto self-start text-4xl tracking-tight leading-10 text-neutral-700 max-md:max-w-full">
            Flexible workspace designed around your needs
          </div>
          <div className="flex flex-col text-base leading-6 text-center">
            <div className="flex gap-5 text-black">
              <img
                src="/images/india.png"
                className="shrink-0 rounded-full w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Prices for India</div>
            </div>
            <div className="flex gap-5 mt-5 text-neutral-700">
              <img
                src="/images/search-black.png"
                className="shrink-0 w-5 h-5 aspect-square"
              />
              <input
                type="text"
                placeholder="Search for a city or area to refine pricing"
                className="flex-auto outline-none bg-transparent  border-b-2 border-black w-80"
              />
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex h-20 gap-5 items-center p-px mt-10 text-xl leading-10 text-center bg-white border border-solid border-zinc-300 rounded-[32px] text-zinc-600 max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:hidden">
          <div
            onClick={() => setSelected(0)}
            className="px-16 pt-5 pb-3.5 cursor-pointer hover:text-white hover:bg-green-500 hover:border border-solid border-zinc-300 hover:rounded-[53px] max-md:px-5"
          >
            Office Space
          </div>
          <div
            onClick={() => setSelected(1)}
            className="flex-auto self-stretch my-auto px-16 pt-5 pb-3.5 cursor-pointer hover:text-white hover:bg-green-500 hover:border border-solid border-zinc-300 hover:rounded-[53px] max-md:px-5"
          >
            Coworking
          </div>
          <div
            onClick={() => setSelected(2)}
            className="flex-auto self-stretch my-auto px-16 pt-5 pb-3.5 cursor-pointer hover:text-white hover:bg-green-500 hover:border border-solid border-zinc-300 hover:rounded-[53px] max-md:px-5"
          >
            Virtual Offices
          </div>
          <div
            onClick={() => setSelected(3)}
            className="flex-auto self-stretch my-auto px-16 pt-5 pb-3.5 cursor-pointer hover:text-white hover:bg-green-500 hover:border border-solid border-zinc-300 hover:rounded-[53px] max-md:px-5 max-md:max-w-full"
          >
            Meeting rooms
          </div>
        </div>

        <div className="mt-9 text-base leading-6 text-neutral-700 max-md:max-w-full">
          Our flexible, fully-customisable office rentals are available by the
          hour, day, or as long as you need.
        </div>


{/* third row */}
        <div className="flex gap-4 mt-8 text-base max-md:flex-wrap">
          {selected === 0 ? (
            <>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws1.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Private offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    A range of ready-to-use, fully equipped
                    <br />
                    offices with everything you need to get
                    <br />
                    started.
                  </div>
                  <div className="flex gap-2.5 mt-7 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/160a41ee7c7fb123a79eeb6fb997e214f9e8a7602eebcc32bebdf8b16a8996fc?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By month or year</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/457c7d06887e99bd377bf70b1655f331a5a6930cfab525185f98966adfbe6892?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws1.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Private offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    A range of ready-to-use, fully equipped
                    <br />
                    offices with everything you need to get
                    <br />
                    started.
                  </div>
                  <div className="flex gap-2.5 mt-7 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/160a41ee7c7fb123a79eeb6fb997e214f9e8a7602eebcc32bebdf8b16a8996fc?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By month or year</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/457c7d06887e99bd377bf70b1655f331a5a6930cfab525185f98966adfbe6892?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws1.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Private offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    A range of ready-to-use, fully equipped
                    <br />
                    offices with everything you need to get
                    <br />
                    started.
                  </div>
                  <div className="flex gap-2.5 mt-7 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/160a41ee7c7fb123a79eeb6fb997e214f9e8a7602eebcc32bebdf8b16a8996fc?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By month or year</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/457c7d06887e99bd377bf70b1655f331a5a6930cfab525185f98966adfbe6892?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws1.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Private offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    A range of ready-to-use, fully equipped
                    <br />
                    offices with everything you need to get
                    <br />
                    started.
                  </div>
                  <div className="flex gap-2.5 mt-7 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/160a41ee7c7fb123a79eeb6fb997e214f9e8a7602eebcc32bebdf8b16a8996fc?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By month or year</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/457c7d06887e99bd377bf70b1655f331a5a6930cfab525185f98966adfbe6892?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : selected === 1 ? (
            <>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws2.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Custom Offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    When off-the-shelf simply isn't
                    <br />
                    enough. Customise all aspects of your
                    <br />
                    space, including furniture and branding.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d42c06120eda7d0c6dac6b08702ff49ff66058f49a11dd3ec47ad2de46af76?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      By month or year + customised
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe703bacdebd739ffa71f300b527c2b72f9a1e1cf577cc689c53be5d017e8e02?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws2.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Custom Offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    When off-the-shelf simply isn't
                    <br />
                    enough. Customise all aspects of your
                    <br />
                    space, including furniture and branding.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d42c06120eda7d0c6dac6b08702ff49ff66058f49a11dd3ec47ad2de46af76?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      By month or year + customised
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe703bacdebd739ffa71f300b527c2b72f9a1e1cf577cc689c53be5d017e8e02?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws2.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Custom Offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    When off-the-shelf simply isn't
                    <br />
                    enough. Customise all aspects of your
                    <br />
                    space, including furniture and branding.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d42c06120eda7d0c6dac6b08702ff49ff66058f49a11dd3ec47ad2de46af76?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      By month or year + customised
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe703bacdebd739ffa71f300b527c2b72f9a1e1cf577cc689c53be5d017e8e02?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws2.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6">
                  <div className="text-lg leading-6 text-neutral-700">
                    Custom Offices
                  </div>
                  <div className="mt-5 leading-6 text-neutral-700">
                    When off-the-shelf simply isn't
                    <br />
                    enough. Customise all aspects of your
                    <br />
                    space, including furniture and branding.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d42c06120eda7d0c6dac6b08702ff49ff66058f49a11dd3ec47ad2de46af76?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      By month or year + customised
                    </div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe703bacdebd739ffa71f300b527c2b72f9a1e1cf577cc689c53be5d017e8e02?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 89 per person per month
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid">
                      Get a quote
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : selected === 2 ? (
            <>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws3.png" className="w-full aspect-square" />
                <div className="flex flex-col px-6 mt-6 max-md:px-5">
                  <div className="text-lg leading-6 text-neutral-700">
                    Day Offices
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    A professional on-demand office
                    <br />
                    space. Perfect when you need to get
                    <br />
                    your head down and do your best work.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/023ee46601465598b0c8cd7f4ea23003aa6948db6272fc0c0882553958298364?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By the hour or day</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a16fab0e56b7a1d2881f8632177a63000d55c4382b0e5fc5c2410af0207ef2c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 25 per day
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 py-3 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Book now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws3.png" className="w-full aspect-square" />
                <div className="flex flex-col px-6 mt-6 max-md:px-5">
                  <div className="text-lg leading-6 text-neutral-700">
                    Day Offices
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    A professional on-demand office
                    <br />
                    space. Perfect when you need to get
                    <br />
                    your head down and do your best work.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/023ee46601465598b0c8cd7f4ea23003aa6948db6272fc0c0882553958298364?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By the hour or day</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a16fab0e56b7a1d2881f8632177a63000d55c4382b0e5fc5c2410af0207ef2c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 25 per day
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 py-3 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Book now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws3.png" className="w-full aspect-square" />
                <div className="flex flex-col px-6 mt-6 max-md:px-5">
                  <div className="text-lg leading-6 text-neutral-700">
                    Day Offices
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    A professional on-demand office
                    <br />
                    space. Perfect when you need to get
                    <br />
                    your head down and do your best work.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/023ee46601465598b0c8cd7f4ea23003aa6948db6272fc0c0882553958298364?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By the hour or day</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a16fab0e56b7a1d2881f8632177a63000d55c4382b0e5fc5c2410af0207ef2c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 25 per day
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 py-3 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Book now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws3.png" className="w-full aspect-square" />
                <div className="flex flex-col px-6 mt-6 max-md:px-5">
                  <div className="text-lg leading-6 text-neutral-700">
                    Day Offices
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    A professional on-demand office
                    <br />
                    space. Perfect when you need to get
                    <br />
                    your head down and do your best work.
                  </div>
                  <div className="flex gap-2.5 mt-6 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/023ee46601465598b0c8cd7f4ea23003aa6948db6272fc0c0882553958298364?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">By the hour or day</div>
                  </div>
                  <div className="flex gap-2.5 mt-3.5 text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a16fab0e56b7a1d2881f8632177a63000d55c4382b0e5fc5c2410af0207ef2c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">Teams of any size</div>
                  </div>
                  <div className="mt-6 text-lg leading-6 text-teal-600">
                    From $ 25 per day
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link href="#" className="px-5 py-3 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Book now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws4.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6 max-md:pl-5">
                  <div className="text-lg text-neutral-700">
                    Office membership
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    Flexible access to Day Offices where
                    <br />
                    and when you choose, at thousands of
                    <br />
                    locations worldwide.
                  </div>
                  <div className="flex gap-2.5 mt-7 leading-[150%] text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/394505161bb21de493043fc62a693d6c7e05e8b20b47d8f1b59d8cc5406eb9f8?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      5, 10 or unlimited days per month
                    </div>
                  </div>
                  <div className="mt-14 text-lg text-teal-600 max-md:mt-10">
                    From $ 225 per month
                  </div>
                  <div className="flex gap-4 mt-4 leading-[150%]">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Buy now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws4.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6 max-md:pl-5">
                  <div className="text-lg text-neutral-700">
                    Office membership
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    Flexible access to Day Offices where
                    <br />
                    and when you choose, at thousands of
                    <br />
                    locations worldwide.
                  </div>
                  <div className="flex gap-2.5 mt-7 leading-[150%] text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/394505161bb21de493043fc62a693d6c7e05e8b20b47d8f1b59d8cc5406eb9f8?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      5, 10 or unlimited days per month
                    </div>
                  </div>
                  <div className="mt-14 text-lg text-teal-600 max-md:mt-10">
                    From $ 225 per month
                  </div>
                  <div className="flex gap-4 mt-4 leading-[150%]">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Buy now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws4.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6 max-md:pl-5">
                  <div className="text-lg text-neutral-700">
                    Office membership
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    Flexible access to Day Offices where
                    <br />
                    and when you choose, at thousands of
                    <br />
                    locations worldwide.
                  </div>
                  <div className="flex gap-2.5 mt-7 leading-[150%] text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/394505161bb21de493043fc62a693d6c7e05e8b20b47d8f1b59d8cc5406eb9f8?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      5, 10 or unlimited days per month
                    </div>
                  </div>
                  <div className="mt-14 text-lg text-teal-600 max-md:mt-10">
                    From $ 225 per month
                  </div>
                  <div className="flex gap-4 mt-4 leading-[150%]">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Buy now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 pb-4 bg-white rounded-lg">
                <img src="/images/ws4.png" className="w-full aspect-square" />
                <div className="flex flex-col px-5 mt-6 max-md:pl-5">
                  <div className="text-lg text-neutral-700">
                    Office membership
                  </div>
                  <div className="mt-4 leading-6 text-neutral-700">
                    Flexible access to Day Offices where
                    <br />
                    and when you choose, at thousands of
                    <br />
                    locations worldwide.
                  </div>
                  <div className="flex gap-2.5 mt-7 leading-[150%] text-zinc-600">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/394505161bb21de493043fc62a693d6c7e05e8b20b47d8f1b59d8cc5406eb9f8?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                      className="shrink-0 self-start w-4 aspect-square"
                    />
                    <div className="flex-auto">
                      5, 10 or unlimited days per month
                    </div>
                  </div>
                  <div className="mt-14 text-lg text-teal-600 max-md:mt-10">
                    From $ 225 per month
                  </div>
                  <div className="flex gap-4 mt-4 leading-[150%]">
                    <Link href="#" className="px-5 pt-3.5 pb-2 text-white bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Buy now
                    </Link>
                    <Link href="#" className="px-5 py-3 text-blue-600 bg-white rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col flex-1 text-white bg-white rounded-lg">
            <img src="/images/ws5.png" className="w-full aspect-square" />
            <div className="flex flex-col items-start py-5 pr-12 pl-4 w-full bg-zinc-800 max-md:pr-5">
              <div className="text-lg leading-6">Need a helping hand?</div>
              <div className="mt-4 leading-6">
                Arrange a 1:1 call with a professional
                <br />
                advisor.
              </div>
              <div className="flex gap-2.5 mt-7">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fea06f2ec61308ba74f8dd2c7c2ba99c0415de64cb6118806d0de545e673c674?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-start w-4 aspect-square"
                />
                <div className="flex-auto">Agents available worldwide</div>
              </div>
              <div className="flex gap-2.5 mt-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3270d0c7debd6f3ec7f9e387befcd43b108ce412ed47817955b0e5f4e9309ca9?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-start w-4 aspect-square"
                />
                <div className="flex-auto">Discuss different options</div>
              </div>
              <div className="flex gap-2.5 mt-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e653aba6577e799b817431ff44d65a86da40e4b0d8f18b7215d5982f9539a8c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-start w-4 aspect-square"
                />
                <div className="flex-auto">Receive a personalised quote</div>
              </div>
              <div className="flex gap-2.5 mt-3.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8064ab7aa8be7a23a96bb56180a2e3cff023e2de2de99c620210000c65b8c193?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-start w-4 aspect-square"
                />
                <div className="flex-auto">Sign up and get started</div>
              </div>
              <Link href="#" className="px-5 py-2.5 mt-5 bg-blue-600 rounded-2xl border border-blue-600 border-solid max-md:pr-5">
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
