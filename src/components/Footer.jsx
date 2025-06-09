export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Branding + About */}
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-2xl font-bold font-main">CARTER’S SOLUTIONS</h2>
          <p className="text-gray-400 text-sm">
            Your trusted HVAC experts — delivering comfort, reliability, and
            24/7 support to homes and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-end space-y-2 font-main">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm [&>li]:cursor-pointer hover:[&>li]:text-white transition">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {year} Carter’s Solutions. All rights reserved.
      </div>
    </footer>
  );
}
