"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaFileAlt,
  FaRocket,
} from "react-icons/fa";

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: any;
  index: number;
  onClick: () => void;
}) => {
  const hasViewCode =
    project.buttons?.viewCode && project.buttons.viewCode !== "pending";
  const hasViewPaper =
    project.buttons?.viewPaper && project.buttons.viewPaper !== "pending";
  const hasLiveDemo =
    project.buttons?.liveDemo && project.buttons.liveDemo !== "pending";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
      }}
      className="group relative bg-gray-900/80 backdrop-blur-md border border-cyan-400/20 rounded-3xl p-6 cursor-pointer overflow-hidden hover:border-cyan-400/60 transition-all duration-500"
      onClick={onClick}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(0, 255, 255, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(0, 255, 255, 0.05) 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles on hover */}
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * 300,
              y: Math.random() * 200,
              opacity: 0,
            }}
            animate={{
              y: [null, -30, -60],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Project Header */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="text-4xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {project.emoji}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 font-apple-heading line-clamp-2"
              style={{
                background: "linear-gradient(135deg, white 0%, #00FFFF 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              {project.name}
            </motion.h3>

            <span className="inline-block bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-2xl mb-4 h-48 bg-gradient-to-br from-gray-800 to-gray-900 group">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <FaExternalLinkAlt className="text-cyan-400 text-xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech: string) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-xs bg-gray-800/50 text-gray-300 px-2 py-1 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs text-cyan-400 font-medium">
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-apple-body">
          {project.description[0]}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {hasViewCode && (
            <motion.a
              href={project.buttons.viewCode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-xl text-sm font-medium hover:from-cyan-400/30 hover:to-blue-600/30 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" />
              View Code
            </motion.a>
          )}

          {hasViewPaper && (
            <motion.a
              href={project.buttons.viewPaper}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-xl text-sm font-medium hover:from-cyan-400/30 hover:to-blue-600/30 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <FaFileAlt className="group-hover:rotate-12 transition-transform" />
              View Paper
            </motion.a>
          )}

          {hasLiveDemo && (
            <motion.a
              href={project.buttons.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-4 py-2 rounded-xl text-sm font-bold hover:from-cyan-300 hover:to-blue-500 transition-all duration-300 group shadow-lg"
            >
              <FaRocket className="group-hover:rotate-12 transition-transform" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Glowing border animation */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.4), transparent)",
          padding: "2px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  const hasViewCode =
    project.buttons?.viewCode && project.buttons.viewCode !== "pending";
  const hasViewPaper =
    project.buttons?.viewPaper && project.buttons.viewPaper !== "pending";
  const hasLiveDemo =
    project.buttons?.liveDemo && project.buttons.liveDemo !== "pending";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-gray-900/95 backdrop-blur-xl border-2 border-cyan-400/30 rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-purple-600/5 rounded-3xl"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(0, 255, 255, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">{project.emoji}</span>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-apple-heading">
                  {project.name}
                </h2>
                <span className="bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors border border-cyan-400/30"
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl mb-8 h-64">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-apple-heading">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech: string) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gradient-to-r from-cyan-400/10 to-blue-600/10 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-xl font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-apple-heading">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.description.map((desc: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 flex items-start font-apple-body"
                >
                  <motion.span
                    className="text-cyan-400 mr-3 mt-1"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    •
                  </motion.span>
                  {desc}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {hasViewCode && (
              <motion.a
                href={project.buttons.viewCode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-6 py-3 rounded-xl font-medium hover:from-cyan-400/30 hover:to-blue-600/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <FaGithub size={20} />
                View Code
              </motion.a>
            )}

            {hasViewPaper && (
              <motion.a
                href={project.buttons.viewPaper}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 px-6 py-3 rounded-xl font-medium hover:from-cyan-400/30 hover:to-blue-600/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <FaFileAlt size={20} />
                View Paper
              </motion.a>
            )}

            {hasLiveDemo && (
              <motion.a
                href={project.buttons.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-6 py-3 rounded-xl font-bold hover:from-cyan-300 hover:to-blue-500 transition-all duration-300 shadow-lg"
              >
                <FaRocket size={20} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              className="text-cyan-400"
            />
          </svg>
        </div>

        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)`,
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-apple-heading"
            style={{
              background:
                "linear-gradient(135deg, white 0%, #00FFFF 50%, white 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Featured <span className="text-cyan-400">Projects</span>
          </motion.h2>

          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-apple-body leading-relaxed">
            Innovative AI solutions tackling real-world challenges across
            healthcare, sustainability, and social impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
            }}
            className="inline-block bg-gradient-to-r from-cyan-400/10 to-blue-600/10 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-4 font-apple-heading">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-300 text-lg font-apple-body mb-6">
              Currently working on quantum machine learning and sustainable
              technology solutions.
            </p>
            <motion.a
              href="https://github.com/VedantSheel08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black px-6 py-3 rounded-xl font-bold hover:from-cyan-300 hover:to-blue-500 transition-all duration-300"
            >
              <FaGithub />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
