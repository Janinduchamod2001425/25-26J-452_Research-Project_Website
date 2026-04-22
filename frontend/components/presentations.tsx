"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import {
  Presentation,
  Eye,
  Download,
  Calendar,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";

// Import presentation thumbnails (add your actual images)
import ProposalPresThumb from "@/app/images/presentation_thumbnails/proposal.png";
import Progress1Thumb from "@/app/images/presentation_thumbnails/pp1.png";
import Progress2Thumb from "@/app/images/presentation_thumbnails/pp2.png";
import FinalPresThumb from "@/app/images/presentation_thumbnails/pp2.png";

type PresentationDoc = {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  thumbnail: StaticImageData;
  fileUrl: string;
  fileSize: string;
  duration?: string;
  attendees?: string;
  feedback?: string;
};

// Research Presentations Data
const presentations: PresentationDoc[] = [
  {
    id: 1,
    title: "Proposal Presentation",
    event: "Research Proposal Defense",
    date: "October 2024",
    description:
      "Initial research proposal presentation covering problem statement, methodology, expected outcomes, and preliminary literature review.",
    thumbnail: ProposalPresThumb,
    fileUrl: "/presentations/25-26J-452 - Proposal Presentation.pdf",
    fileSize: "4.2 MB",
    duration: "25 minutes",
    attendees: "30+",
    feedback: "Approved with minor revisions",
  },
  {
    id: 2,
    title: "Progress Presentation I",
    event: "Mid-term Evaluation",
    date: "December 2024",
    description:
      "First progress presentation demonstrating 50% project completion including system architecture, initial implementation, and preliminary results.",
    thumbnail: Progress1Thumb,
    fileUrl: "/presentations/25-26J-452 - Progress Presentation 1.pdf",
    fileSize: "1355 KB",
    duration: "30 minutes",
    attendees: "25+",
    feedback: "Good progress, on track",
  },
  {
    id: 3,
    title: "Progress Presentation II",
    event: "Final Evaluation Preview",
    date: "March 2025",
    description:
      "Second progress presentation showcasing system readiness, integration testing, validation results, and final refinements.",
    thumbnail: Progress2Thumb,
    fileUrl: "/presentations/25-26J-452 - Progress Presentation 2.pdf",
    fileSize: "933 KB",
    duration: "30 minutes",
    attendees: "28+",
    feedback: "Receive good feedback for IOT build",
  },
  {
    id: 4,
    title: "Final Presentation",
    event: "Final Defense & Viva",
    date: "May 2025",
    description:
      "Comprehensive final presentation covering complete research findings, system demonstration, evaluation results, and conclusions.",
    thumbnail: FinalPresThumb,
    fileUrl: "/presentations/final-presentation.pdf",
    fileSize: "8.5 MB",
    duration: "45 minutes",
    attendees: "35+",
    feedback: "Outstanding achievement",
  },
];

/* ------------------------ ANIMATIONS ------------------------ */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 18,
      mass: 0.8,
    },
  },
};

const softFade: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* -------------------------- UI BITS -------------------------- */

function Tag({
  children,
  variant = "orange",
}: {
  children: React.ReactNode;
  variant?: "orange" | "blue";
}) {
  const variants = {
    orange: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
    blue: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

/* -------------------------- COMPONENT -------------------------- */

export default function Presentations() {
  const { ref } = useSectionInView("Presentations", 0.5);

  // Handle document download
  const handleDownload = (pres: PresentationDoc) => {
    const link = document.createElement("a");
    link.href = pres.fileUrl;
    link.download = `${pres.title.toLowerCase().replace(/\s+/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle document view
  const handleView = (pres: PresentationDoc) => {
    window.open(pres.fileUrl, "_blank");
  };

  return (
    <motion.section
      ref={ref}
      id="presentations"
      className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "-50px",
      }}
      variants={container}
    >
      {/* Decorative blobs with orange theme */}
      <div className="hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10">
        <div className="absolute -top-40 -left-[55rem] h-[32rem] w-[32rem] rounded-full bg-orange-500/20 dark:bg-orange-500/30 blur-3xl" />
        <div className="absolute -top-20 -right-[46rem] h-[22rem] w-[22rem] rounded-full bg-amber-500/20 dark:bg-amber-500/40 blur-3xl" />
      </div>

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: "-30px" }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
            <Presentation className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <span className="text-sm font-medium text-orange-600 dark:text-orange-400 tracking-wide">
            Research Presentations
          </span>
        </div>

        <SectionHeading>Presentation Documents</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          Complete collection of research presentation slides delivered during
          the FabricVision project timeline, from proposal to final defense.
        </p>

        {/* mini tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Tag variant="orange">Proposal Defense</Tag>
          <Tag variant="orange">Progress Evaluation</Tag>
          <Tag variant="orange">Final Viva</Tag>
          <Tag variant="orange">Research Findings</Tag>
        </div>
      </motion.div>

      {/* PRESENTATIONS GRID */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
          margin: "-30px",
        }}
        className="mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentations.map((pres, i) => (
            <motion.div
              key={pres.id}
              variants={softFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-orange-200/50 dark:border-orange-800/30 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300"
            >
              {/* Thumbnail Section */}
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 overflow-hidden">
                <Image
                  src={pres.thumbnail}
                  alt={pres.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-orange-600/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                    <Calendar className="w-3 h-3" />
                    {pres.date}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-black/60 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                    <Presentation className="w-3 h-3" />
                    {pres.duration}
                  </span>
                </div>

                {/* File Size Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex rounded-lg bg-black/60 backdrop-blur-sm px-2 py-1 text-xs text-white">
                    {pres.fileSize}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Title & Event */}
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {pres.title}
                  </h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                    {pres.event}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed line-clamp-3">
                  {pres.description}
                </p>

                {/* Feedback */}
                <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-orange-500" />
                    <span className="text-xs text-orange-600 dark:text-orange-400 font-medium line-clamp-1">
                      {pres.feedback}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 justify-end">
                  <motion.button
                    onClick={() => handleView(pres)}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-all duration-300 border border-orange-200 dark:border-orange-800"
                    aria-label="View presentation"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </motion.button>

                  <motion.button
                    onClick={() => handleDownload(pres)}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    aria-label="Download presentation"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
