"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { BookOpen, Users, Building2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import JennyMadam from "@/app/images/team_profiles/jenny madam.jpeg";
import AparnaMadam from "@/app/images/team_profiles/AparnaMadam.jpg";
import ExternalSupervisor from "@/app/images/team_profiles/External Supervisor.jpg";
import Janindu from "@/app/images/team_profiles/Janindu.jpg";
import Sachintha from "@/app/images/team_profiles/sachintha.jpg";
import Duvindu from "@/app/images/team_profiles/duvindu.jpg";
import Thisara from "@/app/images/team_profiles/Thisara.jpg";

import img1 from "@/app/images/appendix/group.jpg";
import img2 from "@/app/images/appendix/finalproduct.jpeg";
import img3 from "@/app/images/appendix/evaluation_setup.jpg";
import img4 from "@/app/images/appendix/sewing section of the garment.jpg";
import img5 from "@/app/images/appendix/sample fabrics after cutting.jpg";
import img6 from "@/app/images/appendix/sample fabrics.jpg";
import img7 from "@/app/images/appendix/logs.jpeg";

/* ================= DATA ================= */

// Academic Supervisors
const academicSupervisors = [
  {
    name: "Ms. Jenny Krishara",
    role: "Supervisor",
    title: "Senior Lecturer",
    dept: "Department of Information Technology",
    uni: "Sri Lanka Institute of Information Technology",
    email: "jenny.k@sliit.lk",
    image: JennyMadam,
    type: "academic",
  },
  {
    name: "Ms. Aparna Jayawardena",
    role: "Co-Supervisor",
    title: "Assistant Lecturer",
    dept: "Department of Software Engineering",
    uni: "Sri Lanka Institute of Information Technology",
    email: "aparna.j@sliit.lk",
    image: AparnaMadam,
    type: "academic",
  },
];

// External Supervisor (Garment Owner)
const externalSupervisor = {
  name: "Mr. S.G. Ranjith Dayananda",
  role: "External Supervisor",
  title: "Garment Owner / Industry Partner",
  company: "SGR Garments (Pvt) Ltd",
  expertise: "Textile Manufacturing & Quality Control",
  email: "sgrgarments@gmail.com",
  image: ExternalSupervisor,
  type: "external",
};

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
          under the guidance of experienced academic supervisors and industry
          experts from SLIIT.
        </p>
      </div>

      {/* ================= ACADEMIC SUPERVISORS ================= */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Academic Supervisors
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {academicSupervisors.map((sup, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-gray-400/50 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm p-6 flex gap-6 items-center hover:shadow-lg transition"
            >
              <div className="relative w-[130px] h-[130px] rounded-2xl overflow-hidden flex-shrink-0">
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

      {/* ================= EXTERNAL SUPERVISOR ================= */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          External Supervisor
        </h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-green-400/50 dark:border-green-800/50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm p-6 flex gap-6 items-center hover:shadow-lg transition"
          >
            <div className="relative w-[130px] h-[130px] rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 flex items-center justify-center">
              {externalSupervisor.image ? (
                <Image
                  src={externalSupervisor.image}
                  alt={externalSupervisor.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 className="w-12 h-12 text-green-600 dark:text-green-400 opacity-60" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {externalSupervisor.name}
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                ({externalSupervisor.role})
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {externalSupervisor.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {externalSupervisor.company}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expertise: {externalSupervisor.expertise}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {externalSupervisor.email}
              </p>
            </div>
          </motion.div>
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
              className="group relative rounded-3xl border border-gray-400/60 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl p-6 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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

      {/* ================= RESEARCH APPENDIX ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-20"
      >
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Visual Documentation</span>
          </div>

          <SectionHeading>Research Appendix</SectionHeading>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This section presents visual evidences of the FabricVision system
            including hardware setup, captured frames, anomaly detection
            outputs, enhancement results, and real-time processing stages across
            all components.
          </p>
        </div>

        {/* MIXED GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-5">
          {[
            {
              src: img1,
              title: "Research Team",
              span: "col-span-2 row-span-2",
            },
            {
              src: img2,
              title: "Finalized Product",
              span: "col-span-1 row-span-2",
            },
            {
              src: img3,
              title: "Evaluation Environment",
              span: "col-span-1 row-span-1",
            },
            {
              src: img4,
              title: "Sewing Section",
              span: "col-span-1 row-span-1",
            },
            {
              src: img5,
              title: "Fabrics before cutting",
              span: "col-span-1 row-span-1",
            },
            {
              src: img6,
              title: "Fabrics after cutting",
              span: "col-span-1 row-span-1",
            },
            {
              src: img7,
              title: "Pipeline Logs",
              span: "col-span-2 row-span-1",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 ${item.span}`}
            >
              {/* IMAGE */}
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-sm font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
