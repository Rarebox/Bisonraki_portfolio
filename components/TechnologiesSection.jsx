// import { useState, useEffect, useRef } from "react";
// import * as Icons from "react-icons/fa";
// import * as SiIcons from "react-icons/si";

// const TechnologiesSection = ({ data }) => {
//   const [activeTab, setActiveTab] = useState("blockchain");
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const tabs = [
//     { id: "blockchain", label: "Blockchain" },
//     { id: "frontend", label: "Frontend" },
//     { id: "tools", label: "Tools & DevOps" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const getIcon = (iconName) => {
//     const allIcons = { ...Icons, ...SiIcons };
//     const IconComponent = allIcons[iconName];
//     return IconComponent ? <IconComponent className="text-3xl" /> : null;
//   };

//   const SkillBar = ({ skill, index, isVisible }) => (
//     <div
//       className="space-y-3"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(20px)",
//         transition: `all 0.5s ease ${index * 0.1}s`,
//       }}
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <div className="text-indigo-400">{getIcon(skill.icon)}</div>
//           <span className="text-gray-300">{skill.name}</span>
//         </div>
//         <span className="text-sm text-gray-400">{skill.level}%</span>
//       </div>

//       <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
//         <div
//           className="h-full bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
//           style={{
//             width: isVisible ? `${skill.level}%` : "0%",
//             transitionDelay: `${index * 0.1}s`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );

//   return (
//     <section id="technologies" className="py-20 relative" ref={sectionRef}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Technical Skills
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto mb-8"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             My expertise spans across the entire Web3 technology stack, from
//             smart contract development to modern frontend frameworks.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-6 py-3 rounded-lg font-medium transition-all ${
//                 activeTab === tab.id
//                   ? "bg-gradient-to-r from-indigo-500 to-teal-500 text-white"
//                   : "bg-slate-800 text-gray-300 hover:bg-slate-700"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Skills Content */}
//         <div className="max-w-3xl mx-auto">
//           <div
//             className={`transition-all duration-500 ${
//               activeTab === "blockchain"
//                 ? "opacity-100 block"
//                 : "opacity-0 hidden"
//             }`}
//           >
//             <div className="space-y-6">
//               {data.blockchain.map((skill, index) => (
//                 <SkillBar
//                   key={skill.name}
//                   skill={skill}
//                   index={index}
//                   isVisible={isVisible}
//                 />
//               ))}
//             </div>
//           </div>

//           <div
//             className={`transition-all duration-500 ${
//               activeTab === "frontend"
//                 ? "opacity-100 block"
//                 : "opacity-0 hidden"
//             }`}
//           >
//             <div className="space-y-6">
//               {data.frontend.map((skill, index) => (
//                 <SkillBar
//                   key={skill.name}
//                   skill={skill}
//                   index={index}
//                   isVisible={isVisible}
//                 />
//               ))}
//             </div>
//           </div>

//           <div
//             className={`transition-all duration-500 ${
//               activeTab === "tools" ? "opacity-100 block" : "opacity-0 hidden"
//             }`}
//           >
//             <div className="space-y-6">
//               {data.tools.map((skill, index) => (
//                 <SkillBar
//                   key={skill.name}
//                   skill={skill}
//                   index={index}
//                   isVisible={isVisible}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 3D Floating Icons */}
//         <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block">
//           <div className="animate-float">
//             <Icons.FaCubes className="text-4xl text-indigo-400/20" />
//           </div>
//         </div>
//         <div className="absolute top-1/4 right-20 transform -translate-y-1/2 hidden lg:block">
//           <div className="animate-float delay-500">
//             <SiIcons.SiEthereum className="text-4xl text-teal-400/20" />
//           </div>
//         </div>
//         <div className="absolute bottom-1/4 right-10 hidden lg:block">
//           <div className="animate-float delay-1000">
//             <Icons.FaCode className="text-4xl text-indigo-400/20" />
//           </div>
//         </div>

//         {/* Certification Badges */}
//         <div className="mt-20 text-center">
//           <h3 className="text-xl font-semibold mb-8">
//             Certifications & Achievements
//           </h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-400/30 transition-colors">
//               <div className="w-16 h-16 mx-auto mb-2">
//                 <SiIcons.SiEthereum className="w-full h-full text-indigo-400" />
//               </div>
//               <p className="text-sm text-gray-300">
//                 Certified Ethereum Developer
//               </p>
//             </div>
//             <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-400/30 transition-colors">
//               <div className="w-16 h-16 mx-auto mb-2">
//                 <SiIcons.SiSolidity className="w-full h-full text-teal-400" />
//               </div>
//               <p className="text-sm text-gray-300">
//                 Solidity Smart Contract Expert
//               </p>
//             </div>
//             <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-indigo-400/30 transition-colors">
//               <div className="w-16 h-16 mx-auto mb-2">
//                 <Icons.FaShieldAlt className="w-full h-full text-amber-400" />
//               </div>
//               <p className="text-sm text-gray-300">
//                 Blockchain Security Auditor
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(5deg);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-float.delay-500 {
//           animation-delay: 500ms;
//         }

//         .animate-float.delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TechnologiesSection;

import { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const TechnologiesSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState("blockchain");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const tabs = [
    {
      id: "blockchain",
      label: "Blockchain",
      icon: "SiEthereum",
      color: "indigo",
    },
    { id: "frontend", label: "Frontend", icon: "FaCode", color: "cyan" },
    { id: "tools", label: "Tools & DevOps", icon: "FaCogs", color: "teal" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const allIcons = { ...Icons, ...SiIcons };
    const IconComponent = allIcons[iconName];
    return IconComponent ? <IconComponent className="text-3xl" /> : null;
  };

  const SkillBar = ({ skill, index, isVisible }) => (
    <div
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="relative p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
        {/* Glowing background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

        <div className="relative z-10 flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {getIcon(skill.icon)}
              </div>
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 animate-ping">
                  <div className="text-cyan-400/30">{getIcon(skill.icon)}</div>
                </div>
              )}
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
              {skill.name}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
              {skill.level}%
            </span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
          </div>
        </div>

        <div className="relative w-full bg-slate-900/50 rounded-full h-2 overflow-hidden border border-slate-700/30">
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? `${skill.level}%` : "0%",
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="technologies"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
              Technical Arsenal
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Cutting-edge technologies that power the decentralized future - from
            blockchain protocols to modern web frameworks
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative overflow-hidden px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r from-${tab.color}-600 to-${tab.color === "indigo" ? "purple" : "cyan"}-600 text-white shadow-lg shadow-${tab.color}-500/25`
                  : "bg-slate-800/40 text-gray-300 hover:bg-slate-700/60 border border-slate-700/50 hover:border-cyan-400/30"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`relative ${activeTab === tab.id ? "text-white" : "text-gray-400 group-hover:text-cyan-400"} transition-colors`}
                >
                  {getIcon(tab.icon)}
                </div>
                <span className="relative z-10">{tab.label}</span>
              </div>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Content with 3D Effect */}
        <div className="max-w-5xl mx-auto relative">
          {/* Tab content wrapper with 3D transform */}
          <div
            className="relative transform-gpu"
            style={{ perspective: "1000px" }}
          >
            {["blockchain", "frontend", "tools"].map((tabId) => (
              <div
                key={tabId}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  activeTab === tabId
                    ? "opacity-100 translate-z-0 scale-100"
                    : "opacity-0 translate-z-[-200px] scale-95"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  pointerEvents: activeTab === tabId ? "auto" : "none",
                }}
              >
                <div className="space-y-5">
                  {data[tabId]?.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                      isVisible={isVisible && activeTab === tabId}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D Icons */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block">
          <div className="animate-float">
            <Icons.FaCubes className="text-5xl text-indigo-400/20" />
          </div>
        </div>
        <div className="absolute top-1/4 right-20 transform -translate-y-1/2 hidden lg:block">
          <div className="animate-float delay-500">
            <SiIcons.SiEthereum className="text-5xl text-teal-400/20" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10 hidden lg:block">
          <div className="animate-float delay-1000">
            <Icons.FaCode className="text-5xl text-indigo-400/20" />
          </div>
        </div>

        {/* Enhanced Certification Badges */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <SiIcons.SiEthereum className="w-full h-full text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  <div className="absolute inset-0 animate-pulse">
                    <SiIcons.SiEthereum className="w-full h-full text-indigo-400/20" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Ethereum Developer
                </h4>
                <p className="text-sm text-gray-400">Certified Professional</p>
              </div>
            </div>

            <div className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <SiIcons.SiSolidity className="w-full h-full text-teal-400 group-hover:text-teal-300 transition-colors" />
                  <div className="absolute inset-0 animate-pulse">
                    <SiIcons.SiSolidity className="w-full h-full text-teal-400/20" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Solidity Expert
                </h4>
                <p className="text-sm text-gray-400">
                  Smart Contract Specialist
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Icons.FaShieldAlt className="w-full h-full text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <div className="absolute inset-0 animate-pulse">
                    <Icons.FaShieldAlt className="w-full h-full text-amber-400/20" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Security Auditor
                </h4>
                <p className="text-sm text-gray-400">Blockchain Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float.delay-500 {
          animation-delay: 500ms;
        }

        .animate-float.delay-1000 {
          animation-delay: 1s;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .translate-z-0 {
          transform: translateZ(0);
        }

        .translate-z-\[-200px\] {
          transform: translateZ(-200px);
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;
