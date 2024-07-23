import Link from "next/link";
import React from "react";

const Features2 = () => {
  return (
    <div className="px-px mt-36 w-full max-w-[1503px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <img
              src="/images/customer-care.png"
              className="z-10 self-end max-w-full aspect-[0.95] w-[292px]"
            />
            <img
              src="/images/meeting.png"
              className="mt-0 max-w-full aspect-[0.88] w-[382px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-2 max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl tracking-tighter leading-[56px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Discover the Ultimate Workspace Solution
            </div>
            <div className="mt-6 text-base leading-6 text-neutral-700 max-md:max-w-full">
              From solo entrepreneurs to growing teams, find everything you need
              under one roof. Whether it's pay-per-use plans or fixed desks, our
              flexible options cater to your unique work style, ensuring
              seamless productivity and success.
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-2xl font-semibold leading-8 text-neutral-700 max-md:mt-10">
                    <div>
                      <ul>
                        <li>
                          <span className="font-bold">Prestigious </span>
                          <span className="font-bold text-neutral-700">
                            Business Addresses
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mx-9 mt-2.5 text-base leading-7 text-neutral-500 max-md:mx-2.5">
                      Access to prestigious business addresses in key locations,
                      enhancing your brand image and credibility.
                    </div>
                    <div className="mt-10">
                      <ul>
                        <li>
                          <span className="font-bold text-neutral-700">
                            Mail Handling
                          </span>
                          <span className="font-bold"> Services</span>
                        </li>
                      </ul>
                    </div>
                    <div className="self-end mt-2.5 text-base leading-7 text-neutral-500 w-[297px]">
                      Efficient management of mail and packages, including
                      forwarding, scanning, and storage, ensuring seamless
                      communication.
                    </div>
                    <div className="mt-10">
                      <ul>
                        <li>
                          <span className="font-bold text-neutral-700">
                            Flexibility
                          </span>
                          <span className="font-bold">
                            {" "}
                            and Cost-Effectiveness
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mx-9 mt-2.5 text-base leading-7 text-neutral-500 max-md:mx-2.5">
                      Enjoy the flexibility of virtual office solutions with
                      customizable plans, avoiding the high costs associated
                      with traditional office leases.
                    </div>
                    <div className="mt-10">
                      <ul>
                        <li>
                          <span className="font-bold">Business </span>
                          <span className="font-bold text-neutral-700">
                            Expansion
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="self-end mt-2.5 text-base leading-7 text-neutral-500 w-[312px]">
                      Expand your business footprint across India without the
                      overhead costs of physical office space, enabling growth
                      and scalability.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-2xl font-semibold leading-8 text-neutral-700 max-md:mt-10">
                    <div>
                      <ul>
                        <li>
                          <span className="font-bold text-neutral-700">
                            Nationwide
                          </span>
                          <span className="font-bold"> Presence</span>
                        </li>
                      </ul>
                    </div>
                    <div className="self-end mt-2.5 text-base leading-7 text-neutral-500">
                      Establish a presence in multiple cities across India
                      without the need for physical office space.
                    </div>
                    <div className="mt-10">
                      <ul>
                        <li>
                          <span className="font-bold">Professional </span>
                          <span className="font-bold text-neutral-700">
                            Call Answering
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="self-end mt-2.5 text-base leading-7 text-neutral-500">
                      Professional receptionists manage incoming calls with
                      personalized greetings, providing a professional image for
                      your business.
                    </div>
                    <div className="mt-10">
                      <ul>
                        <li>
                          <span className="font-bold text-neutral-700">
                            Meeting Room
                          </span>
                          <span className="font-bold"> Facilities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="self-end mt-2.5 text-base leading-7 text-neutral-500">
                      Access to meeting rooms and conference facilities in
                      various cities, allowing for seamless collaboration and
                      client meetings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="#"
              className="self-start mt-11 ml-5 text-lg leading-8 text-blue-600 max-md:mt-10 max-md:ml-2.5"
            >
              Talk to an expert &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
