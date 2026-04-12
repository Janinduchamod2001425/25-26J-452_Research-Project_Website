"use client";

import Image from "next/image";
import React from "react";
import Avatar from "../app/images/FabricRP.png";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import { LottieSeparator } from "@/components/seperater";

export default function HomePage() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-15 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/*Logo Image with Animation*/}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Avatar}
              alt="FabricVision"
              width="155"
              height="155"
              quality="95"
              priority={true}
              className="sm:h-28 sm:w-28 h-20 w-20 sm:rounded-3xl rounded-2xl object-cover border-[0.15rem] border-gray-200 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      {/*Main Title and Subtitle with Glitch Effect*/}
      <motion.div
        className="relative mb-14 sm:mt-10 mt-6 px-4 text-center"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        {/* Glitch effect layers (delayed for better perception) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20">
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-red-400 blur-sm animate-pulse delay-300">
            FabricVision
          </h1>
        </div>

        <div className="relative">
          {/* Main Title */}
          <motion.h1
            className="text-7xl sm:text-8xl font-black mb-4 tracking-tighter text-gray-900 dark:text-white relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative z-10">FabricVision</span>
            <span className="absolute top-0 left-0 text-white opacity-20 animate-pulse delay-500">
              FabricVision
            </span>
            <span className="absolute top-0.5 left-0.5 text-yellow-800 opacity-10 animate-pulse delay-700">
              FabricVision
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-8 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Research Group : 25-26J-452
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center space-y-4">
              <p className="sm:text-5xl text-3xl font-medium text-gray-800 dark:text-gray-200">
                AI-Driven Fabric Defect Detection & Monitoring System
              </p>
              <p className="text-xl font-light text-gray-600 dark:text-gray-400">
                for the Apparel Industry in Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Separator with Scissor Animation */}
      <LottieSeparator />

      {/* ================= RESEARCH OVERVIEW ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Research Overview
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          FabricVision is an AI-driven fabric quality monitoring system designed
          to enhance fabric inspection processes within Sri Lanka’s apparel
          industry. Traditional fabric inspection methods are largely manual,
          time-consuming, and prone to human error, leading to inconsistent
          quality assessment and increased material waste.
          <br />
          <br />
          To address these challenges, this research introduces a modular and
          real-time inspection framework that integrates intelligent fabric
          capture, anomaly pre-screening, and frame-level quality analytics with
          edge-level fog processing. The system ensures that only meaningful and
          high-quality fabric data is processed, improving inspection
          reliability and efficiency.
          <br />
          <br />
          Furthermore, advanced deep learning techniques are employed to detect
          and localize fabric defects such as holes, stains, and irregularities
          in real time. By combining computer vision with IoT-based position
          tracking and predictive analytics, FabricVision enables early defect
          identification, accurate localization, and proactive quality control.
          <br />
          <br />
          Overall, the system provides a scalable and practical solution for
          improving fabric inspection accuracy, reducing waste, and supporting
          data-driven decision making in modern apparel manufacturing
          environments.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600">
            AI-Based Inspection
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600">
            Edge Computing
          </span>
          <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600">
            Real-Time Detection
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600">
            Predictive Analytics
          </span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-15 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>
    </section>
  );
}
