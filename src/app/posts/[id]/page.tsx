// 'use client';
// import React from 'react'
// import CommentSection from '@/components/CommentSection';
// import AuthoreCard from '@/components/AuthoreCard';
// const posts = 
// [
//   {
//     id: '1',
//     title: 'The Rise of Artificial Intelligence in 2025',
//     description: `Artificial Intelligence (AI) is revolutionizing industries with rapid advancements. In 2025, AI will play a pivotal role in healthcare, finance, and autonomous systems.\n\n
//     AI Advancements in 2025:\n
//     - AI algorithms are becoming more sophisticated, enabling machines to learn faster and with greater accuracy.\n
//     - AI is expected to improve in natural language processing, making human-computer interaction smoother.\n\n
//     Key Areas of AI Impact:\n
//     - Healthcare: AI will play a pivotal role in diagnosing diseases early, personalizing treatment, and drug discovery.\n
//     - Finance: With AI, predictive analytics will enhance investment strategies, fraud detection, and risk management.\n
//     - Autonomous Systems: From self-driving cars to drones, AI will be central to the development of autonomous systems.`,
//     date: '2024-11-28',
//     image: 'ai.png',
//   },
//   {
//     id: "2",
//     title: "Machine Learning Basics",
//     description: `Machine learning is a critical subset of AI. It involves creating algorithms that allow systems to learn from data and make predictions. This blog explores its fundamental concepts and types.

//   Published on: February 1, 2024

//   Machine Learning (ML) is a subset of AI focused on building systems that can learn and improve from experience. Let's break down the basics of machine learning.

//   Types of Machine Learning:
//   - Supervised Learning: Uses labeled data to teach the model.
//   - Unsupervised Learning: The model identifies patterns in data without labels.
//   - Reinforcement Learning: The model learns by trial and error, receiving rewards or penalties.

//   Applications of ML:
//   - Healthcare diagnostics
//   - Personalized recommendations in retail
//   - Financial fraud detection.`,
//     date: "2024-02-01",
//     image: "ml_basics.jpg",
//   },
//   {
//     id: "3",
//     title: "Blockchain Technology and its Future",
//     description: `Blockchain is a decentralized technology with the power to transform industries by ensuring transparency and security. It is the backbone of cryptocurrencies and has a vast potential in supply chain and healthcare.

//   Published on: March 5, 2025

//   Blockchain is a revolutionary technology that’s changing how we think about security, transactions, and data sharing.

//   What is Blockchain?
//   Blockchain is a decentralized ledger technology that ensures transparency, security, and immutability of data.

//   Applications of Blockchain:
//   - Cryptocurrency: Bitcoin and Ethereum are based on blockchain technology.
//   - Supply Chain: Blockchain ensures secure and transparent tracking of products from production to delivery.
//   - Healthcare: Blockchain can store patient records securely and enable fast data sharing.`,
//     date: "2025-03-05",
//     image: "blockchain2.jpg",
//   },
//   {
//     id: "4",
//     title: "The Role of 5G in Technology Transformation",
//     description: `5G technology promises faster internet speeds and lower latency, which will revolutionize fields like autonomous vehicles, telemedicine, and IoT. This blog discusses the wide-reaching implications of 5G in 2025.

//   Published on: March 20, 2025

//   5G technology promises faster speeds and lower latency, making it a key player in transforming multiple industries in 2025.

//   How 5G is Changing the Game:
//   - With speeds 100x faster than 4G, 5G will enable faster and more reliable internet.
//   - 5G supports the Internet of Things (IoT), making smart cities, homes, and industries a reality.

//   Key Areas Affected by 5G:
//   - Autonomous Vehicles: Real-time data transmission for self-driving cars.
//   - Healthcare: Telemedicine and remote surgeries will become more accessible.
//   - Entertainment: Ultra-high-definition streaming and gaming with no latency.`,
//     date: "2025-03-20",
//     image: "5g_technology.jpg",
//   },
//   {
//     id: "5",
//     title: "The Impact of Quantum Computing",
//     description: `Quantum computing is set to solve problems beyond the capabilities of traditional computers. Its applications in cryptography, drug discovery, and optimization will reshape industries in 2025.

//   Published on: April 10, 2025

