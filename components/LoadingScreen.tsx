"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const loadingTexts = [
    "Initializing Neural Networks...",
    "Loading AI Modules...",
    "Connecting to Vedant's World...",
    "Preparing Innovation...",
    "Ready to Explore!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentText(
          loadingTexts[Math.min(textIndex, loadingTexts.length - 1)],
        );

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
        >
          <div className="text-center">
            {/* Neural Network Animation */}
            <motion.div
              className="mb-8 relative w-32 h-32 mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-blue-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-cyan-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Name Animation */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 font-apple-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-white">Vedant</span>{" "}
              <span className="text-cyan-400">Sheel</span>
            </motion.h1>

            {/* Progress Bar */}
            <div className="w-80 max-w-sm mx-auto mb-6">
              <div className="bg-gray-800 rounded-full h-2 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Loading Text */}
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-cyan-400 text-lg"
            >
              {currentText}
            </motion.p>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                  initial={{
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                    y:
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800) + 50,
                  }}
                  animate={{
                    y: -50,
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
