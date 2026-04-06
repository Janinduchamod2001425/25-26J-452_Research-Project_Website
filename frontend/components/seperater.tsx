"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fabricAnimation from "@/public/lottie/Cat playing animation.json";

// Your separator component
export function LottieSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-4"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>

        {/* Lottie Animation in the middle */}
        <div className="relative z-10 ">
          <div className="w-15 h-15 sm:w-32 sm:h-32 pb-8">
            <Lottie
              animationData={fabricAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