//   Quantum computing is a futuristic technology that could solve complex problems in seconds. It’s a game-changer for industries like cryptography and drug discovery.

//   What is Quantum Computing?
//   Quantum computing uses quantum bits (qubits) to perform calculations that traditional computers can't handle.

//   Applications of Quantum Computing:
//   - Cryptography: Quantum computers can potentially break traditional encryption methods.
//   - Drug Discovery: Helps simulate molecules and design better drugs faster.
//   - Optimization: Quantum computers can solve complex optimization problems in logistics and finance.`,
//     date: "2025-04-10",
//     image: "quantum_computing.jpg",
//   },
//   {
//     id: "6",
//     title: "Augmented Reality (AR) and Virtual Reality (VR)",
//     description: `AR and VR are transforming entertainment, healthcare, and education. In 2025, these technologies will become more immersive and integrated into daily life, offering virtual experiences in the real world.

//   Published on: May 5, 2025

//   AR and VR are revolutionizing entertainment, healthcare, and education by offering immersive experiences. Let’s explore how these technologies are shaping our future.

//   Differences Between AR and VR:
//   - AR enhances the real world with digital overlays.
//   - VR immerses users in a completely virtual environment.

//   Key Applications:
//   - Healthcare: VR is used for medical training and therapy; AR assists surgeons in real-time.
//   - Gaming and Entertainment: Immersive experiences with VR headsets.
//   - Retail: AR is used for virtual try-ons and immersive shopping experiences.`,
//     date: "2025-05-05",
//     image: "ar_vr.jpg",
//   },
//   {
//     id: "7",
//     title: "Cloud Computing in 2025",
//     description: `Cloud computing is revolutionizing the way businesses manage data and resources. In 2025, expect even greater advancements in scalability, security, and cost-effectiveness for businesses of all sizes.

//   Published on: June 12, 2025

//   Cloud computing has transformed the way businesses store and process data. In 2025, it will continue to evolve and drive digital transformation.

//   What is Cloud Computing?
//   Cloud computing allows businesses and individuals to access computing resources like storage and processing power over the internet.

//   Benefits of Cloud Computing:
//   - Scalability: Businesses can scale their infrastructure easily as needed.
//   - Cost Efficiency: Reduces the need for physical infrastructure and maintenance costs.
//   - Collaboration: Cloud enables teams to work collaboratively, accessing documents and applications from anywhere.`,
//     date: "2025-06-12",
//     image: "cloud_computing.jpg",
//   },
//   {
//     id: "8",
//     title: "The Evolution of Cybersecurity",
//     description: `Cybersecurity continues to evolve as new technologies emerge. With the rise of AI, machine learning, and quantum computing, cybersecurity in 2025 will focus on smarter threat detection and quantum-resistant encryption.

//   Published on: July 18, 2025

//   As technology evolves, so do cyber threats. In 2025, cybersecurity will be more important than ever, requiring advanced solutions to safeguard data.

//   Challenges in Cybersecurity:
//   - Ransomware: Attacks where hackers demand money in exchange for unlocking files.
//   - Phishing: Fraudulent attempts to obtain sensitive information by pretending to be trustworthy entities.

//   Emerging Cybersecurity Technologies:
//   - AI and Machine Learning: AI is used to predict and identify potential threats.
//   - Zero Trust Security: Only authorized users can access critical data, even within the network.
//   - Quantum-Resistant Encryption: Encryption methods that are secure against quantum computer attacks.`,
//     date: "2025-07-18",
//     image: "cybersecurity_evolution.jpg",
//   },
//   {
//     id: "9",
//     title: "Robotics and Automation in 2025",
//     description: `Robotics and automation are streamlining industries, improving efficiency, and reducing human error. In 2025, expect robots to perform more complex tasks in healthcare, manufacturing, and customer service.

//   Published on: August 8, 2025

//   Robotics and automation are transforming industries by improving productivity and reducing human error. In 2025, expect robots to play an even larger role.

//   How Robots are Changing Industries:
//   - Manufacturing: Robots are streamlining production lines and improving efficiency.
//   - Healthcare: Robots assist in surgeries and care for the elderly.

//   Future of Robotics:
//   - Robots will be able to perform more complex tasks, like advanced surgery.
//   - Automation will continue to replace manual tasks in fields like logistics and customer service.`,
//     date: "2025-08-08",
//     image: "robotics_automation.jpg",
//   },

