import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col self-stretch pt-20 mt-36 w-full bg-zinc-900 max-md:mt-10 max-md:max-w-full">
      <div className="self-center px-5 w-full max-w-[1449px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <img
                src="/images/header-logo.png"
                className="max-w-full aspect-[1.39] w-[124px]"
              />
              <div className="flex gap-5 justify-between items-start mt-9">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b82cfa6e1d51deb7bc1cade562246259f14ffee19dbae03149266fc48a680c32?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 w-4 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/390994183b29396fa71fac3815bc0f77e4f7a68b4658324feb3d70204802d651?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 w-4 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4f0dda90f3ace1d90604c5689b5ee5c4662ee3c4fb17935f5413e157e72028b?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 w-4 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3959b5a2ea6b7758ea9843aa53e10bb8f5c4ec8e490696d23e2920c7cb7ad7a?apiKey=31114b18a391459ca3be7e7eecea0d2c&"
                  className="shrink-0 self-stretch aspect-square w-[18px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-stone-300 max-md:mt-10">
                    <div className="font-bold text-white">Services</div>
                    <div className="mt-8">Virtual Office</div>
                    <div className="mt-2.5">GST Registration</div>
                    <div className="mt-2.5">Coworking Spaces</div>
                    <div className="mt-2.5">Business Registration</div>
                    <div className="mt-2.5">Mailing Address</div>
                    <div className="mt-2.5">Dedicated Desk</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base text-stone-300 max-md:mt-10">
                    <div className="font-bold text-white">Other Pages</div>
                    <div className="mt-8">Home</div>
                    <div className="mt-2.5">About Us</div>
                    <div className="mt-2.5">Contact Us</div>
                    <div className="mt-2.5">Blog</div>
                    <div className="mt-2.5">Find Location</div>
                    <div className="mt-2.5">FAQ's</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base text-stone-300 max-md:mt-10">
                    <div className="font-bold text-white">Other Link</div>
                    <div className="mt-8">Privacy Policy</div>
                    <div className="mt-2.5">Disclaimer</div>
                    <div className="mt-2.5">Terms & Conditions</div>
                    <div className="mt-2.5">Cookies</div>
                    <div className="mt-2.5">Refund policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-semibold text-white max-md:max-w-full">
                Join the newsletter
              </div>
              <div className="flex gap-3 mt-3 max-md:flex-wrap max-md:max-w-full">
                <div className="px-4 py-2 bg-zinc-800 rounded-[50px] text-zinc-400 max-md:pr-5">
                  Enter your email
                </div>
                <div className="px-8 py-2 font-bold text-white whitespace-nowrap bg-blue-600 rounded-[50px] max-md:px-5">
                  Subscribe
                </div>
              </div>
              <div className="mt-9 text-lg font-semibold text-stone-300 max-md:max-w-full">
                Feel free to connect with us
              </div>
              <div className="flex gap-5 justify-between mt-5 text-stone-300 max-md:flex-wrap">
                <div className="flex gap-2">
                  <img
                    src="/images/footer-phone.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="tel:+91 93112 21210">+91 93112 21210</a>
                </div>
                <div className="flex gap-2 whitespace-nowrap">
                  <img
                    src="/images/footer-mail.png"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <a href="mailto:virtualoffice@teamco.work">
                    virtualoffice@teamco.work
                  </a>{" "}
                </div>
              </div>
              <div className="flex gap-2 mt-5 text-stone-300 max-md:flex-wrap">
                <img
                  src="/images/foooter-loc.png"
                  className="shrink-0 self-start w-6 aspect-square"
                />
                <div>
                  704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 mt-14 w-full text-base bg-zinc-800 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1462px] max-md:max-w-full">
          <div className="font-bold text-white max-md:max-w-full">
            Virtual Office in Major Cities
          </div>
          <div className="mt-5 max-md:max-w-full">
            Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual Office
            in Bangalore | Virtual Office in Mumbai | Virtual Office in
            Pune | Virtual Office in Kolkata | Virtual Office in
            Chennai | Virtual Office in Noida | Virtual Office in
            Kochi | Virtual Office in Jaipur | Virtual Office in
            Hyderabad | Virtual Office in Chandigarh | Virtual Office in
            Lucknow | Virtual Office in Mohali
          </div>
          <div className="mt-11 font-bold text-white max-md:mt-10 max-md:max-w-full">
            Virtual Office for GST in Major Cities
          </div>
          <div className="mt-5 max-md:max-w-full">
            Virtual Office for GST in Delhi | Virtual Office for GST in
            Gurgaon | Virtual Office for GST in Bangalore | Virtual Office for
            GST in Mumbai | Virtual Office for GST in Pune | Virtual Office for
            GST in Kolkata | Virtual Office for GST in Chennai | Virtual Office
            for GST in Noida | Virtual Office for GST in Kochi | Virtual Office
            for GST in Jaipur | Virtual Office for GST in Hyderabad | Virtual
            Office for GST in Lucknow | Virtual Office for GST in
            Chandigarh | Virtual Office for GST in Mohali
          </div>
          <div className="mt-11 font-bold text-white max-md:mt-10 max-md:max-w-full">
            Virtual Office for Business in Major Cities
          </div>
          <div className="mt-5 max-md:max-w-full">
            Virtual Office for Business in Delhi | Virtual Office for Business
            in Gurgaon | Virtual Office for Business in Bangalore | Virtual
            Office for Business in Mumbai | Virtual Office for Business in
            Pune | Virtual Office for Business in Kolkata | Virtual Office for
            Business in Chennai | Virtual Office for Business in Noida | Virtual
            Office for Business in Kochi | Virtual Office for Business in
            Jaipur | Virtual Office for Business in Hyderabad | Virtual Office
            for Business in Lucknow | Virtual Office for Business in
            Chandigarh | Virtual Office for Business in Mohali
          </div>
          <div className="mt-11 font-bold text-white max-md:mt-10 max-md:max-w-full">
            Virtual Office with Mailing Address in Major Cities
          </div>
          <div className="mt-5 max-md:max-w-full">
            Virtual Office with Mailing Address in Delhi | Virtual Office with
            Mailing Address in Gurgaon | Virtual Office with Mailing Address in
            Bangalore | Virtual Office with Mailing Address in Mumbai | Virtual
            Office with Mailing Address in Pune | Virtual Office with Mailing
            Address in Kolkata | Virtual Office with Mailing Address in
            Chennai | Virtual Office with Mailing Address in Noida | Virtual
            Office with Mailing Address in Kochi | Virtual Office with Mailing
            Address in Jaipur | Virtual Office with Mailing Address in
            Hyderabad | Virtual Office with Mailing Address in Lucknow | Virtual
            Office with Mailing Address in Chandigarh | Virtual Office with
            Mailing Address in Mohali
          </div>
          <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-400 border-neutral-400 max-md:max-w-full" />
          <div className="flex gap-5 justify-center mt-6 max-md:flex-wrap max-md:max-w-full">
            <div>Copyright © 2019, Team Cowork. All Rights Reserved</div>
            <div>Powered by MXN Realspaces Pvt Ltd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
