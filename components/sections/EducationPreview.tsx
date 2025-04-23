"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    year: "2021 - Present",
    title: "Bachelor of Medical Laboratory Technology",
    institution: "University Medical College",
    description: "Comprehensive study of laboratory medicine, diagnostic techniques, and clinical analysis."
  },
  {
    year: "2020 - 2021",
    title: "Pre-Medical Science",
    institution: "Science Academy",
    description: "Foundation courses in biology, chemistry, and laboratory skills preparation."
  }
];

export default function EducationPreview() {
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.timeline-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Education
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            My academic journey in medical laboratory sciences and clinical diagnostics.
          </p>
        </div>

        <div 
          ref={timelineRef} 
          className="relative max-w-3xl mx-auto mt-16 pb-8"
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "timeline-animate opacity-0 transition-all duration-700 mb-12 relative",
                index % 2 === 0 ? "sm:pr-10 sm:translate-x-8" : "sm:pl-10 sm:translate-x-[-8px]"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div 
                className={cn(
                  "relative bg-card p-6 rounded-lg shadow sm:w-[calc(100%-2rem)]",
                  index % 2 === 0 ? "sm:ml-auto" : ""
                )}
              >
                {/* Year badge - Adjusted positioning */}
                <div className="absolute bg-primary text-primary-foreground text-sm py-1 px-3 rounded-full font-medium z-10
                  sm:top-1/2 sm:transform sm:-translate-y-1/2"
                  style={{
                    [index % 2 === 0 ? "right" : "left"]: "-5.9rem",
                  }}
                >
                  {item.year}
                </div>
                
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/education">
              View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}