"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Zap } from "lucide-react";

const experiences = [
  {
    icon: Code,
    title: "AI-Powered SaaS Development",
    description:
      "Building production-ready AI-driven SaaS tools with modern tech stacks, focusing on user experience and scalable architecture.",
  },
  {
    icon: Zap,
    title: "Rapid MVP Development",
    description:
      "Specializing in quickly turning ideas into functional prototypes and MVPs, with emphasis on clean code and best practices.",
  },
  {
    icon: Briefcase,
    title: "Full-Stack Engineering",
    description:
      "Developing end-to-end web applications with modern frameworks, microservices, and seamless API integrations.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

