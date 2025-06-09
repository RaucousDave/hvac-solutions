import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse md:h-screen md:flex-row items-center justify-between px-6 py-16 gap-8 ">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold text-primary">
            Breathe Easy <br /> Your HVAC Pros Are Here
          </h1>
          <p className="text-lg font-medium opacity-80 text-primary">
            Reliable HVAC services in Dallas. Fast, affordable, and done right.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:gap-3">
            <a
              href="tel:214555ACFIX"
              className="bg-primary text-white px-6 py-3 rounded-xl text-lg"
            >
              <Phone /> Call Now
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary  px-6 py-3 rounded-xl  text-lg"
            >
              <Calendar /> Book a Service
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-16 flex justify-center">
          <img
            src="/images/hvac-3.jpg"
            alt="HVAC technician"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
