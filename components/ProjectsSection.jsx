// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//   FaYoutube,
//   FaExternalLinkAlt,
//   FaBook,
//   FaCode,
//   FaTimes,
// } from "react-icons/fa";

// const ProjectsSection = ({ data }) => {
//   const [filter, setFilter] = useState("all");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [filteredProjects, setFilteredProjects] = useState(data);
//   const projectsRef = useRef(null);

//   const categories = [
//     "all",
//     ...new Set(data.map((project) => project.category)),
//   ];

//   useEffect(() => {
//     if (filter === "all") {
//       setFilteredProjects(data);
//     } else {
//       setFilteredProjects(
//         data.filter((project) => project.category === filter)
//       );
//     }
//   }, [filter, data]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slideIn");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = projectsRef.current?.querySelectorAll(".project-card");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, [filteredProjects]);

//   return (
//     <section id="projects" className="py-20 relative" ref={projectsRef}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Featured Projects
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto mb-8"></div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setFilter(category)}
//                 className={`px-6 py-2 rounded-full transition-all capitalize ${
//                   filter === category
//                     ? "bg-gradient-to-r from-indigo-500 to-teal-500 text-white"
//                     : "bg-slate-800 text-gray-300 hover:bg-slate-700"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className="project-card opacity-0 transform translate-y-8"
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-indigo-400/30 transition-all duration-300 card-hover">
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={project.image || "/api/placeholder/400/300"}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

//                   {/* Category Badge */}
//                   <div className="absolute top-4 right-4 bg-indigo-500/90 text-white px-3 py-1 rounded-full text-sm">
//                     {project.category}
//                   </div>
//                 </div>

//                 {/* Project Info */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-4 line-clamp-2">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.slice(0, 3).map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-2 py-1 bg-slate-700 text-xs rounded text-gray-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <span className="px-2 py-1 bg-slate-700 text-xs rounded text-gray-300">
//                         +{project.technologies.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-4">
//                     <button
//                       onClick={() => setSelectedProject(project)}
//                       className="flex-1 bg-gradient-to-r from-indigo-500 to-teal-500 text-white px-4 py-2 rounded text-sm hover:opacity-90 transition-opacity"
//                     >
//                       View Details
//                     </button>
//                     <a
//                       href={project.links.youtube}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 border border-slate-600 rounded hover:border-red-500 transition-colors"
//                     >
//                       <FaYoutube className="text-red-500" />
//                     </a>
//                     <a
//                       href={project.links.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 border border-slate-600 rounded hover:border-indigo-400 transition-colors"
//                     >
//                       <FaExternalLinkAlt className="text-gray-300" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Project Modal */}
//         {selectedProject && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
//             <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               {/* Modal Header */}
//               <div className="relative p-6 border-b border-slate-700">
//                 <h2 className="text-2xl font-bold pr-10">
//                   {selectedProject.title}
//                 </h2>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="absolute top-6 right-6 text-gray-400 hover:text-white"
//                 >
//                   <FaTimes className="text-xl" />
//                 </button>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6 space-y-6">
//                 {/* Project Image */}
//                 <div className="relative h-64 rounded-lg overflow-hidden">
//                   <Image
//                     src={selectedProject.image || "/api/placeholder/800/400"}
//                     alt={selectedProject.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Description</h3>
//                   <p className="text-gray-300">{selectedProject.description}</p>
//                 </div>

