"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 dark:from-transparent dark:to-background/90"
      />

      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div
            className={`flex-1 space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">John Doe</span>
              <span className="block">Medical Laboratory</span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Technology Professional
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate BMLT student with expertise in clinical diagnostics,
              laboratory techniques, and medical research. Transforming healthcare
              through precise analysis and innovative approaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="https://images.pexels.com/photos/4031440/pexels-photo-4031440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="BMLT Professional"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              BMLT Student
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <Button variant="ghost" size="icon" aria-label="Scroll Down">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}