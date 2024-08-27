import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-8 text-gray-700 bg-white shadow-md">
      <div className="container flex flex-row flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        {/* logo */}
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              FEN JOB<span className="text-[#FF9100]">.</span>
            </span>
          </a>
        </div>

        {/* hamburger menu mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* desktop menu */}
        <div className="hidden md:inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="#"
            className="text-base font-medium leading-6 text-gray-700 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-[#FF9100] border border-transparent rounded-xl shadow-sm hover:bg-[#f9a352] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9100]"
          >
            Sign up
          </a>
        </div>

        {/* mobile menu dropdown */}
        {isOpen && (
          <div className="w-full md:hidden">
            <div className="flex flex-col items-start mt-4 space-y-4 animate-fadeIn">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-2 text-base font-medium leading-6 text-white bg-[#FF9100] border border-transparent rounded-xl shadow-lg hover:bg-[#f9a352] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9100]"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
