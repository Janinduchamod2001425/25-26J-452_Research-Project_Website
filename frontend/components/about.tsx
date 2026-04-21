"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { Users } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import JennyMadam from "@/app/images/team_profiles/jenny madam.jpeg";
import AparnaMadam from "@/app/images/team_profiles/AparnaMadam.jpg";
import Janindu from "@/app/images/team_profiles/Janindu.jpg";
import Sachintha from "@/app/images/team_profiles/sachintha.jpg";
import Duvindu from "@/app/images/team_profiles/duvindu.jpg";
import Thisara from "@/app/images/team_profiles/Thisara.jpg";

/* ================= DATA ================= */

const supervisors = [
  {
    name: "Ms. Jenny Krishara",
    role: "Supervisor",
    title: "Senior Lecturer",
    dept: "Department of Information Technology",
    uni: "Sri Lanka Institute of Information Technology",
    email: "jenny.k@sliit.lk",
    image: JennyMadam,
  },
  {
    name: "Ms. Aparna Jayawardena",
    role: "Co-Supervisor",
    title: "Assistant Lecturer",
    dept: "Department of Software Engineering",
    uni: "Sri Lanka Institute of Information Technology",
    email: "aparna.j@sliit.lk",
    image: AparnaMadam,
  },
];

const members = [
  {
    name: "Nagahawaththa J. C. D",
    role: "Team Leader",
    dept: "Software Engineering",
    email: "it22573896@my.sliit.lk",
    image: Janindu,
    github: "https://github.com/Janinduchamod2001425",
    linkedin: "https://www.linkedin.com/in/janinduchamod/",
  },
  {
    name: "Kamburugamuwa K.S.D",
    role: "Team Member",
    dept: "Software Engineering",
    email: "it22574572@my.sliit.lk",
    image: Sachintha,
    github: "https://github.com/Sachintha-Dinuranga",
    linkedin: "https://www.linkedin.com/in/sachintha-dinuranga",
  },
  {
    name: "Jayasinghe J.A.D.T.S",
    role: "Team Member",
    dept: "Software Engineering",
    email: "it22028464@my.sliit.lk",
    image: Thisara,
    github: "https://github.com/ThisaraJayas",
    linkedin: "https://www.linkedin.com/in/thisarajayasinghe",
  },
  {
    name: "Kavinda S.G.D",
    role: "Team Member",
    dept: "Software Engineering",
    email: "it22603654@my.sliit.lk",
    image: Duvindu,
    github: "https://github.com/duvidu",
    linkedin: "https://www.linkedin.com/in/duvidu-kavinda-514a50286/",
  },
];

/* ================= COMPONENT ================= */

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 py-24"
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">Research Team</span>
        </div>

        <SectionHeading>Our Team</SectionHeading>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          The FabricVision project is developed by a dedicated research team
          under the guidance of experienced academic supervisors from SLIIT.
        </p>
      </div>

      {/* ================= SUPERVISORS ================= */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Supervisors
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {supervisors.map((sup, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm p-6 flex gap-6 items-center shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-[130px] h-[130px] rounded-2xl overflow-hidden">
                <Image
                  src={sup.image}
                  alt={sup.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {sup.name}
                </h3>

                <p className="text-sm text-blue-600 dark:text-blue-400">
                  ({sup.role})
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {sup.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {sup.dept}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {sup.uni}
                </p>
                <p className="text-xs text-gray-500 mt-1">{sup.email}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= STUDENTS ================= */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Research Team Members
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl p-6 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent" />
              </div>

              {/* IMAGE */}
              <div className="relative w-[130px] h-[130px] mx-auto rounded-2xl overflow-hidden mb-4 border border-gray-200 dark:border-gray-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <p className="text-sm text-blue-600 mt-1">{member.role}</p>

              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {member.dept}
              </p>

              <p className="text-xs text-gray-500 mt-1">{member.email}</p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-3 mt-4">
                {member.github && member.github !== "" ? (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110 cursor-pointer z-10 relative"
                    aria-label="GitHub Profile"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed">
                    <FaGithub className="w-4 h-4" />
                  </div>
                )}

                {member.linkedin && member.linkedin !== "" ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200 hover:scale-110 cursor-pointer z-10 relative"
                    aria-label="LinkedIn Profile"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                  </a>
                ) : (
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 opacity-50 cursor-not-allowed">
                    <FaLinkedin className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                  </div>
                )}
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 group-hover:w-20 -translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-20 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>
    </section>
  );
}
