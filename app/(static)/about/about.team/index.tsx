import React from "react";

const teamMembers = [
  { name: "Zane Sorell", title: "CEO", image: "/team/01.png" },
  { name: "Zane Sorell", title: "COO", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
  { name: "Zane Sorell", title: "Title", image: "/team/01.png" },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-14 font-oswald-bold text-center text-brown-900 ">
          Experience and integrity by <br /> our team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-56 h-56 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p
                className={`text-lg mt-2 ${
                  index === 0 ? "text-yellow-500" : "text-orange-500"
                }`}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.slice(2).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-orange-500 mt-2">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
