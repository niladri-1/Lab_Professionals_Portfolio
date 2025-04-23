"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Blood Cell Morphology Analysis",
    description: "Comprehensive study of RBC morphology in anemic patients using digital imaging and machine learning classification.",
    image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Hematology", "Digital Microscopy", "Research"]
  },
  {
    title: "Automated Urinalysis System",
    description: "Evaluation of automated urine analyzers for accuracy and efficiency in routine clinical laboratory settings.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Clinical Chemistry", "Automation", "Quality Control"]
  },
  {
    title: "Point-of-Care Testing Study",
    description: "Analysis of rapid diagnostic tests for emergency department use, focusing on accuracy and time efficiency.",
    image: "https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Diagnostics", "Emergency Medicine", "Quality Assurance"]
  }
];

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, 
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.project-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-muted/30"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            A selection of my laboratory research projects and clinical studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="project-animate opacity-0 transition-all duration-700 overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-0">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}