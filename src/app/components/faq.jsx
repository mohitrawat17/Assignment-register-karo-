"use client";
import React, { useState } from "react";

const Faq = () => {
  const accordianData = [
    {
      title: "How can a virtual office benefit my business in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Can I legally register my business using a virtual office address in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "How will I receive my business mail and packages with a virtual office?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Can I use a virtual office address for official correspondence and marketing materials?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title: "How can a virtual office benefit my business in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <>
      <div className="mt-24 text-3xl font-semibold leading-6 text-blue-600 max-md:mt-10">
        Questions in mind?
      </div>
      <div className="max-md:px-4 mt-2.5 text-xl leading-6 text-zinc-700">Read our FAQ</div>
      {accordianData.map((item, index) => {
        return (
          <div
            key={index}
            className="max-md:px-4 flex flex-col justify-center mt-12 px-5 py-3.5  max-w-full text-base font-medium leading-4 bg-blue-50 rounded-lg text-zinc-700 w-[1017px] max-md:pr-5 max-md:mt-10"
          >
            <div className=" flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="max-md:max-w-full">{item.title}</div>
              <img
                onClick={() => {
                  if (selected === index) {
                    setSelected(-1);
                  } else {
                    setSelected(index);
                  }
                }}
                src="/images/acc-btn.png"
                className="cursor-pointer shrink-0 my-auto aspect-square w-[13px]"
              />
            </div>
            {selected === index && (
              <p className="font-normal text-sm w-11/12 mt-4">{item.data}</p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Faq;
