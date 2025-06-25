"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaExpand,
  FaCompress,
  FaChartLine,
  FaStar,
  FaRocket,
  FaAward,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Research Intern",
    company: "McMaster University",
    period: "March 2025 – Present",
    location: "Hamilton, ON",
    icon: FaGraduationCap,
    description: [
      "Engineered a state-of-the-art multi machine learning model for conducting prognosis prediction of pulmonary fibrosis with improved error rate of ± 47mL (human lung holds an approximate 6000mL)",
      "Implemented novel techniques for lung volume quantification, including watershed algorithms from CT scans",
      "Developed a Self-attention CNN model to classify fibrotic tissue patterns and improve prognosis accuracy",
      "Conducting research and testing on in-clinic data under Prof. Dr. Martin Kolb and Prof. Sarah Svenningson",
    ],
    tags: [
      "Machine Learning",
      "Medical AI",
      "CNN",
      "Self-attention",
      "CT Scans",
      "Research",
    ],
    color: "from-red-400 via-pink-500 to-rose-600",
    bgColor: "from-red-500/20 via-pink-500/20 to-rose-500/20",
    borderColor: "border-red-400/30",
    achievements: "± 47mL Error Rate",
    impact: "Advancing Medical AI for Lung Disease Diagnosis",
    metrics: "99.2% Accuracy",
    category: "Medical Research",
    pattern: "research",
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Clearcable Networks™",
    period: "June 2024 – August 2024",
    location: "Hamilton, ON",
    icon: FaCode,
    description: [
      "Enhanced the company's internal chatbot system, improving response accuracy and user engagement by 35%, resulting in faster client communication and support resolution times",
      "Developed automation scripts to streamline manual workflows, including emergency ticket information retrieval from clients, reducing response time by 43%",
      "Improved team productivity by over 20% through optimizing communication tools and internal systems",
    ],
    tags: [
      "Python",
      "Automation",
      "Chatbots",
      "Workflow Optimization",
      "Team Productivity",
    ],
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    bgColor: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    borderColor: "border-cyan-400/30",
    achievements: "35% Accuracy + 43% Speed",
    impact: "Enterprise Communication Enhancement",
    metrics: "20% Productivity Boost",
    category: "Software Engineering",
    pattern: "engineering",
  },
  {
    id: 3,
    role: "ML Research Intern",
    company: "University of Waterloo",
    period: "March 2023 – June 2023",
    location: "Waterloo, ON",
    icon: FaBriefcase,
    description: [
      "Mentored by Prof. Otman Basir and PhD student Daniel Zadeh on Machine Learning and neural network design",
      "Gained hands-on experience in model development, optimization and deployment for real-time computer vision",
      "Engineered a real-time ASL-to-text-to-voice translator with 98.4% accuracy using Machine Learning",
    ],
    tags: [
      "Machine Learning",
      "Computer Vision",
      "ASL Translation",
      "Neural Networks",
      "Real-time Processing",
    ],
    color: "from-emerald-400 via-green-500 to-teal-600",
    bgColor: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
    borderColor: "border-emerald-400/30",
    achievements: "98.4% ASL Accuracy",
    impact: "Accessibility Technology Innovation",
    metrics: "Real-time Processing",
    category: "AI Research",
    pattern: "ai",
  },
  {
    id: 4,
    role: "Volunteer Assistant",
    company: "Kumon Institute of Education Co. Ltd.",
    period: "June 2022 – July 2023",
    location: "Port Elgin, ON",
    icon: FaUsers,
    description: [
      "Dedicated over 200 hours tutoring and supporting students in developing core math and reading skills",
      "Assisted instructors with grading, marking, and maintaining accurate student progress records",
    ],
    tags: [
      "Education",
      "Mentorship",
      "Tutoring",
      "Student Development",
      "200+ Hours",
    ],
    color: "from-purple-400 via-violet-500 to-indigo-600",
    bgColor: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    borderColor: "border-purple-400/30",
    achievements: "200+ Hours Dedication",
    impact: "Student Development & Educational Support",
    metrics: "Community Impact",
    category: "Education",
    pattern: "education",
  },
];

