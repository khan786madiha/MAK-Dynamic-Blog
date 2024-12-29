

// import React from 'react'

// function AuthoreCard() {
//   return (
//     <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
//       <div className='flex items-center space-x-4 animation-fadeIn'>  {/* Added space-x-4 to add horizontal space between image and text */}
//         <img
//           className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
//           src='../mak.jpeg'
//           alt='author image'
//         />
//         <div>
//           <h3 className='text-xl font-bold'>Madiha Khan</h3>
//           <p className='text-slate-500'>
//             Full Stack Web Developer
//           </p>
//           </div>
//         </div>
//         <p className='mt-4 leading-relaxed'>
//           I am a Full Stack Web Developer skilled in JavaScript, TypeScript, React, Next.js, and Node.js, with a passion for building dynamic and responsive web applications.
//         </p>

//         <div className='mt-4 flex space-x-3'>
//           <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>Linked In</a>
//           <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>Github</a>
//           <a href='#' className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>Facebook</a>
//         </div>
//       </div> 

//   )
// }

// export default AuthoreCard


// import React from 'react';

// function AuthorCard() {
//   return (
//     <div className="bg-white shadow-xl rounded-lg p-8 mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-xl">
//       {/* Author Info */}
//       <div className="flex flex-col md:flex-row md:items-center md:space-x-6 animation-fadeIn">
//         <img
//           className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mx-auto md:mx-0"
//           src="../mak.jpeg"
//           alt="author"
//         />
//         <div className="text-center md:text-left mt-4 md:mt-0">
//           <h3 className="text-2xl font-bold text-gray-800">Madiha Khan</h3>
//           <p className="text-indigo-500 font-medium">Full Stack Web Developer</p>
//         </div>
//       </div>

//       {/* About the Author */}
//       <p className="mt-6 text-gray-600 text-justify leading-relaxed">
//         I am a Full Stack Web Developer skilled in JavaScript, TypeScript, React, Next.js, and Node.js. I have a passion for building dynamic, responsive, and user-friendly web applications that create impactful user experiences.
//       </p>

//       {/* Social Links */}
//       <div className="mt-6 flex justify-center md:justify-start space-x-4">
//         <a
//           href="#"
//           className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="#"
//           className="px-4 py-2 text-white bg-gray-800 rounded-lg shadow hover:bg-gray-900 transition duration-300"
//         >
//           GitHub
//         </a>
//         <a
//           href="#"
//           className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
//         >
//           Facebook
//         </a>
//       </div>
//     </div>
//   );
// }

// export default AuthorCard;


// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// function AuthorCard() {
//   return (
//     <div className="bg-white shadow-xl rounded-lg p-8 mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-xl">
//       {/* Author Info */}
//       <div className="flex flex-col md:flex-row md:items-center md:space-x-6 animation-fadeIn">
//         <Image
//           className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mx-auto md:mx-0"
//           src="/mak.jpeg" // Path to the image in the 'public' folder
//           alt="author"
//           width={80} // Adjust width
//           height={80} // Adjust height
//         />
//         <div className="text-center md:text-left mt-4 md:mt-0">
//           <h3 className="text-2xl font-bold text-gray-800">Madiha Khan</h3>
//           <p className="text-indigo-500 font-medium">Full Stack Web Developer</p>
//         </div>
//       </div>

//       {/* About the Author */}
//       <p className="mt-6 text-gray-600 text-justify leading-relaxed">
//         I am a Full Stack Web Developer skilled in JavaScript, TypeScript, React, Next.js, and Node.js. I have a passion for building dynamic, responsive, and user-friendly web applications that create impactful user experiences.
//       </p>

//       {/* Social Links */}
//       <div className="mt-6 flex justify-center md:justify-start space-x-4">
//         <Link href="https://www.linkedin.com" passHref>
//           <a
//             className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </a>
//         </Link>
//         <Link href="https://www.github.com" passHref>
//           <a
//             className="px-4 py-2 text-white bg-gray-800 rounded-lg shadow hover:bg-gray-900 transition duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub
//           </a>
//         </Link>
//         <Link href="https://www.facebook.com" passHref>
//           <a
//             className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Facebook
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default AuthorCard;


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function AuthorCard() {
  return (
    <div className="bg-white shadow-xl rounded-lg p-8 mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-xl">
      {/* Author Info */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 animation-fadeIn">
        <Image
          className="w-20 h-20 rounded-full border-4 border-sky-900 object-cover mx-auto md:mx-0"
          src="/mak.jpeg" // Path to the image in the 'public' folder
          alt="author"
          width={80} // Adjust width
          height={80} // Adjust height
        />
        <div className="text-center md:text-left mt-4 md:mt-0">
          <h3 className="text-2xl font-bold text-gray-800">Madiha Ali Khan</h3>
          <p className="text-sky-700 font-medium">Full Stack Web Developer</p>
        </div>
      </div>

      {/* About the Author */}
      <p className="mt-6 text-gray-600 text-justify leading-relaxed">
        I am a Full Stack Web Developer skilled in JavaScript, TypeScript, React, Next.js, and Node.js. I have a passion for building dynamic, responsive, and user-friendly web applications that create impactful user experiences.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex justify-center md:justify-start space-x-10 ml-12">
        <Link
          href="https://www.linkedin.com/in/madiha-khan-14027a2b7/"
          className="px-4 py-2 text-white bg-sky-500 rounded-lg shadow hover:bg-sky-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.github.com"
          className="px-4 py-2 text-white bg-black rounded-lg shadow hover:bg-sky-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.facebook.com"
          className="px-4 py-2 text-white bg-sky-500 rounded-lg shadow hover:bg-sky-900 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
      </div>
    </div>
  );
}

export default AuthorCard;
