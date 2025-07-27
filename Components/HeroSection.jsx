import { useEffect, useRef, useState } from "react";
import {
  FaArrowDown,
  FaCode,
  FaRocket,
  FaCubes,
  FaCode as FaCodeAlt,
  FaMicrochip,
  FaCube,
} from "react-icons/fa";
import { SiEthereum, SiSolidity } from "react-icons/si";
import Image from "next/image";

const HeroSection = ({ data, profile }) => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // const hero = heroRef.current;
    // if (!hero) return;

    // const handleMouseMove = (e) => {
    //   const { left, top, width, height } = hero.getBoundingClientRect();
    //   const x = (e.clientX - left) / width;
    //   const y = (e.clientY - top) / height;

    //   setMousePosition({ x, y });

    //   const tiltX = (y - 0.5) * 15;
    //   const tiltY = (x - 0.5) * -15;

    //   hero.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    // };

    // const handleMouseLeave = () => {
    //   hero.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
    //   setMousePosition({ x: 0.5, y: 0.5 });
    // };

    // hero.addEventListener("mousemove", handleMouseMove);
    // hero.addEventListener("mouseleave", handleMouseLeave);

    // return () => {
    //   hero.removeEventListener("mousemove", handleMouseMove);
    //   hero.removeEventListener("mouseleave", handleMouseLeave);
    // };
  }, []);

  // Floating particles effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-float-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          ></div>
        ))}
      </div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-[1px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={heroRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-300"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Glitch Effect Title */}
            <div className="space-y-4">
              <div className="relative">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 text-lg font-medium uppercase tracking-wider glitch-effect">
                  Welcome to Web3 Era
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold relative">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-x">
                  {data.title}
                </span>
                <span
                  className="absolute inset-0 animate-glow"
                  style={{
                    textShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                  }}
                ></span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {data.subtitle}
              </p>
            </div>

            {/* Futuristic CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <FaCubes className="mr-2 transition-transform group-hover:rotate-12" />
                {data.cta1}
                <span className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900/90 text-white rounded-lg font-medium border border-cyan-400/30 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaCode className="mr-2 transition-transform group-hover:rotate-12" />
                {data.cta2}
              </a>
            </div>

            {/* Advanced Stats with Holographic Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg bg-slate-800/40 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Futuristic Profile Display */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              {/* Holographic Frame */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-indigo-400/20 to-teal-400/20 blur-xl animate-pulse"></div>

              {/* Quantum Dots */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-indigo-400 rounded-full animate-ping delay-100"></div>
              <div className="absolute -bottom-8 -left-8 w-4 h-4 bg-teal-400 rounded-full animate-ping delay-200"></div>
              <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping delay-300"></div>

              {/* Profile Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-teal-500/20 animate-gradient"></div>
                <div className="relative aspect-square bg-slate-900 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={profile.profileImage || "/profile.jpg"}
                      alt={profile.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-1/4 -left-16 group">
                <div className="relative bg-slate-900 p-4 rounded-full border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] animate-float">
                  <SiSolidity className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur group-hover:blur-lg transition-all"></div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-16 group">
                <div className="relative bg-slate-900 p-4 rounded-full border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.2)] animate-float delay-300">
                  <SiEthereum className="text-indigo-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-indigo-400/20 blur group-hover:blur-lg transition-all"></div>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-0 group">
                <div className="relative bg-slate-900 p-4 rounded-full border border-teal-400/30 shadow-[0_0_20px_rgba(20,184,166,0.2)] animate-float delay-500">
                  <FaCube className="text-teal-400 text-2xl group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-teal-400/20 blur group-hover:blur-lg transition-all"></div>
                </div>
              </div>

              {/* Matrix Code Rain */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="matrix-rain"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="group relative flex flex-col items-center space-y-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <div className="w-1 h-3 bg-cyan-400 rounded-full animate-scroll-indicator"></div>
            </div>
            <FaArrowDown className="text-sm animate-bounce" />
          </a>
        </div>
      </div>

      {/* Custom Futuristic Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-particle {
          0% {
            opacity: 0;
            transform: translateY(100vh) scale(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) scale(2);
          }
        }

        @keyframes glitch {
          0% {
            text-shadow:
              0.05em 0 0 #ff0000,
              -0.05em -0.025em 0 #00ff00,
              0.025em 0.05em 0 #0000ff;
          }
          15% {
            text-shadow:
              0.05em 0 0 #ff0000,
              -0.05em -0.025em 0 #00ff00,
              0.025em 0.05em 0 #0000ff;
          }
          16% {
            text-shadow:
              -0.05em -0.025em 0 #ff0000,
              0.025em 0.025em 0 #00ff00,
              -0.05em -0.05em 0 #0000ff;
          }
          49% {
            text-shadow:
              -0.05em -0.025em 0 #ff0000,
              0.025em 0.025em 0 #00ff00,
              -0.05em -0.05em 0 #0000ff;
          }
          50% {
            text-shadow:
              0.025em 0.05em 0 #ff0000,
              0.05em 0 0 #00ff00,
              0 -0.05em 0 #0000ff;
          }
          99% {
            text-shadow:
              0.025em 0.05em 0 #ff0000,
              0.05em 0 0 #00ff00,
              0 -0.05em 0 #0000ff;
          }
          100% {
            text-shadow:
              -0.025em 0 0 #ff0000,
              -0.025em -0.025em 0 #00ff00,
              -0.025em -0.05em 0 #0000ff;
          }
        }

        @keyframes gradient-x {
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

        @keyframes scroll-indicator {
          0% {
            opacity: 1;
            transform: translateY(-50%);
          }
          50% {
            opacity: 0.3;
            transform: translateY(50%);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%);
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
          }
          50% {
            text-shadow:
              0 0 30px rgba(34, 211, 238, 0.8),
              0 0 40px rgba(79, 70, 229, 0.5);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float.delay-300 {
          animation-delay: 300ms;
        }

        .animate-float.delay-500 {
          animation-delay: 500ms;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .glitch-effect {
          animation: glitch 8s infinite linear alternate-reverse;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }

        .matrix-rain {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .matrix-rain::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 48%,
            cyan 49%,
            cyan 51%,
            transparent 52%,
            transparent 100%
          );
          background-size: 20px 100%;
          animation: matrix 10s linear infinite;
          opacity: 0.3;
        }

        @keyframes matrix {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
