"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  date: string;
  description: string;
  bullets: string[];
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  role,
  date,
  description,
  bullets,
  tech,
  liveUrl = "#",
  codeUrl = "#",
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
          <CardDescription className="text-base">{role}</CardDescription>
          <p className="text-sm text-muted-foreground mt-3">{description}</p>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-2 mb-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((item, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(liveUrl, "_blank")}
            className="flex-1 group"
          >
            <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            View Live
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(codeUrl, "_blank")}
            className="flex-1 group"
          >
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

