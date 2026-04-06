"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { AlertTriangle, BookOpen, Microscope, Search } from "lucide-react";

import OverallDiagram from "@/app/images/diagrams/Overall System Diagram.png";
import ComponentOneDiagram from "@/app/images/diagrams/Component 1 System Architecture Diagram.png";

import piImage from "@/app/images/hardware/pi4modelB.webp";
import cameraImage from "@/app/images/hardware/camera module 3.jpg";
import enclosureImage from "@/app/images/hardware/enclouse box.jpg";
import fanImage from "@/app/images/hardware/cooling fan.webp";
import mountImage from "@/app/images/hardware/connected.png";
import setupImage from "@/app/images/hardware/finalproduct.png";
import pipelineImage from "@/app/images/hardware/pipelineprocess.jpeg";
import frameImage from "@/app/images/hardware/captured frame.jpeg";

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

export default function Scope() {
  const { ref } = useSectionInView("Scope", 0.5);

  return (
    <section
      ref={ref}
      id="scope"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-18 scroll-mt-28"
    >
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
          Foundation of Research
        </p>

        <SectionHeading>Research Scope</SectionHeading>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
          This section presents the background study, identified research gaps,
          and the core problem addressed by the FabricVision system.
        </p>
      </div>

      {/* ================= LITERATURE SURVEY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <BookOpen className="w-6 sm:w-8 h-6 sm:h-8 sm:mt-1 flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Literature Survey
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Traditional fabric inspection methods primarily rely on manual visual
          examination, which is time-consuming, subjective, and highly dependent
          on operator experience. These methods often result in inconsistent
          quality assessment and missed defects, especially in high-speed
          production environments.
          <br />
          <br />
          Recent advancements in computer vision and deep learning have
          introduced automated fabric defect detection systems. Techniques such
          as Convolutional Neural Networks (CNNs) and YOLO-based models have
          significantly improved detection accuracy and speed. However, most
          existing systems focus only on defect detection and assume continuous,
          high-quality image input. Also the many solutions lack real-time edge
          processing capabilities and fail to address challenges such as
          redundant data capture, frame quality validation, and varying lighting
          conditions.
          <br />
          <br />
          Furthermore, existing studies rarely focus on optimizing the image
          acquisition stage itself. Most approaches assume continuous frame
          capture without considering whether the captured frames are meaningful
          or usable. Limited attention has been given to event-driven
          acquisition strategies, unsupervised anomaly estimation at the edge,
          and frame-level quality evaluation prior to defect detection. As a
          result, redundant, low-quality, or irrelevant frames are often
          processed in downstream modules, reducing overall system efficiency
          and reliability.
        </p>

        {/* Example Image Placeholder */}
        <div className="mt-6">
          <Image
            src="/images/literature-placeholder.png"
            alt="Literature Survey Illustration"
            width={800}
            height={400}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 w-full h-auto"
          />
        </div>
      </motion.div>

      {/* ================= RESEARCH GAP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <Search className="w-6 sm:w-8 h-6 sm:h-8 sm:mt-1 flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold">Research Gap</h2>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Despite significant improvements in automated defect detection,
          several limitations still exist in current fabric inspection systems.
          <br />
          <br />
          Most existing approaches do not consider the pre-inspection stage,
          including intelligent frame selection, anomaly awareness, and
          real-time quality validation. Furthermore, many systems rely heavily
          on cloud-based processing, resulting in increased latency and limited
          applicability in resource-constrained environments.
          <br />
          <br />
          Additionally, there is limited research on integrating fabric-aware
          image enhancement, pattern classification, and defect localization
          into a unified real-time pipeline. These limitations highlight the
          need for a more comprehensive and efficient inspection framework.
          <br />
          <br />
          In particular, there is a lack of integrated edge-level frameworks
          that combine intelligent frame acquisition, early anomaly
          pre-screening, and frame-level quality analytics within a unified
          pipeline. Existing systems do not leverage encoder-based spatial
          sampling, unsupervised reconstruction-based anomaly scoring, or
          multi-metric quality validation before forwarding frames to subsequent
          processing stages. This gap highlights the need for a
          resource-efficient, edge-driven approach that ensures only spatially
          consistent and visually usable frames are propagated through the
          inspection pipeline.
        </p>

        {/* Example Table - Modern with Rounded Corners & Animations */}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <motion.table
            className="w-full text-xs sm:text-sm min-w-[640px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <th className="p-3 sm:p-4 text-left font-semibold text-gray-900 dark:text-white rounded-tl-2xl">
                  Existing Systems
                </th>
                <th className="p-3 sm:p-4 text-left font-semibold text-gray-900 dark:text-white">
                  Limitations
                </th>
                <th className="p-3 sm:p-4 text-left font-semibold text-gray-900 dark:text-white rounded-tr-2xl">
                  Our Contribution
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  system: "Manual Inspection",
                  limitations: "Subjective, error-prone, slow and inconsistent",
                  contribution:
                    "Introduce automated, consistent edge-based inspection pipeline",
                },
                {
                  system: "CNN / YOLO Systems",
                  limitations:
                    "Assume continuous input, no intelligent frame selection or pre-screening",
                  contribution:
                    "Introduce encoder-driven event-based frame acquisition to capture only meaningful frames",
                },
                {
                  system: "Cloud-based Solutions",
                  limitations:
                    "High latency, bandwidth dependent, not suitable for edge deployment",
                  contribution:
                    "Implement real-time edge processing using Raspberry Pi for low-latency operation",
                },
                {
                  system: "Continuous Capture Systems",
                  limitations:
                    "Capture redundant frames without considering fabric presence or movement",
                  contribution:
                    "Use encoder pulses + fabric presence detection to ensure spatially consistent and relevant frame capture",
                },
                {
                  system: "Existing Vision Pipelines",
                  limitations:
                    "Lack early anomaly awareness before defect detection stage",
                  contribution:
                    "Apply autoencoder-based anomaly pre-screening (FIS) at the edge level",
                },
                {
                  system: "Image Processing Approaches",
                  limitations:
                    "No frame-level quality validation (blur, exposure, contrast not considered)",
                  contribution:
                    "Introduce frame quality analytics (FQS) using sharpness, exposure, and contrast metrics",
                },
                {
                  system: "Traditional Inspection Frameworks",
                  limitations:
                    "Do not integrate acquisition, anomaly filtering, and quality analytics into a unified pipeline",
                  contribution:
                    "Develop a unified 3-stage edge pipeline integrating capture, anomaly screening, and quality validation",
                },
              ].map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{
                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                    transition: { duration: 0.2 },
                  }}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200"
                >
                  <td className="p-2.5 sm:p-3.5 text-gray-900 dark:text-white font-medium text-xs sm:text-sm">
                    {row.system}
                  </td>
                  <td className="p-2.5 sm:p-3.5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    {row.limitations}
                  </td>
                  <td className="p-2.5 sm:p-3.5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    {row.contribution}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>

      {/* ================= RESEARCH PROBLEM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 sm:mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 sm:mt-1 flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Research Problem
          </h2>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          Fabric inspection processes in small and medium-scale apparel
          industries remain inefficient, inconsistent, and heavily dependent on
          manual labor. This leads to undetected defects, increased material
          waste, and reduced product quality.
          <br />
          <br />
          Additionally, existing inspection pipelines lack intelligent control
          over frame acquisition and validation. Continuous capture mechanisms
          generate redundant and low-quality frames, while the absence of early
          anomaly awareness and quality filtering leads to inefficient
          downstream processing. This results in unnecessary computational load
          and reduced reliability in defect detection systems. Also the lack of
          real-time processing, accurate defect localization, and predictive
          capabilities prevents proactive quality control. Existing systems are
          reactive rather than predictive, identifying defects only after they
          occur.
          <br />
          <br />
          Therefore, there is a need for an intelligent, real-time system that
          integrates data capture, image enhancement, defect detection, and
          predictive analytics into a unified framework to improve overall
          inspection efficiency and decision-making.
        </p>
      </motion.div>

      {/* ================= PROPOSED SOLUTIONS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
          margin: "-30px",
        }}
        className="mb-16 sm:mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <Microscope className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Proposed Solutions
          </h2>
        </div>

        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mb-8 sm:mb-10">
          A unified edge-level framework integrating intelligent frame
          acquisition, anomaly pre-screening, quality validation, and predictive
          analytics for the{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-400">
            F A B R I C V I S I O N
          </strong>{" "}
          system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* COMPONENT 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-blue-900/40 backdrop-blur-sm p-5 sm:p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 01
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Intelligent Frame Capture & Pre-Screening
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              Introduces an edge-level, encoder-driven frame acquisition
              mechanism that captures frames only at meaningful spatial
              intervals while verifying fabric presence to eliminate redundant
              data.
              <br />
              <br />
              A lightweight autoencoder model performs real-time anomaly
              pre-screening by computing Frame Irregularity Scores (FIS),
              enabling early identification of irregular fabric regions.
              <br />
              <br />
              Additionally, frame-level quality analytics evaluates sharpness,
              exposure, and contrast to compute a Frame Quality Score (FQS),
              ensuring only visually usable frames are forwarded for further
              processing.
            </p>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
          </motion.div>

          {/* COMPONENT 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-green-900/40 backdrop-blur-sm p-5 sm:p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 02
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Fog-Level Image Enhancement
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
              (To be added)
            </p>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
          </motion.div>

          {/* COMPONENT 3 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-orange-900/40 backdrop-blur-sm p-5 sm:p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 03
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Defect Detection & Localization
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
              (To be added)
            </p>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
          </motion.div>

          {/* COMPONENT 4 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-purple-900/40 backdrop-blur-sm p-5 sm:p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 04
                </p>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  Predictive Quality Analytics
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
              (To be added)
            </p>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-16 sm:mt-20 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* ================= METHODOLOGY SECTION - OVERALL ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-17 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Our Approach</span>
          </div>

          <div className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
            Research Methodology
          </div>
        </div>

        {/* Side-by-side layout: Image | Text */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
                <Image
                  src={OverallDiagram}
                  alt="Overall Architecture Diagram"
                  className="w-full h-auto rounded-2xl"
                  style={{ borderRadius: "1rem" }}
                />
              </div>

              {/* Caption */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Figure 2: Overall System architecture Diagram
                </p>
              </div>

              {/* Hover effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            {/* Right Side: Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                This section presents the overall implementation methodology of
                the proposed{" "}
                <strong className="font-semibold text-indigo-600 dark:text-indigo-400">
                  FabricVision
                </strong>{" "}
                system, which is designed as a multi-stage real-time fabric
                inspection pipeline. The system integrates edge-level
                intelligent frame acquisition, anomaly pre-screening, fog-level
                adaptive image enhancement, deep learning-based defect
                detection, and predictive analytics to support comprehensive
                fabric quality monitoring.
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                The processing workflow begins at the edge layer, where frames
                are selectively captured and pre-screened before being
                transmitted to the fog layer for enhancement and defect
                analysis. Subsequently, advanced machine learning models are
                used to detect and localize defects, while higher-level
                analytics modules provide insights for quality control and
                decision-making.
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                This structured pipeline ensures efficient data processing,
                reduces redundancy, and improves the overall reliability and
                scalability of the inspection system.
              </p>

              {/* Optional: Key highlights as badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-2.5 sm:px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300">
                  Frame Capturing
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-2.5 sm:px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300">
                  Fog Computing
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-2.5 sm:px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300">
                  Real-time Detection
                </span>
                <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-2.5 sm:px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300">
                  Predictive Analytics
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= METHODOLOGY SECTION - COMPONENT 1 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 sm:mt-24 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Component 01</span>
          </div>

          <div className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white px-2">
            Edge-Level Fabric Capture & Pre-Screening
          </div>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed px-2">
            This component represents the first stage of the FabricVision
            pipeline, where fabric frames are intelligently acquired,
            pre-screened for irregularities, and validated for visual usability
            before being forwarded to the fog computing layer.
          </p>
        </div>

        {/* Side-by-side layout: Text | Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Text + Glass Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 sm:space-y-5 order-2 lg:order-1"
            >
              {/* Novelty Cards */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                {/* Card 1 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 1: Encoder-Driven Frame Acquisition
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Frames are captured at fixed spatial intervals using encoder
                    pulse signals, while ROI-based fabric presence verification
                    prevents the acquisition of empty or irrelevant frames.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 2: Anomaly Pre-Screening
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    A lightweight autoencoder computes the Frame Irregularity
                    Score (FIS) and generates visual irregularity maps to
                    identify normal, warning, and anomalous frames in real time.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 3: Frame-Level Quality Analytics
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Captured frames are evaluated using sharpness, exposure, and
                    contrast metrics to compute a Frame Quality Score (FQS),
                    ensuring that only visually valid frames are forwarded to
                    the next layer.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-indigo-500/10">
                <Image
                  src={ComponentOneDiagram}
                  alt="Component 1 Architecture Diagram"
                  className="w-full h-auto rounded-2xl"
                  style={{ borderRadius: "1rem" }}
                />
              </div>

              {/* Caption */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Figure 3: Component 1 architecture diagram.
                </p>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                The implemented edge-level pipeline combines three tightly
                integrated novelties: encoder-driven frame acquisition with
                fabric presence verification, autoencoder-based anomaly
                pre-screening, and frame-level quality analytics. Together,
                these stages ensure that only meaningful and visually usable
                frames are propagated for downstream enhancement and defect
                analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= HARDWARE SHOWCASE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Hardware Implementation
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Edge device setup used for real-time fabric capture and
            pre-screening
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Item */}
          {[
            { title: "Raspberry Pi 4 Model B", img: piImage },
            { title: "Camera Module 3", img: cameraImage },
            { title: "Enclosure Box", img: enclosureImage },
            { title: "Cooling Fan Setup", img: fanImage },
            { title: "Wooden Mount Structure", img: setupImage },
            { title: "Fabric Capture Setup", img: mountImage },
            { title: "Pipeline Execution", img: pipelineImage },
            { title: "Sample Captured Frame", img: frameImage },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Label */}
              <div className="p-3 text-center">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-10 sm:mt-10 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* ================= METHODOLOGY SECTION - COMPONENT 2 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 sm:mt-14 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Component 02</span>
          </div>

          <div className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white px-2">
            # Component 2 Title
          </div>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed px-2">
            # Comp 2 description goes here.
          </p>
        </div>

        {/* Side-by-side layout: Image | Text */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-indigo-500/10">
                <Image
                  src={ComponentOneDiagram}
                  alt="Component 2 Architecture Diagram"
                  className="w-full h-auto rounded-2xl"
                  style={{ borderRadius: "1rem" }}
                />
              </div>

              {/* Caption */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Figure 4: Component 2 architecture diagram.
                </p>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent" />
              </div>
            </motion.div>

            {/* Right Side: Text + Glass Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-5 order-2"
            >
              {/* Novelty Cards */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                {/* Card 1 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 1:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 1 goes here.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 2:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 2 goes here.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= METHODOLOGY SECTION - COMPONENT 3 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 sm:mt-14 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Component 03</span>
          </div>

          <div className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white px-2">
            # Component 3 Title
          </div>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed px-2">
            # Comp 3 description goes here.
          </p>
        </div>

        {/* Side-by-side layout: Text | Image */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Text + Glass Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 sm:space-y-5 order-2 lg:order-1"
            >
              {/* Novelty Cards */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                {/* Card 1 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 1:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 1 goes here.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 2:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 1 goes here.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-indigo-500/10">
                <Image
                  src={ComponentOneDiagram}
                  alt="Component 2 Architecture Diagram"
                  className="w-full h-auto rounded-2xl"
                  style={{ borderRadius: "1rem" }}
                />
              </div>

              {/* Caption */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Figure 5: Component 3 architecture diagram.
                </p>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= METHODOLOGY SECTION - COMPONENT 4 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 sm:mt-14 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Component 04</span>
          </div>

          <div className="text-2xl sm:text-4xl font-semibold text-gray-900 dark:text-white px-2">
            # Component 4 Title
          </div>

          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed px-2">
            # Comp 4 description goes here.
          </p>
        </div>

        {/* Side-by-side layout: Image | Text */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-indigo-500/10">
                <Image
                  src={ComponentOneDiagram}
                  alt="Component 4 Architecture Diagram"
                  className="w-full h-auto rounded-2xl"
                  style={{ borderRadius: "1rem" }}
                />
              </div>

              {/* Caption */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Figure 6: Component 4 architecture diagram.
                </p>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-transparent" />
              </div>
            </motion.div>

            {/* Right Side: Text + Glass Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-5 order-2"
            >
              {/* Novelty Cards */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                {/* Card 1 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 1:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 1 goes here.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-indigo-500/5 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1 sm:mb-2">
                    Novelty 2:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    # Description of novelty 2 goes here.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