//                 {/* Features */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Key Features</h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {selectedProject.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start space-x-2">
//                         <span className="text-teal-400 mt-1">•</span>
//                         <span className="text-gray-300">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-3">
//                     {selectedProject.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Metrics */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">
//                     Project Metrics
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {Object.entries(selectedProject.metrics).map(
//                       ([key, value]) => (
//                         <div
//                           key={key}
//                           className="bg-slate-800 p-4 rounded-lg text-center"
//                         >
//                           <div className="text-sm text-gray-400 uppercase">
//                             {key}
//                           </div>
//                           <div className="text-lg font-semibold gradient-text">
//                             {value}
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* Links */}
//                 <div className="flex flex-wrap gap-4 pt-4">
//                   {selectedProject.links.youtube && (
//                     <a
//                       href={selectedProject.links.youtube}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition-colors"
//                     >
//                       <FaYoutube />
//                       <span>Watch Video</span>
//                     </a>
//                   )}
//                   {selectedProject.links.demo && (
//                     <a
//                       href={selectedProject.links.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded hover:opacity-90 transition-opacity"
//                     >
//                       <FaExternalLinkAlt />
//                       <span>Live Demo</span>
//                     </a>
//                   )}
//                   {selectedProject.links.docs && (
//                     <a
//                       href={selectedProject.links.docs}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors"
//                     >
//                       <FaBook />
//                       <span>Documentation</span>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-slideIn {
//           animation: slideIn 0.5s ease-out forwards;
//         }

//         .line-clamp-2 {
//           overflow: hidden;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectsSection;

import { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Image from "next/image";
import {
  FaYoutube,
  FaExternalLinkAlt,
  FaBook,
  FaTimes,
  FaCube,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import {
  SiSolidity,
  SiReact,
  SiNextdotjs,
  SiEthereum,
  SiHardhat,
} from "react-icons/si";

const ProjectsSection = ({ data }) => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(data);
  const projectsRef = useRef(null);

  const categories = [
    "all",
    ...new Set(data.map((project) => project.category)),
  ];

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(data);
    } else {
      setFilteredProjects(
        data.filter((project) => project.category === filter)
      );
    }
  }, [filter, data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = projectsRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  // Get tech icon
  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "solidity":
        return <SiSolidity />;
      case "react":
        return <SiReact />;
      case "next.js":
        return <SiNextdotjs />;
      case "hardhat":
        return <FaCube />; // Using FaCube instead of SiHardhat
      case "web3.js":
        return <SiEthereum />;
      default:
        return <FaCube />;
    }
  };

  const categoryColors = {
    DeFi: "from-indigo-500 to-purple-500",
    NFT: "from-teal-500 to-cyan-500",
    Governance: "from-amber-500 to-orange-500",
    all: "from-indigo-500 to-teal-500",
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      ref={projectsRef}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-float delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
              Featured Projects
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? `bg-gradient-to-r ${categoryColors[category] || categoryColors.all} text-white shadow-lg`
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 border border-slate-700/50"
                }`}
              >
                <span className="relative z-10">{category}</span>
                {filter === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-shimmer"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 transform translate-y-12"
              style={{
                transitionDelay: `${index * 150}ms`,
                transition: "all 0.8s ease",
              }}
            >
              <div className="group relative bg-slate-800/40 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                {/* Holographic Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 animate-shimmer"></div>
                </div>

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/api/placeholder/400/300"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category] || categoryColors.all} text-white text-sm font-medium shadow-lg backdrop-blur-sm`}
                  >
                    {project.category}
                  </div>

                  {/* Quick Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-4 right-4 p-3 bg-black/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Technologies with Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 px-3 py-1 bg-slate-700/40 rounded-full text-xs text-gray-300 border border-slate-600/30 hover:border-cyan-400/50 transition-all"
                      >
                        <span className="text-cyan-400">
                          {getTechIcon(tech)}
                        </span>
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.technologies.length > 4 && (
                      <div className="px-3 py-1 bg-slate-700/40 rounded-full text-xs text-gray-300 border border-slate-600/30">
                        +{project.technologies.length - 4}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-teal-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FaStar className="text-sm" />
                      Details
                    </button>
                    <a
                      href={project.links.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all border border-red-400/20 hover:border-red-400/50"
                    >
                      <FaYoutube className="text-lg" />
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-all border border-slate-600/30 hover:border-cyan-400/50"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <div className="fixed mt-16  inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-slate-900/95 backdrop-blur-md rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden border border-cyan-400/20 shadow-2xl">
              {/* Modal Header */}
              <div className="relative p-6 border-b border-slate-700/50 bg-gradient-to-r from-indigo-500/10 to-teal-500/10">
                <h2 className="text-2xl font-bold text-white pr-12">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(95vh-80px)] p-6 space-y-8">
                {/* Hero Image */}
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image || "/api/placeholder/800/400"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">
                    Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-cyan-400/20 transition-all"
                      >
                        <div className="mt-1.5 w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/40 rounded-lg border border-slate-700/30 text-gray-300 hover:border-cyan-400/50 transition-all"
                      >
                        <span className="text-cyan-400">
                          {getTechIcon(tech)}
                        </span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">
                    Project Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(selectedProject.metrics).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl text-center border border-slate-700/30 hover:border-cyan-400/20 transition-all"
                        >
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                            {key}
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            {value}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700/30">
  {selectedProject.links.youtube && (
    <a
      href={selectedProject.links.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-red-600/10 text-red-400 rounded-lg hover:bg-red-600/20 transition-all border border-red-400/20 hover:border-red-400/50"
    >
      <FaYoutube className="text-lg" />
      <span>Watch Demo</span>
    </a>
  )}

  {selectedProject.links.demo && (
    <a
      href={selectedProject.links.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all"
    >
      <FaExternalLinkAlt />
      <span>Live Demo</span>
    </a>
  )}

  {selectedProject.links.docs && (
    <a
      href={selectedProject.links.docs}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-slate-800/40 text-gray-300 rounded-lg hover:bg-slate-700/50 transition-all border border-slate-700/30 hover:border-cyan-400/50"
    >
      <FaBook />
      <span>Documentation</span>
    </a>
  )}

  {/* 👇 YENİ "BUY NOW" BUTONU - Turuncu, Beyaz, Inter Font, 16px */}
  {selectedProject.links.buyNow && (
    <a
      href={selectedProject.links.buyNow}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all font-inter text-sm md:text-base"
      style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
    >
      <FaShoppingCart className="text-lg" /> {/* İsteğe bağlı ikon */}
      <span>Buy Now</span>
    </a>
  )}
</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float.delay-300 {
          animation-delay: 0.3s;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.7);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
