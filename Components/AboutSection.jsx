// // // import { useEffect, useRef } from "react";
// // // import { FaCheckCircle, FaBuilding, FaCalendar } from "react-icons/fa";

// // // const AboutSection = ({ data, profile }) => {
// // //   const aboutRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add("animate-fadeInUp");
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
// // //     elements?.forEach((el) => observer.observe(el));

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <section id="about" className="py-20 relative" ref={aboutRef}>
// // //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <div className="text-center mb-16 animate-on-scroll">
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
// // //           <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto"></div>
// // //         </div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //           {/* Left Side - Description & Skills */}
// // //           <div className="space-y-8 animate-on-scroll">
// // //             <p className="text-gray-300 text-lg leading-relaxed">
// // //               {data.description}
// // //             </p>

// // //             {/* Skills */}
// // //             <div>
// // //               <h3 className="text-xl font-semibold mb-4 text-indigo-400">
// // //                 Core Skills
// // //               </h3>
// // //               <div className="grid grid-cols-1 gap-3">
// // //                 {data.skills.map((skill, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm"
// // //                   >
// // //                     <FaCheckCircle className="text-teal-400 text-sm" />
// // //                     <span className="text-gray-300">{skill}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Side - Experience */}
// // //           <div className="space-y-8 animate-on-scroll">
// // //             <h3 className="text-xl font-semibold mb-4 text-indigo-400">
// // //               Professional Experience
// // //             </h3>

// // //             <div className="relative">
// // //               {/* Timeline Line */}
// // //               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-500"></div>

// // //               {/* Experience Items */}
// // //               <div className="space-y-8">
// // //                 {data.experience.map((exp, index) => (
// // //                   <div key={index} className="relative">
// // //                     {/* Timeline Dot */}
// // //                     <div className="absolute left-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full transform -translate-x-1/2 mt-2"></div>

// // //                     {/* Experience Card */}
// // //                     <div className="ml-20 p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-indigo-400/30 transition-colors">
// // //                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
// // //                         <h4 className="text-lg font-semibold">
// // //                           {exp.position}
// // //                         </h4>
// // //                         <span className="text-sm text-gray-400 flex items-center">
// // //                           <FaCalendar className="mr-1" />
// // //                           {exp.period}
// // //                         </span>
// // //                       </div>
// // //                       <div className="flex items-center text-indigo-400 mb-3">
// // //                         <FaBuilding className="mr-2 text-sm" />
// // //                         <span className="font-medium">{exp.company}</span>
// // //                       </div>
// // //                       <p className="text-gray-300">{exp.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Bottom CTA */}
// // //         <div className="text-center mt-16 animate-on-scroll">
// // //           <a
// // //             href="#contact"
// // //             className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity transform hover:scale-105"
// // //           >
// // //             Let's Work Together
// // //           </a>
// // //         </div>
// // //       </div>

// // //       {/* Custom Animations */}
// // //       <style jsx>{`
// // //         @keyframes fadeInUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .animate-fadeInUp {
// // //           animation: fadeInUp 0.6s ease-out forwards;
// // //         }

// // //         .animate-on-scroll {
// // //           opacity: 0;
// // //           transform: translateY(20px);
// // //           transition: all 0.6s ease-out;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default AboutSection;

// // import { useEffect, useRef, useState } from "react";
// // import {
// //   FaCheckCircle,
// //   FaBuilding,
// //   FaCalendar,
// //   FaCode,
// //   FaMicrochip,
// //   FaRocket,
// //   FaUser,
// // } from "react-icons/fa";
// // import { SiSolidity, SiEthereum, SiIpfs, SiReact } from "react-icons/si";

// // const AboutSection = ({ data, profile }) => {
// //   const aboutRef = useRef(null);
// //   const [visibleItems, setVisibleItems] = useState(new Set());

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const itemId = entry.target.dataset.itemId;
// //             setVisibleItems((prev) => new Set([...prev, itemId]));
// //           }
// //         });
// //       },
// //       { threshold: 0.2, rootMargin: "50px" }
// //     );

