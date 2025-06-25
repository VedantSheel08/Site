"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load immediately for debugging
    setIsLoaded(true);

    // Keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) return; // Avoid conflicts with browser shortcuts

      switch (e.key.toLowerCase()) {
        case "h":
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "a":
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "e":
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "p":
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "w":
          document
            .getElementById("awards")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "c":
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "r":
          window.open("/api/resume", "_blank");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Skip loading screen for now
  // if (!isLoaded) {
  //   return <LoadingScreen />
  // }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
    >
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <motion.div
        id="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ExperienceSection />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectsSection />
      </motion.div>

      {/* Awards Section */}
      <motion.div
        id="awards"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AwardsSection />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactSection />
      </motion.div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Keyboard shortcuts help */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed bottom-4 left-4 z-40 text-xs text-gray-500 hidden lg:block"
      >
        <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-3">
          <p className="mb-1 text-cyan-400 font-semibold">Quick Navigation:</p>
          <div className="space-y-1">
            <motion.button
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                H
              </kbd>{" "}
              Home
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                A
              </kbd>{" "}
              About
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                E
              </kbd>{" "}
              Experience
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                P
              </kbd>{" "}
              Projects
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("awards")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                W
              </kbd>{" "}
              Awards
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                C
              </kbd>{" "}
              Contact
            </motion.button>
            <motion.button
              onClick={() => window.open("/api/resume", "_blank")}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 w-full text-left hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <kbd className="bg-gray-800 px-1 rounded hover:bg-cyan-400/20 transition-colors">
                R
              </kbd>{" "}
              Resume
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-black border-t border-cyan-400/20 py-8 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 mb-4">
            © 2024 Vedant Sheel. Crafted with passion for innovation and AI.
          </p>
          <div className="flex justify-center gap-6 text-sm text-cyan-400">
            <a
              href="mailto:v3dant.sheel456@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/vedantsheel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vedantsheel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.footer>
    </motion.main>
  );
}