//   {
//     id: '10',
//     title: 'The Future of Space Exploration in 2030',
//     description: `Space exploration is entering a new era with ambitious plans for Mars colonization and deep space missions. By 2030, private companies and space agencies aim to achieve remarkable milestones.\n\n
//     Major Objectives of Space Exploration:\n
//     - Human missions to Mars to establish a sustainable presence on the Red Planet.\n
//     - Development of space habitats and advanced life support systems.\n\n
//     Challenges in Space Exploration:\n
//     - High costs and technological limitations of interplanetary travel.\n
//     - Addressing the health and safety concerns of astronauts in prolonged space missions.\n\n
//     Opportunities Ahead:\n
//     - Advancements in rocket technology and propulsion systems.\n
//     - Increased collaboration between nations and private entities in space exploration initiatives.`,
//     date: '2024-12-05',
//     image: 'space.png',
//   },
// ];

// export default function Post({ params }: { params: { id: string } }) {
//  const{id} = params ;
//  const post = posts.find((p) => p.id === id);
//  if(!post) {
//   return(
//     <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
//   )
//  }
//  const renderParagraphs = (description: string) => {
//   return description.split("/n").map((para,index) => (
//     <p key={index} className='mt-4 text-justify'>
//       {para.trim()}
//     </p>
//   ));
// };

// return(
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
//         {post.title}
//       </h1>
//       {post.image && (
//         <img
//           src={`/${post.image}`}
//           alt={post.title}
//           className="w-full h-auto rounded-md mt-4"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard/>
//     </div>
//   );
// }




import React from 'react'
import CommentSection from '@/components/CommentSection';

