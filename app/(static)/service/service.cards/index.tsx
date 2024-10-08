import { ArrowRightToLineIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Heading from "../../(components)/ui/heading";
const solutions = [
  {
    title: "Coppanet's E-Commerce Solutions",
    image: "/service/ecom.png",
    number: 2,
  },
  {
    title: "Revolution Healthcare Solutions",
    image: "/service/med.png",
    number: 2,
  },
  {
    title: "Transform Fintech Solutions",
    image: "/service/fit.png",
    number: 2,
  },
  {
    title: "Innovative Travel Solutions",
    image: "/service/travel.png",
    number: 2,
  },
  {
    title: "Transforming Education Platform",
    image: "/service/edu.png",
    number: 2,
  },
  {
    title: "Garments Innovative Solutions",
    image: "/service/gmt.png",
    number: 2,
  },
];
export default function ServiceCards() {
  return (
    <div className="container mx-auto p-4">
      <Heading subTitle="At Coppanet, innovation drives everything we do. Our technology products are designed to streamlining operations and enhancing user experiences across sectors.">
        {" "}
        Excellent Custom Software Development Services
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-[1px]  overflow-hidden p-4"
          >
            <div className="relative h-56 overflow-hidden ">
              <Image
                src={solution.image}
                alt={solution.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative">
              <h3 className="text-lg font-semibold mt-3 font-oswald-bold ">
                {solution.title}
              </h3>
              <div className="absolute bottom-0 right-2 bg-orange-400 text-white p-2 rounded-full  flex items-center justify-center ">
                <SquareArrowOutUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
