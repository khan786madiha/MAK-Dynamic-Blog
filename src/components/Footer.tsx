

// import React from 'react';
// import Link from 'next/link';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// export const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
//           {/* Navigation Links */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NAVBAR LINKS</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
//               </li>
//             </nav>
//           </div>

//           {/* Categories Section */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Categories</h2>
//             <nav className="list-none mb-10">
//               <li>
//                 <Link href="/category/technology" className="text-gray-600 hover:text-gray-800">Technology</Link>
//               </li>
//               <li>
//                 <Link href="/category/lifestyle" className="text-gray-600 hover:text-gray-800">Lifestyle</Link>
//               </li>
//               <li>
//                 <Link href="/category/health" className="text-gray-600 hover:text-gray-800">Health</Link>
//               </li>
//               <li>
//                 <Link href="/category/travel" className="text-gray-600 hover:text-gray-800">Travel</Link>
//               </li>
//             </nav>
//           </div>

//           {/* Subscribe Section */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Subscribe</h2>
//             <div className="flex flex-wrap items-center">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:bg-transparent text-base outline-none text-gray-700 py-2 px-3 mb-2"
//               />
//               <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Follow Us</h2>
//             <div className="flex space-x-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
//                 <FaFacebookF className="w-6 h-6" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
//                 <FaTwitter className="w-6 h-6" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
//                 <FaInstagram className="w-6 h-6" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-500">
//                 <FaLinkedinIn className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="bg-gray-200">
//         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//           <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 MAK Dynamic Blog —
//             <a href="https://yourwebsite.com" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@yourwebsite</a>
//           </p>
//           <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full text-center text-gray-500 text-sm">All Rights Reserved</span>
//         </div>
//       </div>
//     </footer>
//   );
// };


import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center md:text-left -mb-10 -mx-4">
          {/* Navigation Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-sky-700 animate-pulse tracking-widest text-lg mb-3"> 
              NAVBAR LINKS
            </h2>
            <nav className="list-none">
              <li className="mb-2">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300 transform hover:scale-105"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300 transform hover:scale-105"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300 transform hover:scale-105"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300 transform hover:scale-105"
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-sky-700 animate-pulse tracking-widest text-lg mb-3">
              Categories
            </h2>
            <nav className="list-none">
              <li className="mb-2">
                <Link
                  href="/category/technology"
                  className="text-gray-600 hover:text-[#ff7f50] transition-colors duration-300 transform hover:scale-105"
                >
                  Technology
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/category/lifestyle"
                  className="text-gray-600 hover:text-[#ff7f50] transition-colors duration-300 transform hover:scale-105"
                >
                  Lifestyle
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/category/health"
                  className="text-gray-600 hover:text-[#ff7f50] transition-colors duration-300 transform hover:scale-105"
                >
                  Health
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/category/travel"
                  className="text-gray-600 hover:text-[#ff7f50] transition-colors duration-300 transform hover:scale-105"
                >
                  Travel
                </Link>
              </li>
            </nav>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-sky-700 animate-pulse tracking-widest text-lg mb-3">
              Subscribe
            </h2>
            <div className="flex flex-col items-center md:items-start">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-[#ff7f50] focus:bg-transparent text-base outline-none text-gray-700 py-2 px-3 mb-3"
              />
              <button className="w-full bg-sky-500 text-white py-2 px-6 rounded hover:bg-sky-900 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6">
            <h2 className="title-font font-medium text-sky-600 animate-pulse tracking-widest text-lg mb-3">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-900 transition-transform duration-300 transform hover:scale-125"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-900 transition-transform duration-300 transform hover:scale-125"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-900 transition-transform duration-300 transform hover:scale-125"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/madiha-khan-14027a2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-900 transition-transform duration-300 transform hover:scale-125"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 MAK Dynamic Blog —{' '}
            <a
              href="https://yourwebsite.com"
              className="text-sky-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @yourwebsite
            </a>
          </p>
          <span className="text-gray-500 text-sm text-center">
            All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
