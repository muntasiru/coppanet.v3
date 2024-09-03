import React from "react";

const CompanyActivities = () => {
  return (
    <div className="bg-cream py-12 w-full bg-yellow-50/70">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-oswald-bold font-semibold text-center text-brown-900 mb-8">
          Our Company Activities
        </h2>
        <div className="flex justify-around">
          {/* Happy Customers */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-brown-900">420+</h3>
            <p className="text-lg text-brown-700 mt-2">Happy Customer</p>
          </div>
          {/* Projects Completed */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-brown-900">50+</h3>
            <p className="text-lg text-brown-700 mt-2">Project Completed</p>
          </div>
          {/* Team Members */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-brown-900">36+</h3>
            <p className="text-lg text-brown-700 mt-2">Team Member</p>
          </div>
          {/* Award Winners */}
          <div className="text-center">
            <h3 className="text-4xl font-bold text-brown-900">5+</h3>
            <p className="text-lg text-brown-700 mt-2">Award Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyActivities;
