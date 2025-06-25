"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTimes,
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
  FaAtom,
  FaLeaf,
  FaMicrophone,
} from "react-icons/fa";

const awards = [
  {
    id: 1,
    name: "CWSF Silver Medalist",
    year: "2022 & 2023",
    icon: FaMedal,
    color: "from-gray-300 to-gray-500",
    description:
      "Canada's top national science fair. Awarded silver twice for innovations in machine learning and sustainability.",
    category: "National Recognition",
  },
  {
    id: 2,
    name: "RISE Global Finalist",
    year: "2024",
    icon: FaStar,
    color: "from-yellow-400 to-orange-600",
    description:
      "Recognized as one of the most promising youth worldwide in an international innovation program.",
    category: "International Honor",
  },
  {
    id: 3,
    name: "Best of Fair – BRSTF",
    year: "2023",
    icon: FaTrophy,
    color: "from-yellow-400 to-yellow-600",
    description:
      "Selected top project across the entire fair for impact and creativity.",
    category: "Fair Excellence",
  },
  {
    id: 4,
    name: "NPX Innovation Award",
    year: "2022",
    icon: FaAward,
    color: "from-purple-400 to-indigo-600",
    description:
      "Recognized for creating a novel, energy-related invention using real-world physics.",
    category: "Innovation",
  },
  {
    id: 5,
    name: "Shad Canada Scholarship",
    year: "2023",
    icon: FaStar,
    color: "from-red-400 to-pink-600",
    description:
      "Awarded to top Canadian innovators for leadership and STEAM excellence.",
    category: "Leadership",
  },
  {
    id: 6,
    name: "Western University Scholarships",
    year: "Multiple",
    icon: FaAward,
    color: "from-blue-400 to-cyan-600",
    description:
      "Entrance scholarships for academic and extracurricular achievement.",
    category: "Academic Merit",
  },
  {
    id: 7,
    name: "University of Alberta Scholarship",
    year: "2023",
    icon: FaTrophy,
    color: "from-green-400 to-teal-600",
    description:
      "Prestigious entrance award for outstanding students in science/engineering.",
    category: "Academic Excellence",
  },
  {
    id: 8,
    name: "John Lennon Award – Physical Sciences",
    year: "2023",
    icon: FaAtom,
    color: "from-cyan-400 to-blue-600",
    description: "Given to the best physical science project at BRSTF.",
    category: "Science Excellence",
  },
  {
    id: 9,
    name: "Richard Brown Persistence Award",
    year: "2023",
    icon: FaMedal,
    color: "from-orange-400 to-red-600",
    description:
      "For demonstrating resilience, creativity, and problem-solving over time.",
    category: "Innovation",
  },
  {
    id: 10,
    name: "Canadian Nuclear Society Award",
    year: "2022",
    icon: FaAtom,
    color: "from-indigo-400 to-purple-600",
    description: "Best energy/physics-related project at BRSTF.",
    category: "Energy & Physics",
  },
  {
    id: 11,
    name: "Bruce Power Science & Tech Award",
    year: "2023",
    icon: FaLeaf,
    color: "from-green-400 to-emerald-600",
    description:
      "School-level recognition for leadership in innovation and tech.",
    category: "School Leadership",
  },
  {
    id: 12,
    name: "Public Speaking Gold Medalist",
    year: "2023",
    icon: FaMicrophone,
    color: "from-yellow-400 to-amber-600",
    description:
      "District #3 and Northport Finals — awarded for persuasive delivery and clarity.",
    category: "Communication",
  },
];

const AwardModal = ({
  award,
  onClose,
}: {
  award: any;
  onClose: () => void;
}) => {
  const Icon = award.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.7, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-gray-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8 max-w-md w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 rounded-3xl`}
        />

        <div className="relative z-10">
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-0 right-0 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
          >
            <FaTimes size={14} />
          </motion.button>

          {/* Award icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", damping: 15 }}
            className="text-center mb-6"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center mb-4 shadow-2xl`}
            >
              <Icon className="text-white text-3xl" />
            </div>
            <div className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
              {award.category}
            </div>
          </motion.div>

          {/* Award content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2 font-apple-heading">
              {award.name}
            </h2>
            <p
              className="text-cyan-400 text-lg font-semibold mb-4"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              {award.year}
            </p>
            <p
              className="text-gray-300 leading-relaxed"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              {award.description}
            </p>
          </motion.div>

          {/* Action button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold py-3 rounded-xl transition-all duration-300 hover:from-cyan-300 hover:to-blue-500 font-apple-body"
          >
            Return to Awards
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AwardButton = ({
  award,
  index,
  onClick,
  inView,
}: {
  award: any;
  index: number;
  onClick: () => void;
  inView: boolean;
}) => {
  const Icon = award.icon;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-500 text-left w-full overflow-hidden"
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <Icon className="text-white text-lg" />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1 truncate"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              {award.name}
            </h3>
            <p
              className="text-cyan-400 text-sm font-semibold"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              {award.year}
            </p>
          </div>
        </div>

        <div className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded-full inline-block">
          {award.category}
        </div>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-cyan-400/0 group-hover:border-cyan-400/50"
        animate={{
          boxShadow: [
            "0 0 0 rgba(0, 255, 255, 0)",
            "0 0 20px rgba(0, 255, 255, 0.3)",
            "0 0 0 rgba(0, 255, 255, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default function AwardsSection() {
  const [selectedAward, setSelectedAward] = useState<(typeof awards)[0] | null>(
    null,
  );
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="awards"
      className="min-h-screen bg-black py-20 px-6 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-apple-heading">
            Awards & <span className="text-cyan-400">Recognition</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{
              fontFamily:
                "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
            }}
          >
            Recognition for excellence in AI innovation, research, and
            leadership across national and international competitions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {awards.map((award, index) => (
            <AwardButton
              key={award.id}
              award={award}
              index={index}
              onClick={() => setSelectedAward(award)}
              inView={inView}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl p-8">
            <h3
              className="text-3xl font-bold text-black mb-4"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              What's Next?
            </h3>
            <p
              className="text-black text-lg"
              style={{
                fontFamily:
                  "-apple-system, SF Pro Display, Inter, Helvetica Neue, sans-serif",
              }}
            >
              Continuing to push the boundaries of AI research and innovation,
              with upcoming projects in quantum machine learning and sustainable
              technology.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAward && (
          <AwardModal
            award={selectedAward}
            onClose={() => setSelectedAward(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
