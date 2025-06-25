"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, skills } from "@/data/portfolio";
import {
  FaBrain,
  FaCog,
  FaFlask,
  FaSchool,
  FaFolder,
  FaGlobe,
} from "react-icons/fa";

const iconComponents = [FaBrain, FaCog, FaFlask, FaSchool, FaFolder, FaGlobe];

const SkillBubble = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
      }}
      className="bg-gray-900 border border-cyan-400 rounded-full px-4 py-2 text-cyan-400 font-semibold cursor-pointer transition-all duration-300 hover:bg-cyan-400 hover:text-black"
    >
      {skill}
    </motion.div>
  );
};

const FloatingIcon = ({ Icon, index }: { Icon: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 0.6,
        y: 0,
        x: [0, 10, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{
        scale: 1.2,
        opacity: 1,
        color: "#00FFFF",
      }}
      className="absolute text-cyan-400 text-2xl cursor-pointer"
      style={{
        left: `${20 + index * 15}%`,
        top: `${30 + (index % 3) * 20}%`,
      }}
    >
      <Icon />
    </motion.div>
  );
};

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-black py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-apple-heading"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About <span className="text-cyan-400">Vedant</span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {personalInfo.intro}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                  <h4 className="text-cyan-400 font-bold text-xl mb-2">98%</h4>
                  <p className="text-gray-300">Academic GPA</p>
                </div>
                <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                  <h4 className="text-cyan-400 font-bold text-xl mb-2">15+</h4>
                  <p className="text-gray-300">AI Projects</p>
                </div>
                <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                  <h4 className="text-cyan-400 font-bold text-xl mb-2">6+</h4>
                  <p className="text-gray-300">Major Awards</p>
                </div>
                <div className="bg-gray-900 border border-cyan-400 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                  <h4 className="text-cyan-400 font-bold text-xl mb-2">4</h4>
                  <p className="text-gray-300">Leadership Roles</p>
                </div>
              </div>
            </div>

            {iconComponents.map((Icon, index) => (
              <FloatingIcon key={index} Icon={Icon} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center font-apple-heading">
              Tech Arsenal
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <SkillBubble key={skill} skill={skill} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg p-6">
                <h4 className="text-black font-bold text-xl mb-2">
                  Current Focus
                </h4>
                <p className="text-black">
                  Advancing AI for healthcare, sustainability, and social impact
                  through cutting-edge machine learning research.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
