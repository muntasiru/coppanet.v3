"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

const CompanyActivities = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className=" py-12 w-full lg:h-[300px] bg-fixed relative bg-[url('/about/ab-bg.png')] bg-cover bg-no-repeat "
    >
      <div className="bg-black/70 absolute top-0 left-0 w-full h-full ">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10 justify-center h-full items-center ">
          <h2 className="text-3xl font-oswald-bold font-semibold text-center text-white mb-8">
            Our Company Activities
          </h2>
          <div className="flex justify-between w-full gap-10">
            {/* Happy Customers */}
            <div className="text-center border-[1px] px-5 py-4 rounded-lg backdrop-blur-lg w-full">
              <h3 className="text-4xl font-bold text-white">
                {" "}
                {isInView && <CountUp end={420} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-200 mt-2"> Happy Customers</p>
            </div>
            {/* Projects Completed */}
            <div className="text-center border-[1px] px-5 py-4 rounded-lg backdrop-blur-lg w-full">
              <h3 className="text-4xl font-bold text-white">
                {isInView && <CountUp end={50} duration={2} />}+
              </h3>
              <p className="text-lg text-gray-200 mt-2"> Project Completed</p>
            </div>
            {/* Team Members */}
            <div className="text-center border-[1px] px-5 py-4 rounded-lg backdrop-blur-lg w-full">
              <h3 className="text-4xl font-bold text-white">
                {" "}
                {isInView && <CountUp end={36} duration={2} />}+
              </h3>

              <p className="text-lg text-gray-200 mt-2">Team Members</p>
            </div>
            {/* Award Winners */}
            <div className="text-center border-[1px] px-5 py-4 rounded-lg backdrop-blur-lg w-full">
              <h3 className="text-4xl font-bold text-white">
                {" "}
                {isInView && <CountUp end={5} duration={2} />}+
              </h3>

              <p className="text-lg text-gray-200 mt-2">Award Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyActivities;
