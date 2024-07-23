import React from "react";

const Clients = () => {
  return (
    <>
      {/* first row */}

      <div className="flex flex-col mt-40 w-full max-w-[1462px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-1 self-start pr-5 max-md:flex-wrap">
          <div className="text-4xl font-semibold leading-8 text-neutral-700 max-md:max-w-full">
            Trusted by the world’s largest companies
          </div>
          <div className="my-auto text-4xl tracking-tight leading-none text-red-600">
            .
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center px-5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            src="/images/spring.png"
            className="shrink-0 self-stretch max-w-full aspect-[2.04] w-[191px]"
          />
          <img
            src="/images/slack1.png"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[2.44] w-[193px]"
          />
          <img
            src="/images/wework.png"
            className="shrink-0 self-stretch my-auto w-48 max-w-full aspect-[5]"
          />
          <img
            src="/images/oyo.png"
            className="shrink-0 self-stretch my-auto w-48 max-w-full aspect-[3.85]"
          />
          <img
            src="/images/razorpay1.png"
            className="shrink-0 self-stretch my-auto w-48 max-w-full aspect-[4.76]"
          />
          <img
            src="/images/icici.png"
            className="shrink-0 self-stretch my-auto w-48 max-w-full aspect-[4.76]"
          />
        </div>
      </div>

      {/* second row */}

      <div className="flex justify-center items-center self-stretch px-16 py-20 mt-40 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1460px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3 items-center text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/62586083de9755a9c78a57984b3cc7fa03e5ce676f0c213c93068debeabaca61?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.23] w-[61px]"
                />
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b3997fa37ca4d05a1102379f7387a522b7430f80c04f94a95a2d960eeacc5?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.2] w-[61px]"
                />
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c402693c0abb7f9937573580964b984562c6c5aa329c7f32a228ed0b87b884?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.16] w-[61px]"
                />
                <div className="flex overflow-hidden relative flex-col self-stretch pt-20 pr-20 pb-8 pl-6 min-h-[418px] max-md:px-5 max-md:max-w-full">
                  <img
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5939d428bacff6f4a6686c7242a98d9a975b2ece381c81bc813da802152ce028?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f48610fc28edbd2f36fc4b4b7d5d04b499d06277d6230ea5d01d00902eb449?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                    className="self-center mt-28 aspect-square w-[45px] max-md:mt-10"
                  />
                  <div className="flex relative flex-col self-start mt-32 max-md:mt-10">
                    <div className="text-base font-bold leading-6 capitalize">
                      SHRUTI
                    </div>
                    <div className="mt-2.5 text-xs tracking-wide leading-5">
                      CEO{" "}
                    </div>
                  </div>
                </div>
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d06f5be10d3225d434b43d5cf0eac42202f205a9be4e75adb793e49c6104f966?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.16] w-[60px]"
                />
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/616b09973e50854b2529bdf940c0c6e297fd9209c15e5e0701e8ffbc4cd5839c?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.2] w-[61px]"
                />
                <img
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc5ad2e9f88f244f60def5902bbc46a20bdf6bdc543591e0f4ff5f3a6cab24a2?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch my-auto aspect-[0.23] w-[61px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-neutral-700 max-md:mt-10">
                <div className="self-end text-4xl font-semibold leading-8">
                  Client Testimonials
                </div>
                <div className="mt-12 text-lg leading-8 text-right max-md:mt-10">
                  We love hearing feedback from our valued clients. Here's what
                  some of our satisfied customers have to say
                  about our services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third row */}
      <div className="mt-28 max-w-full w-[1291px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex max-md:flex-col">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                  <div className="flex z-10 flex-col grow items-center px-20 pt-4 pb-14 mt-14 w-full text-4xl font-semibold leading-10 text-center text-blue-600 bg-zinc-100 max-md:px-5 max-md:mt-10">
                    <div className="mt-10">
                      <h3>10,000+</h3>
                      <h5 className="w-full text-lg text-neutral-700 ">
                        Clients Served
                      </h5>
                    </div>

                    <div className="mt-10">
                      <h3>200+</h3>
                      <h5 className="w-full text-lg text-neutral-700 ">
                        Locations Across India
                      </h5>
                    </div>

                    <div className="mt-10">
                      <h3>150+</h3>
                      <h5 className="w-full text-lg text-neutral-700 ">
                        Consultants
                      </h5>
                    </div>

                    <div className="mt-10">
                      <h3>500+</h3>
                      <h5 className="w-full text-lg text-neutral-700 ">
                        Partners
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="ml-[-80px] w-[41%] max-md:ml-0 max-md:w-full">
                  <img
                    src="/images/laptop.png"
                    className="shrink-0 max-w-full aspect-[0.8] w-[212px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-neutral-700 max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                Why Opt for Launchwise?
              </div>
              <div className="mt-5 text-base max-md:max-w-full">
                Delegate workspace customization and management to us, allowing
                you to concentrate on your core business activities while we
                ensure your workspace is primed for growth.
              </div>
              <div className="flex gap-5 mt-10 max-md:flex-wrap">
                <div className="shrink-0 my-auto bg-blue-600 h-[69px] w-[5px]" />
                <div className="flex flex-col max-md:max-w-full">
                  <div className="text-3xl font-semibold max-md:max-w-full">
                    Prime Nationwide Options
                  </div>
                  <div className="mt-5 text-base max-md:max-w-full">
                    Explore our diverse and unparalleled portfolio of office
                    spaces, offering the finest options strategically located
                    across the nation
                  </div>
                </div>
              </div>
              <div className="flex gap-3 self-start mt-8 text-2xl leading-6">
                <img
                  src="/images/right-arrow.png"
                  className="shrink-0 my-auto w-3 aspect-square"
                />
                <div>Comprehensive Office Solutions</div>
              </div>
              <div className="flex gap-3 self-start mt-8 text-2xl leading-6">
                <img
                  src="/images/right-arrow.png"
                  className="shrink-0 my-auto w-3 aspect-square"
                />
                <div>Strategically Located Premium Spaces</div>
              </div>
              <div className="flex gap-3 mt-8 text-2xl max-md:flex-wrap">
                <img
                  src="/images/right-arrow.png"
                  className="shrink-0 my-auto w-3 aspect-square"
                />
                <div className="max-md:max-w-full">
                  Cost-Effective Solutions with Modern Amenities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
