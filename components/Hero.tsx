"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building AI-powered web experiences and developer tools.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              I'm Samruddhi Tiwari, a full-stack developer and AI enthusiast
              focused on creating SaaS tools, intelligent web apps, and
              productivity-focused products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://drive.google.com/file/d/1h4IWSBBIdgZs2uBFeUJsMp2Z01fe1B-_/view?usp=drive_link", "_blank")}
                className="group"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-blue-500">developer</span> ={" "}
                      <span className="text-green-500">{"{"}</span>
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-yellow-500">name</span>:{" "}
                      <span className="text-green-500">"Samruddhi"</span>,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-yellow-500">role</span>:{" "}
                      <span className="text-green-500">
                        "Full-Stack Developer"
                      </span>
                      ,
                    </div>
                    <div className="pl-4 text-muted-foreground">
                      <span className="text-yellow-500">focus</span>:{" "}
                      <span className="text-green-500">
                        "AI & SaaS Products"
                      </span>
                    </div>
                    <div className="text-muted-foreground">
                      <span className="text-green-500">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

