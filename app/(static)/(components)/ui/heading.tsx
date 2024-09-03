import React from "react";
interface HeadingProps {
  children: React.ReactNode;
  subTitle: string;
}
function Heading({ children, subTitle }: HeadingProps) {
  return (
    <div className=" flex lg:py-10 w-full lg:gap-14 items-center">
      <h1 className=" max-w-[400px] font-oswald-bold md:text-[34px] lg:text-[44px] text-primary">
        {children}
      </h1>
      <p className="lg:max-w-[700px] text-gray-500 text-[20px]">{subTitle}</p>
    </div>
  );
}

export default Heading;
