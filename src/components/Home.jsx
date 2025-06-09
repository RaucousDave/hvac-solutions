import React from "react";
import { Phone, Calendar } from "lucide-react";
const Home = () => {
  return (
    <div>
      <section className="relative h-[100vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/hvac-3.jpg')" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Breathe Easy — Your HVAC Pros Are Here
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Fast, reliable heating & cooling services for homes & businesses in
            Dallas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:214555ACFIX"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-semibold flex justify-center items-center gap-3"
            >
              <Phone /> Call Now
            </a>
            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white transition px-6 py-3 rounded-xl text-lg flex items-center gap-3 justify-center font-semibold"
            >
              <Calendar /> Book a Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
