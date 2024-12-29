

// import React from "react";

// export default function Feature() {
//   return (
//     <div>
//       <section className="py-12 bg-gradient-to-r from-sky-100 via-white to-sky-50 mb-40">
//         <h2
//           className="text-center text-3xl font-extrabold md:text-5xl lg:text-left animate-fade-in-up transition-transform duration-700 transform hover:scale-105 hover:text-sky-800 text-sky-600"
//         >
//           "Madiha Ali Khan: Unlocking the Marvels of Technology One Blog at a Time"
//           {/* Madiha Ali Khan: Navigating the Secrets of Technology Chronicles Blog! */}
//         </h2>
//         <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">

//           <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">
//             Dive into the world of innovation with Madiha Ali Khan as we explore cutting-edge technologies, breakthrough ideas, and practical insights to inspire your tech journey.
//           </p>
//           {/* 
//           Discover the intersection of innovation and creativity as we unravel the marvels of technology, bringing you insightful articles, tutorials, and stories from the world of tech. */}
//         </p>

//         <div className="mx-auto max-w-7xl px-5">
//           <h3 className="text-2xl font-semibold text-center my-8 text-sky-700 animate-pulse">
//             Explore Our Categories
//           </h3>

//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-300">
//             {[

//               "Space Exploration",
//               "Artificial Intelligence",
//               "Web Development",
//               "Blockchain",
//               "Virtual Reality",
//               "Sustainable Tech",
//               "Cybersecurity",
//               "Programming Languages",
//               "Healthcare Technology",
//               "Education Technology",
//               "Creative Tech",
//               "Future Innovations",

//             ].map((category, index) => (
//               <div
//                 key={index}
//                 className="relative group p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
//               >
//                 <p className="text-center text-lg font-semibold">{category}</p>
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-500 rounded-lg transition-all duration-500 ease-in-out"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <p className="text-sm md:text-lg text-gray-700 mb-6 px-4 animate-fade-in-down delay-300 mt-10">

//           Embark on a journey of discovery and innovation, where technology meets creativity. Stay informed with the latest trends, step-by-step tutorials, and inspiring insights from the ever-evolving world of tech.
//         </p>

      

//     </section>
//     </div >
//   );
// }


// import React from 'react';

// const categories = [
//   "Blockchain",
//   "Virtual Reality",
//   "Sustainable Tech",
//   "Cybersecurity",
//   "Programming Languages",
//   "Healthcare Technology",
//   "Education Technology",
//   "Creative Tech",
//   "Future Innovations",
// ];

// export default function Feature() {
//   return (
//     <div className="feature-container">
//       {categories.map((category, index) => (
//         <div
//           key={index}
//           className="relative group p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
//         >
//           {category}
//           </div>
//       ))}
//     </div>
//   );
// }

// import React from 'react';

// const categories = [
//   "Blockchain",
//   "Virtual Reality",
//   "Sustainable Tech",
//   "Cybersecurity",
//   "Programming Languages",
//   "Healthcare Technology",
//   "Education Technology",
//   "Creative Tech",
//   "Future Innovations",
// ];

// export default function Feature() {
//   return (
//     <div>
//       <section className="py-12 bg-gradient-to-r from-sky-100 via-white to-sky-50 mb-40">
//         <h2
//           className="text-center text-3xl font-extrabold md:text-5xl lg:text-left animate-fade-in-up transition-transform duration-700 transform hover:scale-105 hover:text-sky-800 text-sky-600"
//         >
//           "Madiha Ali Khan: Unlocking the Marvels of Technology One Blog at a Time"
//         </h2>
//         <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">
//           Dive into the world of innovation with Madiha Ali Khan as we explore cutting-edge technologies, breakthrough ideas, and practical insights to inspire your tech journey.
//         </p>
//       </section>
//       <div className="feature-container">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="relative group p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';

const categories = [
  "Blockchain",
  "Virtual Reality",
  "Cybersecurity",
  "Programming Languages",
  "Healthcare Technology",
  "Education Technology",
  "Creative Tech",
  "Future Innovations",
];

export default function Feature() {
  return (
    <div>
      <section className="py-12 bg-gradient-to-r from-sky-100 via-white to-sky-50 mb-20">
        <h2
          className="text-center text-3xl font-extrabold md:text-5xl lg:text-left animate-fade-in-up transition-transform duration-700 transform hover:scale-105 hover:text-sky-800 text-sky-600"
        >
          "Madiha Ali Khan: Unlocking the Marvels of Technology One Blog at a Time"
        </h2>
        <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">
          Dive into the world of innovation with Madiha Ali Khan as we explore cutting-edge technologies, breakthrough ideas, and practical insights to inspire your tech journey.
        </p>
      </section>
      <div className="feature-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}