import Image from 'next/image'; // Importing the Image component
import AuthorCard from '@/components/AuthoreCard';
const posts = [
  {
    id: '1',
    title: 'The Rise of Artificial Intelligence in 2025',
    description: `Artificial Intelligence (AI) is revolutionizing industries with rapid advancements. In 2025, AI will play a pivotal role in healthcare, finance, and autonomous systems.\n\n
    AI Advancements in 2025:\n
    - AI algorithms are becoming more sophisticated, enabling machines to learn faster and with greater accuracy.\n
    - AI is expected to improve in natural language processing, making human-computer interaction smoother.\n\n
    Key Areas of AI Impact:\n
    - Healthcare: AI will play a pivotal role in diagnosing diseases early, personalizing treatment, and drug discovery.\n
    - Finance: With AI, predictive analytics will enhance investment strategies, fraud detection, and risk management.\n
    - Autonomous Systems: From self-driving cars to drones, AI will be central to the development of autonomous systems.`,
    date: '2024-11-28',
    image: 'ai.jpg',
  },
  {
    id: "2",
    title: "Machine Learning Basics",
    description: `Machine learning is a critical subset of AI. It involves creating algorithms that allow systems to learn from data and make predictions. This blog explores its fundamental concepts and types.
  
  Published on: February 1, 2024
  
  Machine Learning (ML) is a subset of AI focused on building systems that can learn and improve from experience. Let's break down the basics of machine learning.
  
  Types of Machine Learning:
  - Supervised Learning: Uses labeled data to teach the model.
  - Unsupervised Learning: The model identifies patterns in data without labels.
  - Reinforcement Learning: The model learns by trial and error, receiving rewards or penalties.
  
  Applications of ML:
  - Healthcare diagnostics
  - Personalized recommendations in retail
  - Financial fraud detection.`,
    date: "2024-02-01",
    image: "Agentic.webp",
  },
  {
    id: "3",
    title: "Blockchain Technology and its Future",
    description: `Blockchain is a decentralized technology with the power to transform industries by ensuring transparency and security. It is the backbone of cryptocurrencies and has a vast potential in supply chain and healthcare.
  
  Published on: March 5, 2025
  
  Blockchain is a revolutionary technology thats changing how we think about security, transactions, and data sharing.
  
  What is Blockchain?
  Blockchain is a decentralized ledger technology that ensures transparency, security, and immutability of data.
  
  Applications of Blockchain:
  - Cryptocurrency: Bitcoin and Ethereum are based on blockchain technology.
  - Supply Chain: Blockchain ensures secure and transparent tracking of products from production to delivery.
  - Healthcare: Blockchain can store patient records securely and enable fast data sharing.`,
    date: "2025-03-05",
    image: "block.jpg",
  },
  {
    id: "4",
    title: "The Role of 5G in Technology Transformation",
    description: `5G technology promises faster internet speeds and lower latency, which will revolutionize fields like autonomous vehicles, telemedicine, and IoT. This blog discusses the wide-reaching implications of 5G in 2025.
  
  Published on: March 20, 2025
  
  5G technology promises faster speeds and lower latency, making it a key player in transforming multiple industries in 2025.
  
  How 5G is Changing the Game:
  - With speeds 100x faster than 4G, 5G will enable faster and more reliable internet.
  - 5G supports the Internet of Things (IoT), making smart cities, homes, and industries a reality.
  
  Key Areas Affected by 5G:
  - Autonomous Vehicles: Real-time data transmission for self-driving cars.
  - Healthcare: Telemedicine and remote surgeries will become more accessible.
  - Entertainment: Ultra-high-definition streaming and gaming with no latency.`,
    date: "2025-03-20",
    image: "5g.jpg",
  },
  {
    id: "5",
    title: "The Impact of Quantum Computing",
    description: `Quantum computing is set to solve problems beyond the capabilities of traditional computers. Its applications in cryptography, drug discovery, and optimization will reshape industries in 2025.
  
  Published on: April 10, 2025
  
  Quantum computing is a futuristic technology that could solve complex problems in seconds. It’s a game-changer for industries like cryptography and drug discovery.
  
  What is Quantum Computing?
  Quantum computing uses quantum bits (qubits) to perform calculations that traditional computers can't handle.
  
  Applications of Quantum Computing:
  - Cryptography: Quantum computers can potentially break traditional encryption methods.
  - Drug Discovery: Helps simulate molecules and design better drugs faster.
  - Optimization: Quantum computers can solve complex optimization problems in logistics and finance.`,
    date: "2025-04-10",
    image: "quantum.jpg",
  },
  {
    id: "6",
    title: "Augmented Reality (AR) and Virtual Reality (VR)",
    description: `AR and VR are transforming entertainment, healthcare, and education. In 2025, these technologies will become more immersive and integrated into daily life, offering virtual experiences in the real world.
  
  Published on: May 5, 2025
  
  AR and VR are revolutionizing entertainment, healthcare, and education by offering immersive experiences. Let’s explore how these technologies are shaping our future.
  
  Differences Between AR and VR:
  - AR enhances the real world with digital overlays.
  - VR immerses users in a completely virtual environment.
  
  Key Applications:
  - Healthcare: VR is used for medical training and therapy; AR assists surgeons in real-time.
  - Gaming and Entertainment: Immersive experiences with VR headsets.
  - Retail: AR is used for virtual try-ons and immersive shopping experiences.`,
    date: "2025-05-05",
    image: "Augmented.jpg",
  },
  {
    id: "7",
    title: "Cloud Computing in 2025",
    description: `Cloud computing is revolutionizing the way businesses manage data and resources. In 2025, expect even greater advancements in scalability, security, and cost-effectiveness for businesses of all sizes.
  
  Published on: June 12, 2025
  
  Cloud computing has transformed the way businesses store and process data. In 2025, it will continue to evolve and drive digital transformation.
  
  What is Cloud Computing?
  Cloud computing allows businesses and individuals to access computing resources like storage and processing power over the internet.
  
  Benefits of Cloud Computing:
  - Scalability: Businesses can scale their infrastructure easily as needed.
  - Cost Efficiency: Reduces the need for physical infrastructure and maintenance costs.
  - Collaboration: Cloud enables teams to work collaboratively, accessing documents and applications from anywhere.`,
    date: "2025-06-12",
    image: "cloud.jpg",
  },
  {
    id: "8",
    title: "The Evolution of Cybersecurity",
    description: `Cybersecurity continues to evolve as new technologies emerge. With the rise of AI, machine learning, and quantum computing, cybersecurity in 2025 will focus on smarter threat detection and quantum-resistant encryption.
  
  Published on: July 18, 2025
  
  As technology evolves, so do cyber threats. In 2025, cybersecurity will be more important than ever, requiring advanced solutions to safeguard data.
  
//   Challenges in Cybersecurity:
//   - Ransomware: Attacks where hackers demand money in exchange for unlocking files.
//   - Phishing: Fraudulent attempts to obtain sensitive information by pretending to be trustworthy entities.
  
//   Emerging Cybersecurity Technologies:
//   - AI and Machine Learning: AI is used to predict and identify potential threats.
//   - Zero Trust Security: Only authorized users can access critical data, even within the network.
//   - Quantum-Resistant Encryption: Encryption methods that are secure against quantum computer attacks.`,
    date: "2025-07-18",
    image: "cybersecurity_evolution.jpg",
  },
  {
    id: "9",
    title: "Robotics and Automation in 2025",
    description: `Robotics and automation are streamlining industries, improving efficiency, and reducing human error. In 2025, expect robots to perform more complex tasks in healthcare, manufacturing, and customer service.
  
  Published on: August 8, 2025
  
  Robotics and automation are transforming industries by improving productivity and reducing human error. In 2025, expect robots to play an even larger role.
  
  How Robots are Changing Industries:
  - Manufacturing: Robots are streamlining production lines and improving efficiency.
  - Healthcare: Robots assist in surgeries and care for the elderly.
  
  Future of Robotics:
  - Robots will be able to perform more complex tasks, like advanced surgery.
  - Automation will continue to replace manual tasks in fields like logistics and customer service.`,
    date: "2025-08-08",
    image: "robotics_automation.jpg",
  },

  {
    id: '10',
    title: 'The Future of Space Exploration in 2030',
    description: `Space exploration is entering a new era with ambitious plans for Mars missions and private sector involvement. By 2030, human presence on the Moon and Mars may become a reality.
  
  Published on: December 15, 2025
  
  Space exploration is poised for groundbreaking advancements by 2030. NASA, private companies, and international collaborations are accelerating their efforts to explore the Moon, Mars, and beyond.
  
  Whats Next for Space Exploration?
  - Mars Missions: NASA and private companies like SpaceX are working toward sending humans to Mars.
  - Lunar Bases: Establishing a permanent human presence on the Moon is a key step toward deeper space exploration.
  
  Key Technologies in Space Exploration:
  - Reusable Rockets: SpaceX and other companies are developing reusable rocket technology, reducing the cost of space travel.
  - AI and Robotics: AI and robots will play a critical role in supporting astronauts and performing tasks on other planets.`,
    date: "2025-12-15",
    image: 'space_exploration.jpg',
  },
  {
    id: '11',
    title: 'The Future of 5G Networks in 2030',
    description: `5G technology is set to revolutionize how we connect and communicate. By 2030, we can expect a massive expansion of 5G networks, with applications across various industries such as healthcare, autonomous vehicles, and smart cities.
  
    Published on: January 20, 2026
  
    5G promises to deliver ultra-fast internet speeds, lower latency, and greater connectivity. By 2030, 5G will become the backbone of new technologies that rely on high-speed, low-latency connections.
  
    What is Next for 5G?
    - Autonomous Vehicles: 5G will provide the low-latency communication required for real-time decision-making in autonomous vehicles.
    - Smart Cities: 5G will enable a wide range of smart city technologies, including smart grids, traffic management, and surveillance.
  
    Key Benefits of 5G Technology:
    - Faster Speeds: 5G will deliver download speeds up to 100 times faster than 4G.
    - Enhanced Connectivity: It will support more connected devices simultaneously, driving the Internet of Things (IoT) growth.`,
    date: "2026-01-20",
    image: '5g_technology.jpg',
  },
  {
    id: '12',
    title: 'The Rise of Edge Computing in 2030',
    description: `Edge computing is transforming how data is processed by bringing computing power closer to the source of data generation. By 2030, we will see widespread adoption of edge computing in industries such as healthcare, retail, and manufacturing.
  
    Published on: February 10, 2026
  
    Edge computing allows for real-time data processing and decision-making at the edge of the network, reducing latency and bandwidth usage. This is crucial for applications that require instant processing, such as autonomous systems and smart devices.
  
    What is Next for Edge Computing?
    - Autonomous Systems: Edge computing will be essential for processing data locally in autonomous vehicles, drones, and robots.
    - Industrial Automation: Edge computing will enable real-time monitoring and control in manufacturing and supply chains.
  
    Key Benefits of Edge Computing:
    - Reduced Latency: By processing data closer to the source, edge computing minimizes delays in response time.
    - Cost Savings: Edge computing reduces the need for expensive data transmission by processing data locally, saving bandwidth and cloud storage costs.`,
    date: "2026-02-10",
    image: 'edge_computing.jpg',
  }
]
// interface PostProps {
//   params: {
//     id: string;
//   };
// }

