import { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaQuestionCircle,
  FaComments,
  FaRocket,
} from "react-icons/fa";

const FAQSection = ({ data }) => {
  const [openItems, setOpenItems] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);

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

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-5"></div>
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
              Knowledge Hub
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Get insights into Web3 development, blockchain technologies, and how
            I can help bring your decentralized vision to life
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className={`mb-6 transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative group">
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-lg"></div>

                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full px-6 py-5 bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-cyan-400 transition-colors group-hover:text-cyan-300">
                        <FaQuestionCircle className="text-xl" />
                      </div>
                      <h3 className="text-left text-lg font-medium text-white pr-8 group-hover:text-cyan-100 transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="text-indigo-400 group-hover:text-indigo-300 transition-all">
                        {openItems.has(index) ? (
                          <FaChevronUp className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                      {hoveredItem === index && (
                        <div className="absolute inset-0 animate-ping">
                          <div className="w-5 h-5 rounded-full bg-indigo-400/20"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    openItems.has(index)
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative px-6 py-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1 text-teal-400">
                        <FaLightbulb className="text-lg" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Help Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-800/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-cyan-400/20 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full shadow-lg shadow-indigo-500/25">
                <FaComments className="text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Got More Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss innovative projects and explore how
              blockchain technology can revolutionize your business. Let's
              connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition-all transform hover:scale-105"
              >
                <FaRocket className="mr-2" />
                Schedule a Call
              </a>
              <a
                href="mailto:info@birsonraki.net"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 text-white rounded-lg font-medium border border-slate-700 hover:border-cyan-400 hover:bg-slate-700/50 transition-all transform hover:scale-105"
              >
                <FaComments className="mr-2" />
                Drop a Message
              </a>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="animate-float">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-lg rotate-45 backdrop-blur-sm border border-indigo-400/20"></div>
          </div>
        </div>
        <div className="absolute bottom-20 left-20 hidden lg:block">
          <div className="animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-24 h-24 bg-gradient-to-r from-teal-400/10 to-indigo-400/10 rounded-full backdrop-blur-sm border border-teal-400/20"></div>
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
            transform: translateY(-10px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .max-h-0 {
          max-height: 0;
        }

        .max-h-96 {
          max-height: 24rem;
        }

        /* Custom scrollbar for FAQ answers */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
