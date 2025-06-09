export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah J.",
      content:
        "Carter’s Solutions came out the same day and had our A/C running within an hour. Super friendly and professional!",
    },
    {
      name: "Michael T.",
      content:
        "These guys are life-savers. Honest pricing, excellent service, and they explained everything clearly.",
    },
    {
      name: "Angela K.",
      content:
        "I’ve used them twice now for different properties. They’re always punctual and do top-notch work.",
    },
  ];

  return (
    <section id="testimonials" className="bg-white  py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-main mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Don’t just take our word for it — hear it straight from our clients.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition-all"
            >
              <p className="text-sm md:text-base text-gray-700  italic mb-4">
                “{review.content}”
              </p>
              <div className="text-sm font-semibold text-primary ">
                — {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