// export default function Post({ params }: PostProps) {
//   const post = posts.find((p) => p.id === params.id);

//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
//     );
//   }

// export default function Post({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
//     )
//   }
  // const renderParagraphs = (description: string) => {
  //   return description.split("/n").map((para, index) => (
  //     <p key={index} className='mt-4 text-justify'>
  //       {para.trim()}
  //     </p>
  //   ));
  // };

  // return (
  //   <div className="max-w-3xl mx-auto p-5">
  //     <h1 className="md:text-4xl text-3xl font-bold  text-sky-600 animate-pulse text-center">
  //       {post.title}
  //     </h1>
  //     {post.image && (

  //       <Image
  //         src={`/${post.image}`}
  //         alt={post.title}
  //         width={800}
  //         height={400}
  //         className="w-full h-auto rounded-md mt-4"
  //       />
        // <img
        //   src={`/${post.image}`}
        //   alt={post.title}
        //   className="w-full h-auto rounded-md mt-4"
        // />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard />
//     </div>
//   );
// }



// interface PostPageProps {
//   post: { id: string; title: string; description: string; date: string; image: string };
// }


// export default function Post({ params }: PostPageProps) {
//   const { id } = params;

//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split("\n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-sky-600 animate-pulse text-center">
//         {post.title}
//       </h1>
//       {post.image && (
//         <Image
//           src={`/${post.image}`}
//           alt={post.title}
//           width={800}
//           height={400}
//           className="w-full h-auto rounded-md mt-4"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard />
//     </div>
//   );
// }

