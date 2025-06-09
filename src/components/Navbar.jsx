import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" text-white bg-primary md:px-8 px-4 py-4 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="md:text-2xl text-lg font-main font-medium">
          CARTER'S SOLUTIONS
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-medium font-main">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg font-main font-medium text-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
