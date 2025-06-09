export default function About() {
  return (
    <section id="about" className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-main">
            About Carter’s Climate Solutions
          </h2>
          <p className="text-white/90 leading-relaxed text-base">
            We're a locally owned HVAC service provider committed to keeping
            your home comfortable all year long. With 10+ years of hands-on
            experience and a passion for quality, our team delivers efficient,
            affordable heating and cooling services you can trust.
          </p>
          <p className="text-white/80 text-sm">
            From AC installation to emergency repairs, Carter’s Climate
            Solutions is the name your neighbors rely on.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            📞 Get in Touch
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/hvac.jpeg"
            alt="HVAC technician at work"
            className="w-full  max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
