import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="relative flex">
      <button
        onClick={toggleNavMenu}
        className="relative z-50 w-8 h-5 focus:outline-none"
      >
        <div className="absolute inset-0 flex flex-col justify-between items-center p-0.5">
          <div
            className={`bg-tertiary w-full h-0.5 rounded-lg transition-transform duration-500 transform ${
              isNavOpen ? "rotate-45 translate-y-1.5" : "rotate-0 translate-y-0"
            } origin-center`}
          ></div>
          <div
            className={`bg-tertiary w-full h-0.5 rounded-lg transition-opacity duration-500 ${
              isNavOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`bg-tertiary w-full h-0.5 rounded-lg transition-transform duration-500 transform ${
              isNavOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
            } origin-center`}
          ></div>
        </div>
      </button>
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 bg-primary font-medium shadow-xl transform transition-transform duration-500 ease-in-out z-40 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-8 flex flex-col gap-14 items-center justify-center text-md uppercase h-full text-tertiary">
          <li>
            <Link href="/" onClick={toggleNavMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleNavMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/offerings" onClick={toggleNavMenu}>
              Offerings
            </Link>
          </li>
          <li>
            <Link href="/cuisine" onClick={toggleNavMenu}>
              Cuisine
            </Link>
          </li>
          <li>
            <Link href="#">Bookings</Link>
          </li>
        </ul>
      </nav>
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 transition-opacity duration-300"
          onClick={toggleNavMenu}
        ></div>
      )}
    </div>
  );
}
