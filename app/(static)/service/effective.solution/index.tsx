import React from "react";

export default function EffectiveSolution() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 font-oswald-bold">
        Coppanet&apos;s Solution is Different
        <br />
        and More Effective Than Others
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 font-oswald-bold">
            Technology at the Core
          </h2>
          <p className="text-gray-600">
            We leverage the latest technologies, including AI, machine learning,
            cloud computing, and blockchain, ensuring our solutions are
            innovative and reliable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 font-oswald-bold">
            Efficiency and Performance
          </h2>
          <p className="text-gray-600">
            Efficiency is a key metric for software solutions. We measure
            response time, uptime, and resource utilization to continuously
            improve our solutions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 font-oswald-bold">
            User Experience Focus
          </h2>
          <p className="text-gray-600">
            User experience (UX) is vital for software success. We prioritize
            user-centric design, simplicity, and accessibility, creating
            software that is intuitive and enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  );
}
