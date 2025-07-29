import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaArrowUp,
  FaRocket,
  FaNewspaper,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = ({ data, profile }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      href: profile.github,
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      href: profile.linkedin,
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: profile.twitter,
      icon: FaTwitter,
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      href: `mailto:${profile.email}`,
      icon: FaEnvelope,
      label: "Email",
      color: "hover:text-teal-400",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      ref={footerRef}
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-5"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Brand Section */}
              <div className="space-y-6">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-xl">
                        {profile.name[0]}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  </div>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white group-hover:via-cyan-100 transition-all">
                    {profile.name}
                  </span>
                </Link>

                <p className="text-gray-400 max-w-xs leading-relaxed">
                  {profile.title} specializing in building the decentralized web
                  of tomorrow. Creating innovative blockchain solutions that
                  shape the future.
                </p>

                <div className="flex items-center space-x-4 pt-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-medium">
                    Currently Building
                  </span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-teal-500 rounded-full"></span>
                  <span>Navigate</span>
                </h3>

                <nav className="grid grid-cols-2 gap-3">
                  {[
                    { href: "#home", label: "Home" },
                    { href: "#about", label: "About" },
                    { href: "#projects", label: "Projects" },
                    { href: "#technologies", label: "Tech Stack" },
                    { href: "#faq", label: "FAQ" },
                    { href: "#contact", label: "Contact" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-all transform hover:translate-x-1 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Connect Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-teal-500 rounded-full"></span>
                  <span>Connect</span>
                </h3>

                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 group-hover:bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/25 border border-slate-700/50 group-hover:border-transparent">
                        <social.icon className="w-5 h-5 transform transition-transform group-hover:scale-110" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </a>
                  ))}
                </div>

                <div className="space-y-2 pt-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2 group"
                  >
                    <FaEnvelope className="text-sm text-indigo-400" />
                    <span>{profile.email}</span>
                  </a>
                  <p className="text-gray-400 flex items-center space-x-2">
                    <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                    <span>{profile.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-slate-700/50">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">{data.copyright}</div>

                <div className="flex flex-wrap justify-center gap-6">
                  {data.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.url}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
          isScrolling
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-20 scale-50"
        }`}
        aria-label="Scroll to top"
      >
        <div className="relative group">
          <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
            <FaArrowUp className="w-5 h-5 transform transition-transform group-hover:-translate-y-1" />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-teal-400 opacity-20 animate-ping"></div>
        </div>
      </button>

      {/* Floating Decorative Elements */}
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <div className="animate-float" style={{ animationDelay: "0s" }}>
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-lg rotate-45 backdrop-blur-sm border border-indigo-400/20"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-10 hidden lg:block">
        <div className="animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-20 h-20 bg-gradient-to-r from-teal-400/10 to-indigo-400/10 rounded-full backdrop-blur-sm border border-teal-400/20"></div>
        </div>
      </div>

      {/* Custom Animations and Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
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

        .fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }

        /* Gradient text animation */
        .gradient-text {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
