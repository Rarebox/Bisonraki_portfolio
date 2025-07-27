import portfolioData from "../data/portfolio-data";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import TechnologiesSection from "../components/TechnologiesSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ThreeBackground from "../components/DynamicThreeBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Header data={portfolioData} />
        <main>
          <HeroSection
            data={portfolioData.hero}
            profile={portfolioData.profile}
          />
          <AboutSection
            data={portfolioData.about}
            profile={portfolioData.profile}
          />
          <ProjectsSection data={portfolioData.projects} />
          <TechnologiesSection data={portfolioData.technologies} />
          <FAQSection data={portfolioData.faq} />
          <ContactSection
            data={portfolioData.contact}
            profile={portfolioData.profile}
          />
        </main>
        <Footer data={portfolioData.footer} profile={portfolioData.profile} />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", sans-serif;
          background: ${portfolioData.theme.colors.dark};
          color: white;
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${portfolioData.theme.colors.dark};
        }

        ::-webkit-scrollbar-thumb {
          background: ${portfolioData.theme.colors.primary};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }

        .gradient-text {
          background: ${portfolioData.theme.gradients.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .neon-glow {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