// //     const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
// //     elements?.forEach((el, index) => {
// //       el.dataset.itemId = index.toString();
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   // Skill categories with icons
// //   const skillCategories = [
// //     { icon: SiSolidity, color: "text-cyan-400", category: "Smart Contracts" },
// //     { icon: SiReact, color: "text-blue-400", category: "Frontend" },
// //     { icon: SiEthereum, color: "text-indigo-400", category: "Blockchain" },
// //     { icon: SiIpfs, color: "text-teal-400", category: "Storage" },
// //   ];

// //   return (
// //     <section
// //       id="about"
// //       className="py-24 relative overflow-hidden"
// //       ref={aboutRef}
// //     >
// //       {/* Futuristic Background */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
// //         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
// //         <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
// //         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
// //       </div>

// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         {/* Section Header */}
// //         <div className="text-center mb-20 animate-on-scroll" data-delay="0">
// //           <div className="relative inline-block">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
// //               {data.title}
// //             </h2>
// //             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
// //             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
// //           </div>
// //           <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
// //             Dive into the technical journey of a Web3 visionary
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// //           {/* Left Side - Professional Profile */}
// //           <div className="space-y-10 animate-on-scroll" data-delay="100">
// //             {/* About Text with Holographic Effect */}
// //             <div className="relative">
// //               <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-transparent to-teal-500/10 rounded-lg blur-lg"></div>
// //               <div className="relative bg-slate-800/30 backdrop-blur-md p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
// //                 <div className="flex items-center mb-6">
// //                   <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
// //                     <FaUser className="text-white text-xl" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-cyan-300">
// //                     Professional Profile
// //                   </h3>
// //                 </div>
// //                 <p className="text-gray-300 text-lg leading-relaxed">
// //                   {data.description}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Skills Matrix */}
// //             <div>
// //               <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
// //                 Core Expertise
// //               </h3>

// //               <div className="space-y-4">
// //                 {data.skills.map((skill, index) => (
// //                   <div
// //                     key={index}
// //                     className={`group relative transform transition-all duration-500 ${
// //                       visibleItems.has(`skill-${index}`)
// //                         ? "translate-x-0 opacity-100"
// //                         : "-translate-x-8 opacity-0"
// //                     }`}
// //                     style={{
// //                       transitionDelay: `${index * 100}ms`,
// //                       animation: visibleItems.has(`skill-${index}`)
// //                         ? "pulse 3s infinite"
// //                         : "none",
// //                     }}
// //                   >
// //                     <div className="flex items-center space-x-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
// //                       <div className="relative">
// //                         <FaCheckCircle className="text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors" />
// //                         <span className="absolute inset-0 animate-ping">
// //                           <FaCheckCircle className="text-cyan-400/30 text-lg" />
// //                         </span>
// //                       </div>
// //                       <span className="text-gray-300 group-hover:text-white transition-colors flex-1">
// //                         {skill}
// //                       </span>
// //                       <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Skill Categories */}
// //             <div className="grid grid-cols-2 gap-4">
// //               {skillCategories.map((category, index) => (
// //                 <div
// //                   key={index}
// //                   className="group relative bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
// //                 >
// //                   <div className="flex items-center space-x-3">
// //                     <category.icon
// //                       className={`text-2xl ${category.color} group-hover:scale-110 transition-transform`}
// //                     />
// //                     <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
// //                       {category.category}
// //                     </span>
// //                   </div>
// //                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Side - Experience Timeline */}
// //           <div className="space-y-10 animate-on-scroll" data-delay="200">
// //             <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
// //               Professional Journey
// //             </h3>

// //             <div className="relative">
// //               {/* Futuristic Timeline */}
// //               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-500">
// //                 <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-500 blur animate-pulse"></div>
// //               </div>

