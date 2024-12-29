
// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";

// interface BlogCardProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card
//       className={`p-4 ${
//         isDarkBackground ? 'bg-slate-800 text-white' : 'text-slate-800'
//       } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
//     >
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <CardTitle className="text-xl font-normal mt-4 text-center">
//         {post.title}
//       </CardTitle>
//       <CardContent className="text-center">
//         <p>{post.description}</p>
//       </CardContent>
//       <div className="flex flex-col items-center mt-4">
//         <p
//           className={`text-sm mb-2 ${
//             isDarkBackground ? 'text-slate-400' : 'text-slate-600'
//           }`}
//         >
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>
//         <a
//           href={`/posts/${post.id}`}
//           className={`w-full px-6 py-2 text-white rounded ${
//             isDarkBackground
//               ? 'bg-black hover:bg-red-500'
//               : 'bg-blue-600 hover:bg-blue-500'
//           }`}
//         >
//           Read More
//         </a>
//       </div>
//     </Card>
//   );
// }




// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";

// interface BlogCardProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card
//       className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer ${
//         isDarkBackground
//           ? 'bg-sky-800 text-white' // Dark background with white text
//           : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300'
//       }`}
//     >
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <CardTitle className="text-xl font-semibold mt-4 text-center text-white">
//         {post.title}
//       </CardTitle>
//       <CardContent className="text-center text-white">
//         <p className="text-sm sm:text-base">{post.description}</p>
//       </CardContent>
//       <div className="flex flex-col items-center mt-4">
//         <p
//           className={`text-xs sm:text-sm mb-2 ${
//             isDarkBackground ? 'text-slate-300' : 'text-slate-600'
//           }`}
//         >
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>
//         <a
//           href={`/posts/${post.id}`}
//           className={`w-full px-6 py-2 text-white rounded-md text-center ${
//             isDarkBackground
//               ? 'bg-black hover:bg-red-500'
//               : 'bg-sky-600 hover:bg-sky-500'
//           }`}
//         >
//           Read More
//         </a>
//       </div>
//     </Card>
//   );
// }


// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";

// interface BlogCardProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card
//       className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer ${
//         isDarkBackground
//           ? 'bg-sky-800 text-white' // Dark background with white text
//           : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300'
//       }`}
//     >
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <CardTitle className="text-xl font-semibold mt-4 text-center">
//         {post.title}
//       </CardTitle>
//       <CardContent className="text-center">
//         <p className={`text-sm sm:text-base ${isDarkBackground ? 'text-white' : 'text-slate-800'}`}>
//           {post.description}
//         </p>
//       </CardContent>
//       <div className="flex flex-col items-center mt-4">
//         <p
//           className={`text-xs sm:text-sm mb-2 ${
//             isDarkBackground ? 'text-slate-300' : 'text-slate-600'
//           }`}
//         >
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>
//         <a
//           href={`/posts/${post.id}`}
//           className={`w-full px-6 py-2 rounded-md text-center ${
//             isDarkBackground
//               ? 'bg-black hover:bg-red-500 text-white'
//               : 'bg-sky-600 hover:bg-sky-500 text-white'
//           }`}
//         >
//           Read More
//         </a>
//       </div>
//     </Card>
//   );
// // 

// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";
// import Image from 'next/image'; // Import Image from next/image
// import Link from 'next/link'; // Import Link from next/link

// interface BlogCardProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card
//       className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer ${
//         isDarkBackground
//           ? 'bg-sky-800 text-white' // Dark background with white text
//           : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300'
//       }`}
//     >
//       {/* Image Component */}
//       <Image
//         src={`/images/${post.image}`} // Image path assuming images are in the public folder
//         alt={post.title}
//         width={500} // Adjust width
//         height={300} // Adjust height
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
      
//       <CardTitle className="text-xl font-semibold mt-4 text-center">
//         {post.title}
//       </CardTitle>
      
