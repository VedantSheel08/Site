"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaPhone,
  FaBriefcase,
} from "react-icons/fa";

const navItems = [
  { id: "hero", icon: FaHome, label: "Home" },
  { id: "about", icon: FaUser, label: "About" },
  { id: "experience", icon: FaBriefcase, label: "Experience" },
  { id: "projects", icon: FaProjectDiagram, label: "Projects" },
  { id: "awards", icon: FaTrophy, label: "Awards" },
  { id: "contact", icon: FaEnvelope, label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Left Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-6 left-6 z-50"
      >
        <div className="flex flex-col">
          <h1
            className="text-xl font-bold text-white"
            style={{
              fontFamily:
                "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
            }}
          >
            Vedant Sheel
          </h1>
          <p
            className="text-sm text-cyan-400 mb-3"
            style={{
              fontFamily:
                "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
            }}
          >
            Building Tech With Purpose.
          </p>
          <div className="flex gap-3">
            <motion.a
              href="https://linkedin.com/in/vedantsheel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <FaLinkedin size={14} />
            </motion.a>
            <motion.a
              href="mailto:v3dant.sheel456@gmail.com"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <FaEnvelope size={14} />
            </motion.a>
            <motion.a
              href="tel:+12262001974"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-black/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <FaPhone size={14} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border border-cyan-400/30"
            : "bg-transparent"
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-cyan-400 text-black"
                  : "text-cyan-400 hover:bg-cyan-400/20"
              }`}
            >
              <Icon size={18} />

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-cyan-400 rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black border border-cyan-400/30 rounded-lg px-2 py-1 text-xs text-cyan-400 whitespace-nowrap pointer-events-none"
              >
                {item.label}
              </motion.div>
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="lg:hidden"
      >
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-6 right-6 z-50 p-3 bg-black/80 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-400"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex items-center justify-center"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400 text-black"
                          : "text-cyan-400 hover:bg-cyan-400/20"
                      }`}
                    >
                      <Icon size={24} />
                      <span className="text-xl font-semibold">
                        {item.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-50 hidden lg:block"
      >
        <div className="w-16 h-16 border-2 border-cyan-400/30 rounded-full relative">
          <motion.div
            className="absolute inset-1 border-2 border-cyan-400 rounded-full"
            style={{
              background:
                typeof window !== "undefined"
                  ? `conic-gradient(from 0deg, #00FFFF ${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 360}deg, transparent 0deg)`
                  : "conic-gradient(from 0deg, #00FFFF 0deg, transparent 0deg)",
            }}
          />
          <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
            <span className="text-cyan-400 text-xs font-bold">
              {typeof window !== "undefined"
                ? Math.round(
                    (window.scrollY /
                      (document.documentElement.scrollHeight -
                        window.innerHeight)) *
                      100,
                  )
                : 0}
              %
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