// //               {/* Experience Items */}
// //               <div className="space-y-12">
// //                 {data.experience.map((exp, index) => (
// //                   <div key={index} className="relative group">
// //                     {/* Timeline Node */}
// //                     <div className="absolute left-8 w-6 h-6 transform -translate-x-1/2 mt-3">
// //                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full animate-ping opacity-30"></div>
// //                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
// //                       <div className="absolute inset-0.5 bg-slate-900 rounded-full"></div>
// //                       <div className="absolute inset-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
// //                     </div>

// //                     {/* Experience Card */}
// //                     <div className="ml-24 transform transition-all duration-500 group-hover:translate-x-2">
// //                       <div className="relative bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500">
// //                         {/* Card Header */}
// //                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
// //                           <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
// //                             {exp.position}
// //                           </h4>
// //                           <span className="text-sm text-gray-400 flex items-center mt-1 sm:mt-0">
// //                             <FaCalendar className="mr-2 text-cyan-400" />
// //                             {exp.period}
// //                           </span>
// //                         </div>

// //                         {/* Company Info */}
// //                         <div className="flex items-center text-cyan-400 mb-4">
// //                           <FaBuilding className="mr-3 text-sm" />
// //                           <span className="font-medium">{exp.company}</span>
// //                           <div className="ml-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
// //                         </div>

// //                         {/* Description */}
// //                         <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
// //                           {exp.description}
// //                         </p>

// //                         {/* Achievement Indicator */}
// //                         <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
// //                           <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom CTA with Holographic Effect */}
// //         <div className="text-center mt-24 animate-on-scroll" data-delay="300">
// //           <div className="relative inline-block">
// //             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 blur-lg rounded-lg animate-pulse"></div>
// //             <a
// //               href="#contact"
// //               className="relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:scale-105"
// //             >
// //               <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
// //               <FaRocket className="mr-3 group-hover:rotate-12 transition-transform" />
// //               Let's Build the Future Together
// //               <div className="absolute inset-0 ring-2 ring-cyan-400/0 group-hover:ring-cyan-400/50 rounded-lg transition-all"></div>
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Custom Animations */}
// //       <style jsx>{`
// //         @keyframes pulse {
// //           0%,
// //           100% {
// //             opacity: 1;
// //           }
// //           50% {
// //             opacity: 0.7;
// //           }
// //         }

// //         .animate-on-scroll {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .animate-on-scroll[data-delay="100"] {
// //           transition-delay: 100ms;
// //         }

// //         .animate-on-scroll[data-delay="200"] {
// //           transition-delay: 200ms;
// //         }

// //         .animate-on-scroll[data-delay="300"] {
// //           transition-delay: 300ms;
// //         }

// //         .animate-on-scroll.visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }

// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .animate-fadeInUp {
// //           animation: fadeInUp 0.6s ease-out forwards;
// //         }
// //       `}</style>

// //       <script jsx>{`
// //         const elements = document.querySelectorAll('.animate-on-scroll');
// //         const observer = new IntersectionObserver((entries) => {
// //           entries.forEach(entry => {
// //             if (entry.isIntersecting) {
// //               entry.target.classList.add('visible');
// //             }
// //           });
// //         }, { threshold: 0.2 });

// //         elements.forEach(el => observer.observe(el));
// //       `}</script>
// //     </section>
// //   );
// // };

// // export default AboutSection;

// import { useEffect, useRef, useState } from "react";
// import {
//   FaCheckCircle,
//   FaBuilding,
//   FaCalendar,
//   FaCode,
//   FaMicrochip,
//   FaRocket,
//   FaUser,
// } from "react-icons/fa";
// import { SiSolidity, SiEthereum, SiIpfs, SiReact } from "react-icons/si";

