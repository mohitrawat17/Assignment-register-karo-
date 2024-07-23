import React from "react";
import Sale_header from "./_sale_header";
import Enquiry_form from "./enquiry-form";
import Features from "./features";
import Get_virtual_office from "./get_virtual_office";
import Clients from "./clients";
import Faq from "./faq";
import Landing_page_footer from "./landing_page_footer";

export const LandingPage = () => {
  return (
    <div className="flex flex-col bg-white w-full">
      <Sale_header />
      <div className="flex justify-center flex-col  w-full bg-neutral-50 max-md:max-w-full">
        <Enquiry_form />
        <Features />

        <div className="max-md:px-4 mt-32 text-5xl tracking-wide leading-5 text-center capitalize text-slate-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <span className="text-3xl font-medium tracking-wide leading-5 text-slate-800">
            Get Your Virtual Office Up and Running in
          </span>
          <span className="text-3xl font-bold tracking-wide leading-5 text-slate-800">
            {" "}
            3 Easy Steps!
          </span>
        </div>
        <Get_virtual_office />
        <Clients />
        <Faq />
       <Landing_page_footer/>
      </div>
    </div>
  );
};
