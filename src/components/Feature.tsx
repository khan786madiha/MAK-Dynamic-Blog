

// import React from 'react';

// const categories = [
//   "Blockchain",
//   "Virtual Reality",
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
//       <section className="py-12 bg-gradient-to-r from-sky-100 via-white to-sky-50 mb-20">
//         <h2
//           className="text-center text-3xl font-extrabold md:text-5xl lg:text-left animate-fade-in-up transition-transform duration-700 transform hover:scale-105 hover:text-sky-800 text-sky-600"
//         >
//           "Madiha Ali Khan: Unlocking the Marvels of Technology One Blog at a Time"
//         </h2>
//         <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">
//           Dive into the world of innovation with Madiha Ali Khan as we explore cutting-edge technologies, breakthrough ideas, and practical insights to inspire your tech journey.
//         </p>
//       </section>
//       <div className="feature-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          &quot;Madiha Ali Khan: Unlocking the Marvels of Technology One Blog at a Time&quot;
        </h2>
        <p className="text-center m-6 mt-6 text-sm text-gray-700 sm:text-lg md:mb-12 lg:mb-16 animate-fade-in-up delay-200">
          Dive into the world of innovation with Madiha Ali Khan as we explore cutting-edge technologies, breakthrough ideas, and practical insights to inspire your tech journey.
        </p>
      </section>
      <div className="feature-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
