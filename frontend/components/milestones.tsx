"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import { Calendar } from "lucide-react";

/* ================= DATA ================= */

const milestones = [
  {
    date: "June 2025",
    title: "Topic Assessment Form",
    desc: "Initial validation of research feasibility and academic relevance.",
    marks: 0,
  },
  {
    date: "July 2025",
    title: "Project Charter",
    desc: "Defines project scope, objectives, and overall planning.",
    marks: 0,
  },
  {
    date: "September 2025",
    title: "Proposal Presentation",
    desc: "Presentation of research idea and methodology.",
    marks: 6,
  },
  {
    date: "August 2025",
    title: "Proposal Report",
    desc: "Initial research proposal submission for review.",
    marks: 6,
  },
  {
    date: "December 2025",
    title: "Progress Presentation I",
    desc: "Evaluation of 50% project completion.",
    marks: 15,
  },
  {
    date: "December 2026",
    title: "Checklist I",
    desc: "Research documentation and paper submission.",
    marks: 1,
  },
  {
    date: "March 2026",
    title: "Progress Presentation II",
    desc: "Evaluation of 90% project completion.",
    marks: 18,
  },
  {
    date: "March 2026",
    title: "Checklist II",
    desc: "UI/UX demonstration and Deployment of the project.",
    marks: 1,
  },
  {
    date: "April 2026",
    title: "Final Report Submission",
    desc: "Submission of complete research thesis.",
    marks: 15,
  },
  {
    date: "April 2026",
    title: "Final Report Group",
    desc: "Submission of complete research group thesis.",
    marks: 4,
  },
  {
    date: "April 2026",
    title: "Final Presentation & Viva",
    desc: "Final evaluation including viva examination.",
    marks: 20,
  },
  {
    date: "May 2026",
    title: "Website & Logbook Submission",
    desc: "Final project website and documentation.",
    marks: 4,
  },
  {
    date: "May 2026",
    title: "Research Paper Submission",
    desc: "Research paper submission to a conference or journal.",
    marks: 10,
  },
];

/* ================= COMPONENT ================= */

export default function Milestones() {
  const { ref } = useSectionInView("Milestones", 0.5);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="milestones"
      className="scroll-mt-20 max-w-5xl mx-auto px-4 sm:px-6 py-24"
    >
      {/* HEADER with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
            Project Timeline
          </span>
        </div>

        <SectionHeading>Research Milestones</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A structured timeline highlighting key assessments, deliverables, and
          evaluation milestones of the FabricVision research project.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div ref={containerRef} className="relative">
        {/* Vertical Line with gradient and animated fill */}
        <div className="absolute left-[30px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full"></div>

        {/* Animated progress line */}
        <motion.div
          className="absolute left-[30px] top-0 w-[3px] bg-gradient-to-b from-blue-500 via-blue-600 to-purple-500 rounded-full"
          style={{ height: lineHeight }}
        ></motion.div>

        <div className="space-y-16">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Main Card Container */}
              <div className="relative pl-[70px]">
                {/* Dot with pulse animation */}
                <div className="absolute left-[18px] top-0">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, type: "spring" }}
                      className="w-7 h-7 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 relative"
                    ></motion.div>
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                      className="absolute inset-0 w-7 h-7 bg-blue-400 rounded-full opacity-40"
                    ></motion.div>
                  </div>
                </div>

                {/* Card with glow effect on hover */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 hover:shadow-lg"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Top Row: Date and Category */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    {/* Date */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Title - Bigger and bolder */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Marks Section - Only show if marks > 0 */}
                  {item.marks > 0 && (
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Marks Allocated:
                        </span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {item.marks}
                        </span>
                      </div>

                      {/* Progress Bar with label */}
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.marks * 5}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer"></div>
                          </motion.div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {item.marks * 5}%
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 sm:mb-[-20px] flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* Add shimmer animation to global CSS or here */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
