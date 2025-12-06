"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GridPilot – AI Spreadsheet Formula Assistant",
    role: "Full-Stack Developer / Founder",
    date: "May 2025",
    description:
      "Created an AI-powered assistant converting plain English instructions into accurate Excel/Google Sheets formulas with examples.",
    bullets: [
      "Leveraged Vercel Serverless Functions to reduce backend overhead and enable fully serverless deployment.",
      "Integrated 'Copy to Clipboard', query logging, and minimal UX to optimize productivity for business users.",
      "Implemented subscription model with global currency support (Stripe + Dodo Payments).",
    ],
    tech: ["Next.js", "Express.js", "OpenRouter API", "Vercel", "Stripe", "Dodo Payments"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "COMPLIANCE GENIE / Unriddle – Chat with PDFs/Docs",
    role: "Full-Stack Developer / Founder",
    date: "May 2025",
    description:
      "Built a document intelligence web app enabling users to upload PDFs and query them in natural language with instant AI-generated responses.",
    bullets: [
      "Implemented embeddings-based semantic search using Supabase Vector Database and OpenAI Embeddings.",
      "Developed a scalable microservice architecture: Frontend on Vercel + Backend on Render with secure API key handling.",
      "Designed tiered pricing with usage limits and integrated Stripe/Dodo for seamless SaaS monetization.",
    ],
    tech: [
      "Next.js",
      "FastAPI",
      "Supabase Vector",
      "OpenRouter API",
      "pdfplumber",
      "Stripe",
      "Dodo Payments",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