const PatternOverlay = ({
  pattern,
  isActive,
}: {
  pattern: string;
  isActive: boolean;
}) => {
  const patterns = {
    research: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 200"
      >
        <defs>
          <pattern
            id="research-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <path
              d="M10,10 L30,30 M30,10 L10,30"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#research-pattern)" />
      </svg>
    ),
    engineering: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 200"
      >
        <defs>
          <pattern
            id="engineering-pattern"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="5"
              y="5"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="15" cy="15" r="3" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#engineering-pattern)" />
      </svg>
    ),
    ai: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 200"
      >
        <defs>
          <pattern
            id="ai-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="25,5 45,20 45,35 25,45 5,35 5,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="25" cy="25" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-pattern)" />
      </svg>
    ),
    education: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 200"
      >
        <defs>
          <pattern
            id="education-pattern"
            x="0"
            y="0"
            width="35"
            height="35"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M5,25 L17.5,10 L30,25 M10,25 L25,25"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="17.5" cy="20" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#education-pattern)" />
      </svg>
    ),
  };

  return (
    <motion.div
      className="absolute inset-0 text-cyan-400"
      animate={{
        opacity: isActive ? 0.2 : 0.05,
        scale: isActive ? 1.02 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      {patterns[pattern as keyof typeof patterns]}
    </motion.div>
  );
};

const MetricsBadge = ({
  metrics,
  color,
  delay,
}: {
  metrics: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className={`absolute -top-3 -right-3 bg-gradient-to-r ${color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white/20`}
  >
    <FaChartLine className="inline mr-1" />
    {metrics}
  </motion.div>
);

const FloatingElements = ({
  isHovered,
  color,
}: {
  isHovered: boolean;
  color: string;
}) => (
  <AnimatePresence>
    {isHovered && (
      <>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${color} rounded-full`}
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 200,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [null, -30, -60],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Floating icons */}
        <motion.div
          className="absolute top-4 right-4 text-cyan-400/30"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FaRocket size={20} />
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4 text-cyan-400/30"
          animate={{
            y: [0, -8, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <FaStar size={16} />
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const ExperienceCard = ({
  experience,
  index,
  inView,
  isHovered,
  setHoveredCard,
  expandedCard,
  setExpandedCard,
}: {
  experience: any;
  index: number;
  inView: boolean;
  isHovered: boolean;
  setHoveredCard: (id: number | null) => void;
  expandedCard: number | null;
  setExpandedCard: (id: number | null) => void;
}) => {
  const Icon = experience.icon;
  const isExpanded = expandedCard === experience.id;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.3,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} gap-8 items-center mb-20 relative`}
      onHoverStart={() => setHoveredCard(experience.id)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      {/* Timeline Element */}
      <div className="relative">
        {/* Main timeline line */}
        {index < experiences.length - 1 && (
          <motion.div
            className="absolute top-16 left-8 w-0.5 h-40 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: index * 0.3 + 1 }}
            style={{ transformOrigin: "top" }}
          />
        )}

        {/* Animated Icon Container */}
        <motion.div
          className="relative z-10 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          {/* Outer ring */}
          <motion.div
            className={`w-20 h-20 rounded-full border-4 ${experience.borderColor} bg-gradient-to-br ${experience.bgColor} backdrop-blur-md flex items-center justify-center relative overflow-hidden`}
            animate={{
              boxShadow: isHovered
                ? [
                    "0 0 20px rgba(0, 255, 255, 0.3)",
                    "0 0 40px rgba(0, 255, 255, 0.6)",
                    "0 0 20px rgba(0, 255, 255, 0.3)",
                  ]
                : "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon
              className={`text-2xl bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
            />

            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.5), transparent)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner glow */}
            <motion.div
              className={`absolute inset-2 rounded-full bg-gradient-to-br ${experience.color} opacity-20`}
              animate={{
                scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
                opacity: isHovered ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Pulsing rings */}
          <motion.div
            className={`absolute w-20 h-20 rounded-full border-2 border-cyan-400/30`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />

          <motion.div
            className={`absolute w-20 h-20 rounded-full border border-cyan-400/20`}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.7,
            }}
          />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        className="flex-1 max-w-2xl relative"
        layout
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border-2 ${experience.borderColor} cursor-pointer group`}
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`,
          }}
          whileHover={{
            scale: 1.02,
            y: -10,
            rotateY: isLeft ? 2 : -2,
            boxShadow: "0 30px 60px rgba(0, 255, 255, 0.2)",
          }}
          animate={{
            borderColor: isHovered
              ? "rgba(0, 255, 255, 0.6)"
              : experience.borderColor === "border-red-400/30"
                ? "rgba(248, 113, 113, 0.3)"
                : experience.borderColor === "border-cyan-400/30"
                  ? "rgba(34, 211, 238, 0.3)"
                  : experience.borderColor === "border-emerald-400/30"
                    ? "rgba(52, 211, 153, 0.3)"
                    : experience.borderColor === "border-purple-400/30"
                      ? "rgba(167, 139, 250, 0.3)"
                      : "rgba(34, 211, 238, 0.3)",
            boxShadow: isHovered
              ? "0 25px 50px rgba(0, 255, 255, 0.15)"
              : "0 10px 25px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => setExpandedCard(isExpanded ? null : experience.id)}
        >
          {/* Background Pattern */}
          <PatternOverlay pattern={experience.pattern} isActive={isHovered} />

          {/* Gradient Overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-0 group-hover:opacity-100`}
            transition={{ duration: 0.5 }}
          />

          {/* Main Content */}
          <div className="relative z-10 p-8">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                {/* Category Badge */}
                <motion.div
                  className={`inline-block bg-gradient-to-r ${experience.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, type: "spring" }}
                >
                  {experience.category}
                </motion.div>

                {/* Role and Company */}
                <motion.h3
                  className="text-3xl font-bold text-white mb-2 font-apple-heading"
                  style={{
                    background: `linear-gradient(135deg, white 0%, #00FFFF 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: isHovered ? "transparent" : "white",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {experience.role}
                </motion.h3>

                <h4
                  className={`text-xl font-semibold mb-3 font-apple-body bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
                >
                  {experience.company}
                </h4>

                {/* Period and Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300 font-apple-body">
                  <span className="text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                    📅 {experience.period}
                  </span>
                  <span className="text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                    📍 {experience.location}
                  </span>
                </div>
              </div>

              {/* Expand Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                {isExpanded ? <FaCompress size={16} /> : <FaExpand size={16} />}
              </motion.button>
            </div>

            {/* Achievement Section */}
            <motion.div
              className="mb-6 p-4 bg-gray-900/50 rounded-2xl border border-cyan-400/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 + 0.7 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`text-lg font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-1`}
                  >
                    🏆 {experience.achievements}
                  </p>
                  <p className="text-gray-400 text-sm font-apple-body italic">
                    {experience.impact}
                  </p>
                </div>
                <div className="text-right">
                  <FaAward
                    className={`text-2xl bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <AnimatePresence>
              <motion.div className="mb-6" layout>
                <ul className="space-y-3">
                  {experience.description
                    .slice(0, isExpanded ? experience.description.length : 2)
                    .map((item: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 + 0.9 + i * 0.1 }}
                        className="flex items-start text-gray-300 font-apple-body leading-relaxed"
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mr-4 mt-2 flex-shrink-0`}
                          animate={{
                            scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                            boxShadow: isHovered
                              ? [
                                  "0 0 0px rgba(0, 255, 255, 0)",
                                  "0 0 10px rgba(0, 255, 255, 0.5)",
                                  "0 0 0px rgba(0, 255, 255, 0)",
                                ]
                              : "0 0 0px rgba(0, 255, 255, 0)",
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                        <span className="flex-1">{item}</span>
                      </motion.li>
                    ))}
                </ul>

                {!isExpanded && experience.description.length > 2 && (
                  <motion.p
                    className={`text-center mt-4 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent font-semibold cursor-pointer hover:scale-105 transition-transform`}
                  >
                    ▼ {experience.description.length - 2} more achievements
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Tags */}
            <motion.div className="flex flex-wrap gap-2" layout>
              {experience.tags.map((tag: string, i: number) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: index * 0.3 + 1.1 + i * 0.05,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 8px 25px rgba(0, 255, 255, 0.3)",
                  }}
                  className={`bg-gradient-to-r ${experience.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20 cursor-default font-apple-body`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Metrics Badge */}
          <MetricsBadge
            metrics={experience.metrics}
            color={experience.color}
            delay={index * 0.3 + 1.3}
          />

          {/* Floating Elements */}
          <FloatingElements isHovered={isHovered} color={experience.color} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="mesh"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#mesh)"
              className="text-cyan-400"
            />
          </svg>
        </div>

        {/* Floating orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)`,
              left: `${10 + i * 25}%`,
              top: `${5 + i * 20}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 5,
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
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-apple-heading relative"
            animate={{
              textShadow: hoveredCard
                ? "0 0 30px rgba(0, 255, 255, 0.6)"
                : "0 0 0px rgba(0, 255, 255, 0)",
            }}
            style={{
              background:
                "linear-gradient(135deg, white 0%, #00FFFF 50%, white 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Professional <span className="text-cyan-400">Journey</span>
          </motion.h2>

          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto font-apple-body leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            From cutting-edge AI research to enterprise software engineering —
            building the future of technology with innovation, precision, and
            purpose.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              inView={inView}
              isHovered={hoveredCard === experience.id}
              setHoveredCard={setHoveredCard}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center mt-24"
        >
          <motion.div
            className="inline-block relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80" />
            <div className="relative z-10 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-10">
              <h3 className="text-4xl font-bold text-white mb-6 font-apple-heading">
                Ready for the Next Challenge
              </h3>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto font-apple-body leading-relaxed">
                Continuously pushing the boundaries of AI and technology to
                create meaningful impact in healthcare, sustainability, and
                human-computer interaction.
              </p>

              <motion.div
                className="flex justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <div className="flex items-center gap-2 text-cyan-400">
                  <FaRocket />
                  <span className="font-semibold">Innovation</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <FaStar />
                  <span className="font-semibold">Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <FaAward />
                  <span className="font-semibold">Impact</span>
                </div>
              </motion.div>
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.8), transparent)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
