"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { AlertTriangle, BookOpen, Cpu, Microscope, Search } from "lucide-react";

import OverallDiagram from "@/app/images/diagrams/Overall System Diagram.png";

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
      className="max-w-6xl mx-auto px-4 sm:px-6 py-18 scroll-mt-28"
    >
      {/* ================= HEADER ================= */}
      <div className="text-center mb-16">
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
          Foundation of Research
        </p>

        <SectionHeading>Research Scope</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
        className="mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <BookOpen className="w-5 sm:w-8 h-5 sm:h-8 sm:mt-1" />
          <h2 className="sm:text-3xl text-xl font-semibold">
            Literature Survey
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
            className="rounded-2xl border border-gray-200 dark:border-gray-700"
          />
        </div>
      </motion.div>

      {/* ================= RESEARCH GAP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <Search className="w-5 sm:w-8 h-5 sm:h-8 sm:mt-1" />
          <h2 className="sm:text-3xl text-xl font-semibold">Research Gap</h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <motion.table
            className="w-full text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <th className="p-4 text-left font-semibold text-gray-900 dark:text-white rounded-tl-2xl">
                  Existing Systems
                </th>
                <th className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                  Limitations
                </th>
                <th className="p-4 text-left font-semibold text-gray-900 dark:text-white rounded-tr-2xl">
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
                  <td className="p-3.5 text-gray-900 dark:text-white font-medium">
                    {row.system}
                  </td>
                  <td className="p-3.5 text-gray-600 dark:text-gray-400">
                    {row.limitations}
                  </td>
                  <td className="p-3.5 text-gray-600 dark:text-gray-400">
                    {row.contribution}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </motion.div>
      </motion.div>

      {/* ================= RESEARCH PROBLEM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <AlertTriangle className="w-5 sm:w-8 h-5 sm:h-8 sm:mt-1" />
          <h2 className="sm:text-3xl text-xl font-semibold">
            Research Problem
          </h2>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
        className="mb-20"
      >
        <div className="flex gap-2 text-blue-600 dark:text-blue-100 mb-2">
          <Microscope className="w-5 sm:w-8 h-5 sm:h-8" />
          <h2 className="sm:text-3xl text-xl font-semibold">
            Proposed Solutions
          </h2>
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mb-10">
          A unified edge-level framework integrating intelligent frame
          acquisition, anomaly pre-screening, quality validation, and predictive
          analytics for the{" "}
          <strong className="font-semibold text-blue-600 dark:text-blue-400">
            F A B R I C V I S I O N
          </strong>{" "}
          system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* COMPONENT 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-blue-900/40 backdrop-blur-sm p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 01
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Intelligent Frame Capture & Pre-Screening
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
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
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-green-900/40 backdrop-blur-sm p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 02
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Fog-Level Image Enhancement
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
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
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-orange-900/40 backdrop-blur-sm p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 03
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Defect Detection & Localization
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
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
            className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-purple-900/40 backdrop-blur-sm p-6 text-left overflow-hidden h-full min-h-[280px] flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
            </div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                  Component 04
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Predictive Quality Analytics
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-4 text-sm text-gray-400 dark:text-gray-500 italic leading-relaxed flex-1 flex items-center justify-center">
              (To be added)
            </p>

            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-24 -translate-x-1/2" />
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-20 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>

      {/* ================= METHODOLOGY SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 relative"
      >
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400">
            <span className="font-medium">Our Approach</span>
          </div>

          <div className="text-4xl font-semibold text-gray-900 dark:text-white">
            Research Methodology
          </div>

          <p className="mt-4 px-30 text-gray-600 dark:text-gray-400 leading-relaxed">
            This section presents the overall implementation methodology of the
            proposed FabricVision system, which is designed as a multi-stage
            real-time fabric inspection pipeline. The system integrates
            edge-level intelligent frame acquisition, anomaly pre-screening,
            fog-level adaptive image enhancement, deep learning-based defect
            detection, and predictive analytics to support comprehensive fabric
            quality monitoring. The processing workflow begins at the edge
            layer, where frames are selectively captured and pre-screened before
            being transmitted to the fog layer for enhancement and defect
            analysis. Subsequently, advanced machine learning models are used to
            detect and localize defects, while higher-level analytics modules
            provide insights for quality control and decision-making. This
            structured pipeline ensures efficient data processing, reduces
            redundancy, and improves the overall reliability and scalability of
            the inspection system.
          </p>
        </div>

        {/* System Architecture */}
        <div className="max-w-4xl mx-auto sm:-mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={OverallDiagram}
                alt="Overall Architecture Diagram"
                className="w-full h-auto rounded-2xl"
                style={{ borderRadius: "1rem" }}
              />
            </div>

            {/* Caption */}
            <div className="p-4 text-center sm:-mt-8">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {" "}
                {/* Changed text color */}
                Figure 2: System architecture of the edge-level fabric capture
                and pre-screening pipeline.
              </p>
            </div>

            {/* Hover effect */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
              <div className="absolute -inset-px bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