interface PostProps {
  params: Promise<{ id: string }>;
}

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
        </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-sky-600 animate-pulse text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={`/${post.image}`}
          alt={post.title}
          width={800} // Adjust width as needed
          height={600} // Adjust height as needed
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
      
    );
  }
// import React from 'react';
// import CommentSection from '@/components/CommentSection';
// import AuthoreCard from '@/components/AuthoreCard';
// import Image from 'next/image'; // Importing the Image component
// import { Metadata } from 'next';
// const posts = [
//   {
//     id: '12',
//     title: 'The Rise of Edge Computing in 2030',
//     description: `Edge computing is transforming how data is processed by bringing computing power closer to the source of data generation. By 2030, we will see widespread adoption of edge computing in industries such as healthcare, retail, and manufacturing.
  
//     Published on: February 10, 2026
  
//     Edge computing allows for real-time data processing and decision-making at the edge of the network, reducing latency and bandwidth usage. This is crucial for applications that require instant processing, such as autonomous systems and smart devices.
  
//     What is Next for Edge Computing?
//     - Autonomous Systems: Edge computing will be essential for processing data locally in autonomous vehicles, drones, and robots.
//     - Industrial Automation: Edge computing will enable real-time monitoring and control in manufacturing and supply chains.
  
//     Key Benefits of Edge Computing:
//     - Reduced Latency: By processing data closer to the source, edge computing minimizes delays in response time.
//     - Cost Savings: Edge computing reduces the need for expensive data transmission by processing data locally, saving bandwidth and cloud storage costs.`,
//     date: "2026-02-10",
//     image: 'edge_computing.jpg',
//   },
//   // Add other posts if needed
// ];

// export default async function Post({ params }: { params: { id: string } }) {
//   const post = posts.find((p) => p.id === params.id);

//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split("\n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <h1 className="md:text-4xl text-3xl font-bold text-sky-600 animate-pulse text-center">
//         {post.title}
//       </h1>
//       {post.image && (
//         <Image
//           src={`/${post.image}`}
//           alt={post.title}
//           width={800}
//           height={400}
//           className="w-full h-auto rounded-md mt-4"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard />
//     </div>
//   );
// }