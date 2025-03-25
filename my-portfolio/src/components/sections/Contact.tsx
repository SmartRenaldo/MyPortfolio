// src/components/sections/Contact.tsx
import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const secondaryBgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  // Function to handle form reset after submission
  const handleSubmitSuccess = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-6">
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-500 p-1 rounded-full">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="ml-3">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <div className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-500 p-1 rounded-full">
                  <Linkedin size={18} className="text-white" />
                </div>
                <span className="ml-3">linkedin.com/in/yourusername</span>
              </div>
              <div className="flex items-center">
                <div className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-500 p-1 rounded-full">
                  <Github size={18} className="text-white" />
                </div>
                <span className="ml-3">github.com/yourusername</span>
              </div>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 text-green-800 dark:text-green-100 rounded-lg border border-green-500/20">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </div>

          <div
            className={`p-6 rounded-lg ${secondaryBgColor} border ${borderColor}`}
          >
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            {/* Replace with your Formspree endpoint */}
            <form
              action="https://formspree.io/f/xzzegarg"
              method="POST"
              className="space-y-4"
              onSubmit={() => handleSubmitSuccess()}
            >
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-2 rounded-lg ${bgColor} border ${borderColor} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-2 rounded-lg ${bgColor} border ${borderColor} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg ${bgColor} border ${borderColor} focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg hover:from-purple-700 hover:to-indigo-600 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
