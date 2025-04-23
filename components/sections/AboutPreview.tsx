"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskRound as Flask, FileText, Atom } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: <Microscope className="h-8 w-8 text-chart-1" />,
    title: "Microscopy",
    description: "Expert in light and electron microscopy techniques for cellular analysis and pathology identification."
  },
  {
    icon: <Flask className="h-8 w-8 text-chart-2" />,
    title: "Clinical Chemistry",
    description: "Proficient in analytical methods for biochemical testing and laboratory diagnostics."
  },
  {
    icon: <FileText className="h-8 w-8 text-chart-3" />,
    title: "Lab Documentation",
    description: "Detailed recording of procedures, findings, and results following clinical standards."
  },
  {
    icon: <Atom className="h-8 w-8 text-chart-4" />,
    title: "Molecular Diagnosis",
    description: "Experience with PCR, DNA extraction, and genetic analysis for diagnostic applications."
  }
];

export default function AboutPreview() {
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

    const elements = document.querySelectorAll('.animate-on-scroll');
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
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 animate-on-scroll opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold tracking-tight">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground">
              I'm a dedicated Bachelor of Medical Laboratory Technology student with a passion for 
              diagnostic medicine and clinical laboratory procedures. My academic journey has equipped 
              me with hands-on experience in various laboratory techniques and medical diagnostics.
            </p>
            
            <p className="text-muted-foreground">
              With a strong foundation in both theoretical knowledge and practical skills, 
              I aim to contribute to healthcare advancement through precise laboratory 
              analysis and innovative diagnostic approaches.
            </p>
            
            <Button asChild>
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}