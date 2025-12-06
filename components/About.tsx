"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a <strong className="text-foreground">full-stack web developer</strong> and{" "}
            <strong className="text-foreground">AI/ML enthusiast</strong> passionate about
            building innovative solutions that solve real-world problems.
          </p>

          <p>
            My expertise spans across modern JavaScript frameworks, microservices
            architecture, and AI integration. I specialize in creating{" "}
            <strong className="text-foreground">SaaS products</strong> that are both
            powerful and user-friendly, with a focus on rapid MVP development and
            scalable backend systems.
          </p>

          <p>
            I excel at <strong className="text-foreground">problem-solving</strong>,{" "}
            <strong className="text-foreground">building MVPs quickly</strong>, working
            with RESTful APIs, and integrating payment systems like Stripe and Dodo
            Payments. My goal is to create products that make a meaningful impact.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

