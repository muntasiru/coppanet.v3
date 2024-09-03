import React from "react";

function Values() {
  return (
    <div className="bg-yellow-50/70 py-16 w-full">
      <div className="container max-w-[70%] mx-auto px-4">
        <h2 className="text-3xl font-oswald-bold font-semibold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {/* Innovation */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-700 leading-relaxed">
              At Coppenet, innovation is the cornerstone of our approach. We
              strive to push the boundaries of what's possible, continuously
              exploring new ideas and technologies to deliver cutting-edge
              solutions that drive our clients' success.
            </p>
          </div>
          {/* Agility */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Agility</h3>
            <p className="text-gray-700 leading-relaxed">
              In a rapidly changing world, agility is essential. We pride
              ourselves on our ability to adapt quickly to new challenges and
              opportunities, ensuring that our solutions remain relevant,
              effective, and responsive to our clients' evolving needs.
            </p>
          </div>
          {/* Excellence */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              We pursue excellence in everything we do. From the quality of our
              products to the level of service we provide, we are committed to
              delivering the highest standards, ensuring that our clients
              receive unparalleled value and satisfaction.
            </p>
          </div>
          {/* Simplicity */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Simplicity</h3>
            <p className="text-gray-700 leading-relaxed">
              Simplicity is at the heart of our design philosophy. We aim to
              create solutions that are intuitive and easy to use, making
              complex processes straightforward and accessible, so our clients
              can focus on what matters most—growing their business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
