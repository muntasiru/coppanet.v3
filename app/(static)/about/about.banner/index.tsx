import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative bg-[url('/about/ab-bg.png')] w-full h-[500px] bg-cover">
      <div className=" absolute flex flex-col justify-center  items-center top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm">
        <div className="container max-w-[800px] text-center mx-auto">
          <h1 className=" font-oswald-bold text-[48px] text-gray-100">
            <span className=" text-[18px] tracking-[13px] font-oswald-light">
              Our Company{" "}
            </span>{" "}
            <br />
            <span>Coppanet Ltd</span>
          </h1>
          <h2 className=" font-oswald-bold text-[26px] mt-5 text-gray-100">
            Stand out, brands we craft captivate
          </h2>
          <p className=" text-gray-300 text-[16px] mt-3 font-light">
            Discover Coppanet, a dynamic software company specializing in
            cutting-edge platforms for E-commerce, Travel Agencies, Hospital
            Management, Tuition Centers, SMEs, and the Garment Sector. Elevate
            efficiency and drive growth with Coppanet&lsquo;s innovative
            solutions. Experience the future of software with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
