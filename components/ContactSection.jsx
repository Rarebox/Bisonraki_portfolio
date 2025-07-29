// import { useState } from "react";
// import {
//   FaPaperPlane,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
//   FaDiscord,
//   FaTelegram,
//   FaCalendarAlt,
// } from "react-icons/fa";

// const ContactSection = ({ data, profile }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate form submission - replace with actual API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto mb-8"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">{data.description}</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-300 mb-2"
//                 >
//                   {data.form.nameLabel}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-400 focus:outline-none text-white placeholder:text-gray-500"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-300 mb-2"
//                 >
//                   {data.form.emailLabel}
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-400 focus:outline-none text-white placeholder:text-gray-500"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-300 mb-2"
//                 >
//                   {data.form.subjectLabel}
//                 </label>
//                 <select
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-400 focus:outline-none text-white"
//                 >
//                   <option value="">Select a project type</option>
//                   {data.form.subjects.map((subject, index) => (
//                     <option key={index} value={subject}>
//                       {subject}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-300 mb-2"
//                 >
//                   {data.form.messageLabel}
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-indigo-400 focus:outline-none text-white placeholder:text-gray-500"
//                   placeholder="Tell me about your project..."
//                 ></textarea>
//               </div>

//               {submitStatus && (
//                 <div
//                   className={`p-4 rounded-lg ${
//                     submitStatus === "success"
//                       ? "bg-teal-500/10 border border-teal-500/30 text-teal-400"
//                       : "bg-red-500/10 border border-red-500/30 text-red-400"
//                   }`}
//                 >
//                   {submitStatus === "success"
//                     ? "Message sent successfully! I'll get back to you soon."
//                     : "Something went wrong. Please try again later."}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane />
//                     <span>{data.form.submitText}</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             {/* Contact Details */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white">Get In Touch</h3>

//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-300">
//                   <FaMapMarkerAlt className="text-indigo-400" />
//                   <span>{profile.location}</span>
//                 </div>

//                 <a
//                   href={`mailto:${profile.email}`}
//                   className="flex items-center space-x-4 text-gray-300 hover:text-indigo-400 transition-colors"
//                 >
//                   <FaEnvelope className="text-indigo-400" />
//                   <span>{profile.email}</span>
//                 </a>

//                 <a
//                   href={`tel:${profile.phone}`}
//                   className="flex items-center space-x-4 text-gray-300 hover:text-indigo-400 transition-colors"
//                 >
//                   <FaPhone className="text-indigo-400" />
//                   <span>{profile.phone}</span>
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white">
//                 Connect With Me
//               </h3>

//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 text-gray-300">
//                   <FaDiscord className="text-indigo-400" />
//                   <span>{data.social.discord.value}</span>
//                 </div>

//                 <div className="flex items-center space-x-4 text-gray-300">
//                   <FaTelegram className="text-teal-400" />
//                   <span>{data.social.telegram.value}</span>
//                 </div>

//                 <a
//                   href={data.social.calendly.value}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-4 text-gray-300 hover:text-indigo-400 transition-colors"
//                 >
//                   <FaCalendarAlt className="text-amber-400" />
//                   <span>{data.social.calendly.label}</span>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Contact Card */}
//             <div className="p-6 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-lg border border-indigo-400/20">
//               <h4 className="text-lg font-semibold mb-3">
//                 Prefer to Schedule a Call?
//               </h4>
//               <p className="text-gray-300 mb-4">
//                 Book a 30-minute consultation to discuss your project in detail.
//               </p>
//               <a
//                 href={data.social.calendly.value}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
//               >
//                 <FaCalendarAlt />
//                 <span>Schedule Now</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Background Decorations */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState, useEffect, useRef } from "react";
//import { useForm, ValidationError } from "@formspree/react";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaDiscord,
  FaTelegram,
  FaCalendarAlt,
  FaRocket,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const ContactSection = ({ data, profile }) => {
  //const [state, handleSubmit] = useForm(FORMSPREE_API_KEY);
  const [isVisible, setIsVisible] = useState(false);
 
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

  // Grid pattern SVG properly encoded
  const gridPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g fill="#334155" fill-opacity="0.05">
          <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/>
        </g>
      </g>
    </svg>
  `)}`;

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/neural-pattern.svg')] opacity-5"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("${gridPattern}")` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white">
              {data.title}
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full blur-sm"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative group">
  {/* Glowing effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-lg"></div>

  <div className="relative bg-slate-800/40 backdrop-blur-md p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
    <form
      action="https://formbold.com/s/3j0DB"
      method="POST"
      encType="multipart/form-data"
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="john@example.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20"
          placeholder="Project Inquiry"
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          File (optional)
        </label>
        <input
          type="file"
          name="file"
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/20 file:text-cyan-400 hover:file:bg-cyan-500/30"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder:text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20 resize-none"
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 group"
      >
        <span>Send Message</span>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </button>
    </form>
  </div>
</div>

          </div>

          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Contact Details */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-teal-500/5 rounded-xl blur-lg"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span>Get In Touch</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors">
                    <FaMapMarkerAlt className="text-indigo-400 flex-shrink-0" />
                    <span>{profile.location}</span>
                  </div>

                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <FaEnvelope className="text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>{profile.email}</span>
                  </a>

                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <FaPhone className="text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>{profile.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-teal-500/5 rounded-xl blur-lg"></div>
              <div className="relative bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  <span>Connect With Me</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                    <FaDiscord className="text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>{data.social.discord.value}</span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                    <FaTelegram className="text-teal-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>{data.social.telegram.value}</span>
                  </div>

                  <a
                    href={data.social.calendly.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <FaCalendarAlt className="text-amber-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>{data.social.calendly.label}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-lg blur-lg"></div>
              <div className="relative p-6 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-lg border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <FaRocket className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      Prefer to Schedule a Call?
                    </h4>
                    <p className="text-gray-300 mb-4 text-sm">
                      Book a 30-minute consultation to discuss your project in
                      detail.
                    </p>
                    <a
                      href={data.social.calendly.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                      <span>Schedule Now</span>
                    </a>
                  </div>
                </div>
              </div>
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

        /* Custom scrollbar for contact section */
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

        /* Fix for select arrow in dark mode */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