//       <CardContent className="text-center">
//         <p className={`text-sm sm:text-base ${isDarkBackground ? 'text-white' : 'text-slate-800'}`}>
//           {post.description}
//         </p>
//       </CardContent>
      
//       <div className="flex flex-col items-center mt-4">
//         <p
//           className={`text-xs sm:text-sm mb-2 ${isDarkBackground ? 'text-slate-300' : 'text-slate-600'}`}
//         >
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>
        
//         {/* Link Component */}
//         <Link href={`/posts/${post.id}`} passHref>
//           <a
//             className={`w-full px-6 py-2 rounded-md text-center ${
//               isDarkBackground
//                 ? 'bg-black hover:bg-red-500 text-white'
//                 : 'bg-sky-600 hover:bg-sky-500 text-white'
//             }`}
//           >
//             Read More
//           </a>
//         </Link>
//       </div>
//     </Card>
//   );
// }


// import React from 'react';
// import { Card, CardContent, CardTitle } from "../components/ui/card";
// import Image from 'next/image'; // Import Image from next/image
// import Link from 'next/link'; // Import Link from next/link

// interface BlogCardProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
//   isDarkBackground: boolean;
// }

// export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
//   return (
//     <Card
//       className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer ${isDarkBackground
//         ? 'bg-sky-800 text-white' // Dark background with white text
//         : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300'
//       }`}
//     >
//       {/* Image Component */}
//       <Image
//         src={`/images/${post.image}`} // Image path assuming images are in the public folder
//         alt={post.title}
//         width={500} // Adjust width
//         height={300} // Adjust height
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
      
//       <CardTitle className="text-xl font-semibold mt-4 text-center">
//         {post.title}
//       </CardTitle>
      
//       <CardContent className="text-center">
//         <p className={`text-sm sm:text-base ${isDarkBackground ? 'text-white' : 'text-slate-800'}`}>
//           {post.description}
//         </p>
//       </CardContent>
      
//       <div className="flex flex-col items-center mt-4">
//         <p
//           className={`text-xs sm:text-sm mb-2 ${isDarkBackground ? 'text-slate-300' : 'text-slate-600'}`}
//         >
//           Published on: {new Date(post.date).toLocaleDateString()}
//         </p>
        
//         {/* Link Component */}
//         <Link href={`/posts/${post.id}`} >
//           <button
//             className={`w-full px-6 py-2 rounded-md text-center ${isDarkBackground
//               ? 'bg-black hover:bg-red-500 text-white'
//               : 'bg-sky-600 hover:bg-sky-500 text-white'
//             }`}
//           >
//             Read More
//           </button>
//         </Link>
//       </div>
//     </Card>
//   );
// }


import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link'; // Import Link from next/link

interface BlogCardProps {
  post: { id: string; title: string; description: string; date: string; image: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer ${isDarkBackground
        ? 'bg-sky-800 text-white' // Dark background with white text
        : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300'
      }`}
    >
      {/* Image Component */}
      <Image
        src={`/${post.image}`} // Image path assuming images are in the public folder
        alt={post.title}
        width={500} // Adjust width
        height={300} // Adjust height
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <CardTitle className="text-xl font-semibold mt-4 text-center">
        {post.title}
      </CardTitle>
      
      <CardContent className="text-center">
        <p className={`text-sm sm:text-base ${isDarkBackground ? 'text-white' : 'text-slate-800'}`}>
          {post.description}
        </p>
      </CardContent>
      
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-xs sm:text-sm mb-2 ${isDarkBackground ? 'text-slate-300' : 'text-slate-600'}`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        
        {/* Link Component */}
        <Link href={`/posts/${post.id}`} passHref>
          <button
            className={`w-full px-6 py-2 rounded-md text-center ${isDarkBackground
              ? 'bg-black hover:bg-sky-500 text-white'
              : 'bg-sky-600 hover:bg-black text-white'
            }`}
          >
            Read More
          </button>
        </Link>
      </div>
    </Card>
  );
}
