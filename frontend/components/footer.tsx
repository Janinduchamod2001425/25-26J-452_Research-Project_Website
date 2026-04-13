"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative -sm:mt-5 overflow-hidden">
      {/* Top gradient divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm text-gray-600 dark:text-gray-400">
          {/* BRAND */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              FabricVision
            </h4>
            <p className="mt-3 leading-relaxed">
              An AI-driven fabric defect detection and quality monitoring system
              designed to improve inspection accuracy and efficiency in the
              apparel manufacturing industry.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Explore
            </h5>
            <ul className="space-y-2">
              {[
                { name: "Research Overview", href: "#home" },
                { name: "Scope", href: "#domain" },
                { name: "Milestones", href: "#milestones" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h5>

            <div className="flex items-center gap-4">
              {/* Email */}
              <a
                href="mailto:it22573896@my.sliit.lk"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* GitHub (Project Repo) */}
              <a
                href="https://github.com/Janinduchamod2001425/25-26J-452_Research-Project_Website.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <BsGithub className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-4 text-xs">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} • FabricVision Research Project •{" "}
            <span className="text-red-600">S</span>
            <span className="text-yellow-300">ri</span>
            <span className="text-green-400">Lan</span>
            <span className="text-orange-300">ka</span>
          </p>

          <p>AI-powered fabric inspection research for smarter manufacturing</p>
        </div>
      </div>
    </footer>
  );
}
