// import React from 'react'
// import BlogCard from './BlogCard'

// function Mega() {

//   const posts = [
//     {
//       id: "1",
//       title: "HTML Block of Webdevelopment",
//       description: "Explore the HTML, the backbone of every web page.",
//       date: "2024-11-28",
//       image: "nextjs15.png",
//     },
//     {
//       id: "2",
//       title: "Machine Learning Basics",
//       description:
//         "A dynamic and essential subset of AI that focuses on developing algorithms that enable computers to learn from and make predictions.",
//       date: "2024-02-01",
//       image: "blockchain2.jpg",
//     },
//     {
//       id: "3",
//       title: "Deep Learning Explained",
//       description:
//         "Deep learning is a revolutionary subfield of machine learning that employs neural networks to model complex patterns.",
//       date: "2024-02-10",
//       image: "WEB3.jpeg",
//     },
//   ];
  
//   return (
    
//       <div className="my-8">
//       <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-pulse">
//         Exploring the World of AI and Technology
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post, index) => (
//           <div className="fade-in" key={post.id}>
//             <div className="blog-card">
//               <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   )
// }

// export default Mega


// import React from 'react';
// import BlogCard from './BlogCard';

// function Mega() {
//   const posts = 
//   [
//     {
//       "id": "1",
//       "title": "The Rise of Artificial Intelligence in 2025",
//       "description": "Artificial Intelligence (AI) is revolutionizing industries with rapid advancements. In 2025, AI will play a pivotal role in healthcare, finance, and autonomous systems.",
//       "date": "2024-11-28",
//       "image": "ai.png"
//     },
//     {
//       "id": "2",
//       "title": "Machine Learning Basics",
//       "description": "Machine learning is a critical subset of AI. It involves creating algorithms that allow systems to learn from data and make predictions. This blog explores its fundamental concepts and types.",
//       "date": "2024-02-01",
//       "image": "ml_basics.jpg"
//     },
//     {
//       "id": "3",
//       "title": "Blockchain Technology and its Future",
//       "description": "Blockchain is a decentralized technology with the power to transform industries by ensuring transparency and security. It is the backbone of cryptocurrencies and has a vast potential in supply chain and healthcare.",
//       "date": "2025-03-05",
//       "image": "blockchain2.jpg"
//     },
//     {
//       "id": "4",
//       "title": "The Role of 5G in Technology Transformation",
//       "description": "5G technology promises faster internet speeds and lower latency, which will revolutionize fields like autonomous vehicles, telemedicine, and IoT. This blog discusses the wide-reaching implications of 5G in 2025.",
//       "date": "2025-03-20",
//       "image": "5g_technology.jpg"
//     },
//     {
//       "id": "5",
//       "title": "The Impact of Quantum Computing",
//       "description": "Quantum computing is set to solve problems beyond the capabilities of traditional computers. Its applications in cryptography, drug discovery, and optimization will reshape industries in 2025.",
//       "date": "2025-04-10",
//       "image": "quantum_computing.jpg"
//     },
//     {
//       "id": "6",
//       "title": "Augmented Reality (AR) and Virtual Reality (VR)",
//       "description": "AR and VR are transforming entertainment, healthcare, and education. In 2025, these technologies will become more immersive and integrated into daily life, offering virtual experiences in the real world.",
//       "date": "2025-05-05",
//       "image": "ar_vr.jpg"
//     },
//     {
//       "id": "7",
//       "title": "Cloud Computing in 2025",
//       "description": "Cloud computing is revolutionizing the way businesses manage data and resources. In 2025, expect even greater advancements in scalability, security, and cost-effectiveness for businesses of all sizes.",
//       "date": "2025-06-12",
//       "image": "cloud_computing.jpg"
//     },
//     {
//       "id": "8",
//       "title": "The Evolution of Cybersecurity",
//       "description": "Cybersecurity continues to evolve as new technologies emerge. With the rise of AI, machine learning, and quantum computing, cybersecurity in 2025 will focus on smarter threat detection and quantum-resistant encryption.",
//       "date": "2025-07-18",
//       "image": "cybersecurity_evolution.jpg"
//     },
//     {
//       "id": "9",
//       "title": "Robotics and Automation in 2025",
//       "description": "Robotics and automation are streamlining industries, improving efficiency, and reducing human error. In 2025, expect robots to perform more complex tasks in healthcare, manufacturing, and customer service.",
//       "date": "2025-08-08",
//       "image": "robotics_automation.jpg"
//     },
//     {
//       "id": "10",
//       "title": "The Future of Renewable Energy Technologies",
//       "description": "Renewable energy technologies, like solar, wind, and hydroelectric power, are crucial for a sustainable future. In 2025, these technologies will become more efficient and cost-effective, leading to a cleaner planet.",
//       "date": "2025-09-20",
//       "image": "renewable_energy.jpg"
//     }
//   ]
  

//   return (
//     <div className="my-8">
//       <h1 className="text-3xl font-extrabold text-center my-8 text-sky-600 animate-pulse">
//         Exploring the World of AI and Technology
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post, index) => (
//           <div className="fade-in" key={post.id}>
//             <div className="blog-card p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
//               <BlogCard post={post} isDarkBackground={index % 2 === 0} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Mega;

import React from 'react';
import BlogCard from './BlogCard';

function Mega() {
  const posts = [
    
          {
            "id": "1",
            "title": "The Rise of Artificial Intelligence in 2025",
            "description": "Artificial Intelligence (AI) is revolutionizing industries with rapid advancements. In 2025, AI will play a pivotal role in healthcare, finance, and autonomous systems.",
            "date": "2024-11-28",
            "image": "ai.jpg"
          },
          {
            "id": "2",
            "title": "Machine Learning Basics",
            "description": "Machine learning is a critical subset of AI. It involves creating algorithms that allow systems to learn from data and make predictions. This blog explores its fundamental concepts and types.",
            "date": "2024-02-01",
            "image": "Agentic.webp"
          },
          {
            "id": "3",
            "title": "Blockchain Technology and its Future",
            "description": "Blockchain is a decentralized technology with the power to transform industries by ensuring transparency and security. It is the backbone of cryptocurrencies and has a vast potential in supply chain and healthcare.",
            "date": "2025-03-05",
            "image": "block.jpg"
          },
          {
            "id": "4",
            "title": "The Role of 5G in Technology Transformation",
            "description": "5G technology promises faster internet speeds and lower latency, which will revolutionize fields like autonomous vehicles, telemedicine, and IoT. This blog discusses the wide-reaching implications of 5G in 2025.",
            "date": "2025-03-20",
            "image": "5g.jpg"
          },
          {
            "id": "5",
            "title": "The Impact of Quantum Computing",
            "description": "Quantum computing is set to solve problems beyond the capabilities of traditional computers. Its applications in cryptography, drug discovery, and optimization will reshape industries in 2025.",
            "date": "2025-04-10",
            "image": "quantum.jpg"
          },
          {
            "id": "6",
            "title": "Augmented Reality (AR) and Virtual Reality (VR)",
            "description": "AR and VR are transforming entertainment, healthcare, and education. In 2025, these technologies will become more immersive and integrated into daily life, offering virtual experiences in the real world.",
            "date": "2025-05-05",
            "image": "Augmented.jpg"
          },
          {
            "id": "7",
            "title": "Cloud Computing in 2025",
            "description": "Cloud computing is revolutionizing the way businesses manage data and resources. In 2025, expect even greater advancements in scalability, security, and cost-effectiveness for businesses of all sizes.",
            "date": "2025-06-12",
            "image": "cloud.jpg"
          },
          {
            "id": "8",
            "title": "The Evolution of Cybersecurity",
            "description": "Cybersecurity continues to evolve as new technologies emerge. With the rise of AI, machine learning, and quantum computing, cybersecurity in 2025 will focus on smarter threat detection and quantum-resistant encryption.",
            "date": "2025-07-18",
            "image": "cybersecurity_evolution.jpg"
          },
          {
            "id": "9",
            "title": "Robotics and Automation in 2025",
            "description": "Robotics and automation are streamlining industries, improving efficiency, and reducing human error. In 2025, expect robots to perform more complex tasks in healthcare, manufacturing, and customer service.",
            "date": "2025-08-08",
            "image": "robotics_automatio.jpg"
          },
          {
            "id": "10",
            "title": "The Future of Renewable Energy Technologies",
            "description": "Renewable energy technologies, like solar, wind, and hydroelectric power, are crucial for a sustainable future. In 2025, these technologies will become more efficient and cost-effective, leading to a cleaner planet.",
            "date": "2025-09-20",
            "image": "space_exploration.jpg"
          },
        
          {
            "id": "11",
            "title": "The Future of 5G Networks in 2030'",
            "description": "5G technology is set to revolutionize how we connect and communicate. By 2030, we can expect a massive expansion of 5G networks, with applications across various industries such as healthcare, autonomous vehicles, and smart cities..",
            "date": "2025-09-20",
            "image": "11.jpg"
          },
          {
            "id": "12",
            "title": "The Future of Renewable Energy Technologies",
            "description": "Renewable energy technologies, like solar, wind, and hydroelectric power, are crucial for a sustainable future. In 2025, these technologies will become more efficient and cost-effective, leading to a cleaner planet.",
            "date": "2025-09-20",
            "image": "renewable_energy.jpg"
          }
        
  ];


  return (
    <div className="my-8">
      <h1 className="text-3xl font-extrabold text-center my-8 text-sky-600 animate-pulse">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card p-6 bg-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-300 hover:text-black transition-all duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
              <BlogCard post={post} isDarkBackground={parseInt(post.id) % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mega;