// const AboutSection = ({ data, profile }) => {
//   const aboutRef = useRef(null);
//   const [visibleItems, setVisibleItems] = useState(new Set());

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const itemId = entry.target.dataset.itemId;
//             if (itemId) {
//               setVisibleItems((prev) => new Set([...prev, itemId]));
//             } else {
//               entry.target.classList.add("visible");
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
//     elements?.forEach((el, index) => {
//       el.dataset.itemId = index.toString();
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Skill categories with icons
//   const skillCategories = [
//     { icon: SiSolidity, color: "text-cyan-400", category: "Smart Contracts" },
//     { icon: SiReact, color: "text-blue-400", category: "Frontend" },
//     { icon: SiEthereum, color: "text-indigo-400", category: "Blockchain" },
//     { icon: SiIpfs, color: "text-teal-400", category: "Storage" },
//   ];

//   return (
//     <section
//       id="about"
//       className="py-24 relative overflow-hidden"
//       ref={aboutRef}
//     >
//       {/* Futuristic Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20 animate-on-scroll">
//           <div className="relative inline-block">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
//               {data.title}
//             </h2>
//             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
//             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
//           </div>
//           <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
//             Dive into the technical journey of a Web3 visionary
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Left Side - Professional Profile */}
//           <div className="space-y-10 animate-on-scroll">
//             {/* About Text with Holographic Effect */}
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-transparent to-teal-500/10 rounded-lg blur-lg"></div>
//               <div className="relative bg-slate-800/30 backdrop-blur-md p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
//                     <FaUser className="text-white text-xl" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-cyan-300">
//                     Professional Profile
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   {data.description}
//                 </p>
//               </div>
//             </div>

//             {/* Skills Matrix */}
//             <div>
//               <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
//                 Core Expertise
//               </h3>

//               <div className="space-y-4">
//                 {data.skills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className={`group relative transform transition-all duration-500 ${
//                       visibleItems.has(`${index}`)
//                         ? "translate-x-0 opacity-100"
//                         : "-translate-x-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay: `${index * 100}ms`,
//                     }}
//                     data-item-id={`skill-${index}`}
//                   >
//                     <div className="flex items-center space-x-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
//                       <div className="relative">
//                         <FaCheckCircle className="text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors" />
//                         <span className="absolute inset-0 animate-ping">
//                           <FaCheckCircle className="text-cyan-400/30 text-lg" />
//                         </span>
//                       </div>
//                       <span className="text-gray-300 group-hover:text-white transition-colors flex-1">
//                         {skill}
//                       </span>
//                       <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Skill Categories */}
//             <div className="grid grid-cols-2 gap-4">
//               {skillCategories.map((category, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <category.icon
//                       className={`text-2xl ${category.color} group-hover:scale-110 transition-transform`}
//                     />
//                     <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
//                       {category.category}
//                     </span>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Experience Timeline */}
//           <div className="space-y-10 animate-on-scroll">
//             <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
//               Professional Journey
//             </h3>

//             <div className="relative">
//               {/* Futuristic Timeline */}
//               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-500">
//                 <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-500 blur animate-pulse"></div>
//               </div>

//               {/* Experience Items */}
//               <div className="space-y-12">
//                 {data.experience.map((exp, index) => (
//                   <div key={index} className="relative group">
//                     {/* Timeline Node */}
//                     <div className="absolute left-8 w-6 h-6 transform -translate-x-1/2 mt-3">
//                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full animate-ping opacity-30"></div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
//                       <div className="absolute inset-0.5 bg-slate-900 rounded-full"></div>
//                       <div className="absolute inset-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
//                     </div>

//                     {/* Experience Card */}
//                     <div className="ml-24 transform transition-all duration-500 group-hover:translate-x-2">
//                       <div className="relative bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500">
//                         {/* Card Header */}
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//                           <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
//                             {exp.position}
//                           </h4>
//                           <span className="text-sm text-gray-400 flex items-center mt-1 sm:mt-0">
//                             <FaCalendar className="mr-2 text-cyan-400" />
//                             {exp.period}
//                           </span>
//                         </div>

