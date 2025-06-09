import { Phone, Calendar } from "lucide-react";
export default function Cta() {
  return (
    <section className="bg-primary text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold font-main">
          Need HVAC Help Today?
        </h2>
        <p className="text-lg max-w-xl mx-auto text-white/90">
          Whether it’s a broken A/C or a new system installation — we’re ready
          to roll. Call us now or book online to get fast, reliable service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+1234567890"
            className="bg-white text-primary px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 flex items-center gap-3 justify-center transition"
          >
            <Phone /> Call Now
          </a>
          <a
            href="#contact"
            className="border border-white flex items-center gap-3 justify-center text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            <Calendar /> Book a Service
          </a>
        </div>
      </div>
    </section>
  );
}
