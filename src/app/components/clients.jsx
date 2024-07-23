"use client";
import React, { useEffect, useState } from "react";

const Clients = () => {
  const sliderData = [
    {
      image: "/images/dabur.png",
      bio: "Sunil Duggal, CEO, Dabur Healthcare",
      detail: `The LaunchWise team is very professional and 100%
                      transparent. We would surely recommend them to everyone
                      who wants to have a new business setup or those who
                      already have a company. Their experts are thorough with
                      all corners of business. They have surely earned us as
                      their permanent client.`,
    },
    {
      image: "/images/slack.png",
      bio: "Mohit, CEO, Slack",
      detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      image: "/images/razorpay.png",
      bio: "Rawat, Founder, Razorpay",
      detail: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const handleNavigation = (direction) => {
    if (direction) {
      setImgIndex((prev) => (prev + 1) % sliderData.length);
    } else {
      // PREV
      if (imgIndex === 0) {
        setImgIndex(sliderData.length - 1);
      } else {
        setImgIndex((prev) => (prev -= 1));
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleNavigation(true), 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center self-stretch px-16 py-20 mt-12 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mb-6 w-full max-w-[1050px] max-md:max-w-full">
          <img
            src="/images/all-clients.png"
            className="self-center w-full aspect-[14.29] max-md:max-w-full"
          />
          <div className="flex flex-col justify-center px-12 py-8 mt-12 rounded-sm bg-[linear-gradient(270deg,#D71489_-1.04%,#004788_100%)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-0.5 max-md:flex-wrap max-md:max-w-full">
              <h3 className="text-2xl font-bold tracking-normal leading-8 text-white">
                Subscribe For Latest <br />
                Newsletter
              </h3>
              <form className="flex flex-col justify-center text-sm max-md:max-w-full">
                <div className="flex h-14 gap-5 justify-between pl-5 rounded-md border border-solid bg-stone-50 border-neutral-200 max-md:flex-wrap max-md:max-w-full">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className=" text-neutral-500 outline-none bg-transparent"
                  />
                  <button className="h-12 mt-1 px-5 cursor-pointer text-center text-white whitespace-nowrap rounded-none border border-solid bg-zinc-700 border-neutral-200 max-md:px-5">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mb-2 w-full max-w-[1091px] max-md:max-w-full">
          <div className="self-center text-3xl font-bold text-black uppercase">
            Client Testimonial{" "}
          </div>
          <div className="flex gap-5 items-center mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center items-center self-stretch my-auto">
              <img
                onClick={() => handleNavigation(0)}
                src="/images/left-slide.png"
                className="w-14 cursor-pointer rounded-full border border-black border-solid aspect-square stroke-[1px]"
              />
            </div>
            <div className="flex-auto self-stretch max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                  <img
                    src={sliderData[imgIndex].image}
                    className="grow  shrink-0 max-w-full aspect-[1.14] w-[204px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-1 pb-8 text-base text-black max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      {sliderData[imgIndex].detail}
                      <br />
                    </div>
                    <div className="flex gap-2 self-start mt-10 font-semibold max-md:mt-10">
                      <div className="shrink-0 my-auto w-3 h-0.5 bg-black border-2 border-black border-solid" />
                      <div className="flex-auto">
                        {sliderData[imgIndex].bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center self-stretch my-auto">
              <img
                onClick={() => handleNavigation(1)}
                src="/images/right-slide.png"
                className="w-14 cursor-pointer rounded-full border border-black border-solid aspect-square stroke-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
