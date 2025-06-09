export default function Services() {
  const services = [
    {
      title: "Air Conditioning Repair",
      desc: "Quick, reliable A/C repair to keep your home cool and comfortable year-round.",
      icon: "🧊",
    },
    {
      title: "Heating System Installation",
      desc: "Stay warm with professionally installed and energy-efficient heating solutions.",
      icon: "🔥",
    },
    {
      title: "Ventilation & Duct Cleaning",
      desc: "Improve indoor air quality with expert duct cleaning and airflow optimization.",
      icon: "🌬️",
    },
    {
      title: "Emergency HVAC Services",
      desc: "24/7 support for urgent heating or cooling breakdowns — we’ve got your back.",
      icon: "🚨",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary  font-main">
          Our HVAC Services
        </h2>
        <p className="text-gray-600  mb-12 max-w-xl mx-auto">
          We handle everything from installations to emergency repairs — fast,
          affordable, and always professional.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg p-6 rounded-xl text-left hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary  font-main">
                {service.title}
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
