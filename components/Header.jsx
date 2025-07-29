// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// const Header = ({ data }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Update active section based on scroll position
//       const sections = [
//         "home",
//         "about",
//         "projects",
//         "technologies",
//         "faq",
//         "contact",
//       ];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "#home", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#technologies", label: "Tech Stack" },
//     { href: "#faq", label: "FAQ" },
//     { href: "#contact", label: "Contact" },
//   ];

//   const socialLinks = [
//     { href: data.profile.github, icon: FaGithub },
//     { href: data.profile.linkedin, icon: FaLinkedin },
//     { href: data.profile.twitter, icon: FaTwitter },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">
//                 {data.profile.name[0]}
//               </span>
//             </div>
//             <span className="text-xl font-bold gradient-text">
//               {data.profile.name}
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className={`text-gray-300 hover:text-white transition-colors relative ${
//                   activeSection === link.href.slice(1) ? "text-indigo-400" : ""
//                 }`}
//               >
//                 {link.label}
//                 {activeSection === link.href.slice(1) && (
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400"></span>
//                 )}
//               </a>
//             ))}
//           </nav>

//           {/* Desktop Social Links */}
//           <div className="hidden md:flex items-center space-x-4">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <social.icon className="w-5 h-5" />
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-400 hover:text-white"
//           >
//             {isOpen ? (
//               <FaTimes className="w-6 h-6" />
//             ) : (
//               <FaBars className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <nav className="py-4 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block py-2 text-gray-300 hover:text-white transition-colors ${
//                   activeSection === link.href.slice(1) ? "text-indigo-400" : ""
//                 }`}
//               >
//                 {link.label}
//               </a>
//             ))}
//             <div className="flex space-x-4 pt-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "projects",
        "technologies",
        "faq",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Tech Stack" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: data.profile.github, icon: FaGithub, label: "GitHub" },
    { href: data.profile.linkedin, icon: FaYoutube, label: "YouTube" }, // Changed to YouTube
    { href: data.profile.twitter, icon: FaTwitter, label: "Twitter" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-slate-800"
          : "bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl">
                  {data.profile.name[0]}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-teal-300 transition-all duration-300">
                {data.profile.name}
              </span>
              <span className="block text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                {data.profile.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-gradient-to-r from-indigo-600/20 to-teal-600/20 border border-indigo-400/20"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg transition-all duration-300 hover:bg-slate-800/50"
                aria-label={social.label}
              >
                <social.icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    social.label === "YouTube"
                      ? "text-red-400 group-hover:text-red-300"
                      : social.label === "GitHub"
                        ? "text-gray-300 group-hover:text-white"
                        : "text-blue-400 group-hover:text-blue-300"
                  }`}
                />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              {isOpen ? (
                <FaTimes className="w-6 h-6 animate-rotate" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen
              ? "max-h-96 opacity-100 visibility-visible"
              : "max-h-0 opacity-0 visibility-hidden"
          }`}
        >
          <nav className="py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-gradient-to-r from-indigo-600/20 to-teal-600/20 border border-indigo-400/20"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-slate-800">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all duration-300 hover:bg-slate-800/50"
                  aria-label={social.label}
                >
                  <social.icon
                    className={`w-6 h-6 ${
                      social.label === "YouTube"
                        ? "text-red-400"
                        : social.label === "GitHub"
                          ? "text-gray-300"
                          : "text-blue-400"
                    }`}
                  />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }

        .animate-rotate {
          animation: rotate 0.3s ease-in-out;
        }

        .visibility-hidden {
          visibility: hidden;
        }

        .visibility-visible {
          visibility: visible;
        }
      `}</style>
    </header>
  );
};

export default Header;
