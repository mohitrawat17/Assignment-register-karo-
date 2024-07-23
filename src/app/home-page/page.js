import React from "react";
import Header from "./_components/header";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import FAQ from "./_components/FAQ";
import Features from "./_components/features";
import Features2 from "./_components/features2";
import Clients from "./_components/Clients";
import Virtual_address from "./_components/virtual_address";
import Workspace from "./_components/Workspace";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full">
          <Header/>
         <Banner/>
        </div>
        <Features/>
       <Workspace/>
       <Features2/>
        <Virtual_address/>
        
       
        <Clients/>
       <FAQ/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
