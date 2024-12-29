

// "use client"
// import { FaArrowRight } from "react-icons/fa";
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// function Navbar() {
//   const [currentDateTime, setCurrentDateTime] = useState<string>('');

//   useEffect(() => {
//     const updateDateTime = () => {
//       const now = new Date();
//       const options: Intl.DateTimeFormatOptions = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false,
//       };
//       setCurrentDateTime(
//         now.toLocaleDateString("en-US", options) + " " + now.toLocaleTimeString("en-US", { hour12: false })
//       );
//     };

//     updateDateTime();
//     const intervalId = setInterval(updateDateTime, 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <header className='text-gray-400 body-font shadow-lg'>
//       <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
//         <div className='flex-1 text-black'>
//           <span>{currentDateTime}</span>
//         </div>

//         <nav className='md:ml-auto flex flex-wrap items-center text-black justify-center'>
//           <Link href={"http://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>
//             HOME
//           </Link>

//           <Link href={"http://localhost:3000/About"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>ABOUT</Link>

//           <Link href={"http://localhost:3000/"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>BLOG</Link>

//           <Link href={"http://localhost:3000/Contact"} className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'>CONTACT</Link>
//         </nav>

//         <button className='inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300'>
//           Github <FaArrowRight />
//         </button>
//       </div>
//     </header>
//   )
// }

// export default Navbar;

"use client"
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) + " " + now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg bg-gradient-to-r from-red-500 to-blue-500">
      <div className="container mx-auto flex flex-wrap p-4 md:p-6 flex-col md:flex-row items-center">
        {/* Date and Time */}
        <div className="flex-1 text-white font-semibold text-sm">
          <span>{currentDateTime}</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none transition-transform transform hover:scale-110"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:ml-auto flex flex-col md:flex-row items-center text-white justify-center mt-4 md:mt-0`}
        >
          {[
            { href: "/", label: "HOME" },
            { href: "http://localhost:3000//About", label: "ABOUT" },
            { href: "http://localhost:3000/", label: "BLOG" },
            { href: "http://localhost:3000/Contact", label: "CONTACT" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mr-5 hover:text-sky-900 transition-transform duration-300 transform hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* GitHub Button */}
        <Link href="https://www.linkedin.com/in/madiha-khan-14027a2b7/" target="_blank">
        <button className="hidden md:inline-flex items-center bg-white border-0 py-1 px-4 focus:outline-none hover:bg-sky-900 hover:text-black rounded-lg text-red-700 font-medium mt-4 md:mt-0 transition-transform duration-300 transform hover:scale-110">
          LinkedIn <FaArrowRight className="ml-2" />
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
