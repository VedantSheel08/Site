"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/data/portfolio";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-apple-heading">
            Let's <span className="text-cyan-400">Connect</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-6 font-apple-heading">
                Get in Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to collaborate on innovative AI projects,
                discuss research opportunities, or simply connect with fellow
                tech enthusiasts. Whether you're looking for a developer,
                researcher, or just want to chat about the future of AI, I'd
                love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <FaLinkedin className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-300">{personalInfo.linkedin}</p>
                </div>
              </motion.a>

              <motion.a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <FaGithub className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-300">{personalInfo.github}</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-cyan-400 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-cyan-400 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-cyan-400 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={
                    !isSubmitting && !submitted
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                        }
                      : {}
                  }
                  whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    submitted
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:from-cyan-300 hover:to-blue-500"
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : submitted ? (
                    <>
                      <span>Message Sent!</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        ✓
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
