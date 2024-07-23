import React from "react";

const Features = () => {
  return (
    <>
      <div className="px-20 mt-28 w-full max-md:mt-10 max-md:px-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-9 w-full hover:text-white hover:bg-sky-500 bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-8">
              <img
                src="/images/people-logo.png"
                className="w-12 aspect-[1.2]"
              />
              <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8 max-md:mr-2">
                Unleash Flexibility
              </div>
              <div className="mt-2.5 text-sm font-medium tracking-wide leading-5">
                Work from anywhere in India with a prestigious virtual address.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-9 pr-5 pl-10 w-full hover:text-white hover:bg-sky-500 bg-white rounded-3xl shadow-lg max-md:pl-5 max-md:mt-8">
              <img
                src="/images/people-logo.png"
                className="w-12 aspect-[1.2]"
              />
              <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8 max-md:mr-2.5">
                Simplify Operations
              </div>
              <div className="mt-2.5 text-sm font-medium tracking-wide leading-5">
                Get a mailing address, access GST registration, and enjoy
                streamlined services.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-9 w-full hover:text-white hover:bg-sky-500 rounded-3xl shadow-lg max-md:px-5 max-md:mt-8">
              <img
                src="/images/people-logo.png"
                className="w-12 aspect-[1.2]"
              />
              <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8">
                Boost Credibility
              </div>
              <div className="mt-2.5 text-sm font-medium tracking-wide leading-5">
                Project a professional image and attract top talent nationwide.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center px-16 py-3 mt-24 w-full max-w-[1364px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-w-full w-[972px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="text-[#1C4670] flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
              <h2 className="font-[800] text-5xl mb-2">FREE DOWNLOAD :</h2>
              <h4 className="font-[700] text-3xl">
                The ultimate checklist for
              </h4>

              <h4 className="font-[700] text-3xl mb-5"> virtual office 2024</h4>
              <p className="font-[400] text-xl mb-5">
                Discover the step-by-step procedures and essential
                considerations you need to know before setting up a Virtual
                Office in India.
              </p>
              <div className="flex flex-col max-md:max-w-full mt-32">
                <button className="shrink-0 text-white bg-orange-400 rounded-lg h-[62px] max-md:max-w-full">
                  Send Me The Checklist
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <img
                src="/images/virtual-office-logo.png"
                className="grow w-full aspect-[0.74] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
