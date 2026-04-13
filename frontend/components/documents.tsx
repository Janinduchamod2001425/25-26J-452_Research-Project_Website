"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import {
  FileText,
  Download,
  Eye,
  Presentation,
  BookOpen,
  FileJson,
  GraduationCap,
  Cloud,
  Calendar,
} from "lucide-react";
import React from "react";
import SectionHeading from "@/components/section-heading";
import Image, { StaticImageData } from "next/image";

// Document_thumbnails
import TafDoc from "@/app/images/document_thumbnails/taf.png";
import ProposalDoc from "@/app/images/document_thumbnails/proposal.png";
import Checklist1Doc from "@/app/images/document_thumbnails/checklist1.png";
import Checklist2Doc from "@/app/images/document_thumbnails/checklist2.png";
import ResearchPaperDoc from "@/app/images/document_thumbnails/researchpaper.png";
import FinalreportDoc from "@/app/images/document_thumbnails/thesis.png";

type Document = {
  id: number;
  title: string;
  type: string;
  description: string;
  thumbnail: StaticImageData;
  fileUrl: string;
  fileSize: string;
  isGoogleDrive?: boolean;
  actualFileName?: string;
  icon?: React.ReactNode;
};

// Research document_thumbnails
const documents: Document[] = [
  {
    id: 1,
    title: "Topic Assessment Form",
    type: "PDF Document",
    description:
      "Complete research proposal including methodology, literature review, and project timeline.",
    thumbnail: TafDoc,
    fileUrl: "/documents/TAF_25-26J-452.pdf",
    fileSize: "940 KB",
    actualFileName: "TAF_25-26J-452.pdf",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Project Proposal Reports",
    type: "Google Drive Folder",
    description:
      "Complete project proposal reports from all 4 team members with individual research contributions.",
    thumbnail: ProposalDoc,
    fileUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID", // Replace with actual Google Drive folder link
    fileSize: "Multiple Files",
    isGoogleDrive: true,
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Checklist I",
    type: "PDF Document",
    description:
      "Comprehensive thesis document with research findings, analysis, and conclusions.",
    thumbnail: Checklist1Doc,
    fileUrl: "/documents/25-26J-452 - Checklist 1 - Design Report.pdf",
    fileSize: "2.6 MB",
    actualFileName: "25-26J-452 - Checklist 1 - Design Report.pdf",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Checklist II",
    type: "PDF Document",
    description:
      "Comprehensive thesis document with research findings, analysis, and conclusions.",
    thumbnail: Checklist2Doc,
    fileUrl: "/documents/25-26J-452 Checklist 2.pdf",
    fileSize: "355 KB",
    actualFileName: "25-26J-452 Checklist 2.pdf",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Research Paper",
    type: "PDF Document",
    description:
      "Published research paper in international conference proceedings.",
    thumbnail: ResearchPaperDoc,
    fileUrl:
      "/documents/IEEE Research Paper - 25-26J-452 - AI-Driven Fabric Defect Detection and Monitoring System for the Apparel Industry in Sri Lanka.pdf",
    fileSize: "557 KB",
    actualFileName:
      "IEEE Research Paper - 25-26J-452 - AI-Driven Fabric Defect Detection and Monitoring System for the Apparel Industry in Sri Lanka.pdf",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Final Reports",
    type: "Google Drive Folder",
    description:
      "Final thesis reports and presentations from all 4 team members with complete research outcomes.",
    thumbnail: FinalreportDoc,
    fileUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID", // Replace with actual Google Drive folder link
    fileSize: "Multiple Files",
    isGoogleDrive: true,
    icon: <Cloud className="w-5 h-5" />,
  },
];

export default function Documents() {
  const { ref } = useSectionInView("Documents", 0.5);

  // Handle document download with actual file name
  const handleDownload = (doc: Document) => {
    if (doc.isGoogleDrive) return; // No download for Google Drive links

    const link = document.createElement("a");
    link.href = doc.fileUrl;
    // Use actual file name instead of title
    const fileName =
      doc.actualFileName ||
      `${doc.title.toLowerCase().replace(/\s+/g, "-")}.pdf`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle document view (opens in new tab)
  const handleView = (doc: Document) => {
    window.open(doc.fileUrl, "_blank");
  };

  return (
    <motion.main
      ref={ref}
      id="documents"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-10 scroll-mt-25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* ================= RESEARCH DOCUMENTS SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        {/* Heading for Documents */}
        <div className="max-w-3xl mb-14 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wide">
              Research Repository
            </span>
          </div>

          <SectionHeading>Project Documents</SectionHeading>

          <div className="mt-4 space-y-3">
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to the comprehensive research documentation hub for the
              FabricVision project. Here you&#39;ll find all official documents,
              research outputs, and presentation materials that form the
              complete academic record of our work.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                <FileText className="w-3 h-3" />
                Assessment Forms
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                <Cloud className="w-3 h-3" />
                Google Drive
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                <FileJson className="w-3 h-3" />
                Research Papers
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                <Presentation className="w-3 h-3" />
                Presentations
              </span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 pt-2 px-18">
              Individual documents can be viewed and downloaded. <br /> Team
              reports are available via Google Drive for collaborative access.
            </p>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, i) => {
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative bg-white dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 ${
                  documents.length === 6 && i === 4 ? "lg:col-start-2" : ""
                } ${documents.length === 6 && i === 5 ? "lg:col-start-3" : ""}`}
              >
                {/* Document Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  <Image
                    src={doc.thumbnail}
                    alt={doc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Document Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-black/40 backdrop-blur-sm px-2 py-2 text-xs font-medium text-white">
                      {doc.icon}
                    </span>
                  </div>

                  {/* File Size Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex rounded-lg bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-white">
                      {doc.fileSize}
                    </span>
                  </div>
                </div>

                {/* Document Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-between">
                    <motion.button
                      onClick={() => handleView(doc)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all duration-300 border dark:border-gray-700"
                      aria-label="View document"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>

                    {!doc.isGoogleDrive ? (
                      <motion.button
                        onClick={() => handleDownload(doc)}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border dark:border-gray-700"
                        aria-label="Download document"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border dark:border-gray-700"
                        aria-label="Google Drive link"
                      >
                        <Cloud className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative blobs (desktop only) */}
      <div className="hidden sm:block pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-20 -right-[46rem] h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 dark:bg-indigo-500/40 blur-3xl" />
        <div className="absolute bottom-20 -left-[46rem] h-[22rem] w-[22rem] rounded-full bg-purple-500/20 dark:bg-purple-500/40 blur-3xl" />
      </div>

      {/* Divider */}
      <div className="mt-16 flex justify-center">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700" />
      </div>
    </motion.main>
  );
}
