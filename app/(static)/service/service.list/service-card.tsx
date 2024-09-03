import React from "react";
interface ServiceCardProps {
  img: string;
  title: string;
  subTitle: string;
  list: string[];
  position: string;
}
function ServiceCard({
  img,
  list,
  subTitle,
  title,
  position,
}: ServiceCardProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">
        <div
          className={`flex flex-col md:flex-row ${
            position == "left" ? "md:flex-row-reverse" : ""
          } items-center bg-white rounded-lg overflow-hidden `}
        >
          <div className="md:w-1/2 ml-auto">
            <img
              src={img}
              alt="E-Commerce Solution"
              className="w-full h-auto max-w-[450px] object-cover rounded-md md:rounded-none"
            />
          </div>

          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-oswald-bold md:text-3xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
            <p className="text-gray-700 mb-4">{subTitle}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {list.map((res) => (
                <li>{res}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
