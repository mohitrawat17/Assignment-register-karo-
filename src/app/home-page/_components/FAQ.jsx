"use client";
import React, { useState } from "react";

const FAQ = () => {
  const accordianData = [
    {
      title: "How can a virtual office benefit my business in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title: "How can I cancel my virtual office service if needed?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Can I legally register my business using a virtual office address in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Is it possible to upgrade or downgrade my virtual office plan as my business needs change?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "How will I receive my business mail and packages with a virtual office?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Can I access meeting rooms and conference facilities with a virtual office plan?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Can I use a virtual office address for official correspondence and marketing materials?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Are there any additional fees or hidden costs associated with virtual office services in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "Do virtual office services in India include call answering and forwarding?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      title:
        "What kind of documentation do I need to provide to set up a virtual office in India?",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="w-10/12">
      <h2 className="mt-36 text-4xl font-semibold leading-8 text-blue-600 max-md:mt-10">
        Questions in mind?
      </h2>
      <h3 className="mt-3.5 text-3xl leading-8 text-zinc-700">Read our FAQ</h3>
      <div className="mt-24 w-full max-w-[1449px] max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 p-4">

          {accordianData.map((item, index) => {
            return (
              <div
                key={index}
                className="max-md:px-4 flex flex-col justify-center mt-12 px-5 py-3.5  max-w-full text-base font-medium leading-4 bg-blue-50 rounded-lg text-zinc-700 max-md:pr-5 max-md:mt-10"
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
                  <p className="font-normal text-sm w-11/12 mt-4">
                    {item.data}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