//                         {/* Company Info */}
//                         <div className="flex items-center text-cyan-400 mb-4">
//                           <FaBuilding className="mr-3 text-sm" />
//                           <span className="font-medium">{exp.company}</span>
//                           <div className="ml-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
//                         </div>

//                         {/* Description */}
//                         <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
//                           {exp.description}
//                         </p>

//                         {/* Achievement Indicator */}
//                         <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
//                           <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA with Holographic Effect */}
//         <div className="text-center mt-24 animate-on-scroll">
//           <div className="relative inline-block">
//             <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 blur-lg rounded-lg animate-pulse"></div>
//             <a
//               href="#contact"
//               className="relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:scale-105"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
//               <FaRocket className="mr-3 group-hover:rotate-12 transition-transform" />
//               Let's Build the Future Together
//               <div className="absolute inset-0 ring-2 ring-cyan-400/0 group-hover:ring-cyan-400/50 rounded-lg transition-all"></div>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AboutSection;

import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaBuilding,
  FaCalendar,
  FaCode,
  FaMicrochip,
  FaRocket,
  FaUser,
} from "react-icons/fa";
import { SiSolidity, SiEthereum, SiIpfs, SiReact } from "react-icons/si";

const AboutSection = ({ data, profile }) => {
  const aboutRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]));
            } else {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el, index) => {
      el.dataset.itemId = index.toString();
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Skill categories with icons
  const skillCategories = [
    { icon: SiSolidity, color: "text-cyan-400", category: "Smart Contracts" },
    { icon: SiReact, color: "text-blue-400", category: "Frontend" },
    { icon: SiEthereum, color: "text-indigo-400", category: "Blockchain" },
    { icon: SiIpfs, color: "text-teal-400", category: "Storage" },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      ref={aboutRef}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {data.title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Dive into the technical journey of a Web3 visionary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Professional Profile */}
          <div className="space-y-8 animate-on-scroll">
            {/* About Text with Holographic Effect */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-transparent to-teal-500/10 rounded-lg blur-lg"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-md p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <FaUser className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-300">
                    Professional Profile
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>

            {/* Skills Matrix */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
                Core Expertise
              </h3>

              <div className="space-y-3">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative transform transition-all duration-500 ${
                      visibleItems.has(`${index}`)
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    data-item-id={`skill-${index}`}
                  >
                    <div className="flex items-center space-x-3 p-3 bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
                      <div className="relative">
                        <FaCheckCircle className="text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors flex-1">
                        {skill}
                      </span>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-2 gap-3">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2">
                    <category.icon
                      className={`text-lg ${category.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                      {category.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Experience Timeline */}
          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              Professional Journey
            </h3>

            <div className="relative">
              {/* Futuristic Timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-teal-500"></div>

              {/* Experience Items */}
              <div className="space-y-10">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute left-8 w-5 h-5 transform -translate-x-1/2 mt-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full animate-ping opacity-30"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
                      <div className="absolute inset-0.5 bg-slate-900 rounded-full"></div>
                      <div className="absolute inset-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
                    </div>

                    {/* Experience Card */}
                    <div className="ml-20 transform transition-all duration-500 group-hover:translate-x-2">
                      <div className="relative bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500">
                        {/* Card Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-gray-400 flex items-center mt-1 sm:mt-0">
                            <FaCalendar className="mr-2 text-cyan-400" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Company Info */}
                        <div className="flex items-center text-cyan-400 mb-3">
                          <FaBuilding className="mr-2 text-sm" />
                          <span className="font-medium">{exp.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                          {exp.description}
                        </p>

                        {/* Achievement Indicator */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA with Holographic Effect */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 blur-lg rounded-lg animate-pulse"></div>
            <a
              href="#contact"
              className="relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <FaRocket className="mr-2 group-hover:rotate-12 transition-transform" />
              Let's Build the Future Together
              <div className="absolute inset-0 ring-2 ring-cyan-400/0 group-hover:ring-cyan-400/50 rounded-lg transition-all"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
