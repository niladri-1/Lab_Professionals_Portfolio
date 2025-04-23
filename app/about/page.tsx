import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, FlaskRound as Flask, FileText, Atom, Dna, Glasses, HeartPulse, Brain, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About | BMLT Portfolio",
  description: "Learn about my background, skills, and journey in Medical Laboratory Technology",
};

const technicalSkills = [
  {
    icon: <Microscope className="h-8 w-8 text-chart-1" />,
    title: "Microscopy",
    description: "Light and electron microscopy techniques with expertise in cellular analysis and pathology identification."
  },
  {
    icon: <Flask className="h-8 w-8 text-chart-2" />,
    title: "Clinical Chemistry",
    description: "Analytical methods for biochemical testing and laboratory diagnostics with automated analyzers."
  },
  {
    icon: <FileText className="h-8 w-8 text-chart-3" />,
    title: "Lab Documentation",
    description: "Detailed recording of procedures, findings, and results following clinical standards and regulatory requirements."
  },
  {
    icon: <Atom className="h-8 w-8 text-chart-4" />,
    title: "Molecular Diagnosis",
    description: "Experience with PCR, DNA extraction, and genetic analysis for diagnostic applications and research."
  }
];

const specializations = [
  {
    icon: <Dna className="h-8 w-8 text-chart-5" />,
    title: "Genetic Testing",
    description: "Analysis of DNA samples for genetic markers associated with diseases and hereditary conditions."
  },
  {
    icon: <Glasses className="h-8 w-8 text-chart-1" />,
    title: "Histopathology",
    description: "Preparation and analysis of tissue samples for disease diagnosis and research purposes."
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-chart-2" />,
    title: "Hematology",
    description: "Blood component analysis and testing for various hematological disorders and conditions."
  },
  {
    icon: <Brain className="h-8 w-8 text-chart-3" />,
    title: "Neuroscience",
    description: "Laboratory testing related to neurological disorders and brain chemistry analysis."
  }
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a Bachelor of Medical Laboratory Technology student, I am passionate about the 
                intersection of clinical diagnostics and patient care. My journey in medical laboratory 
                sciences began with a fascination for how laboratory diagnostics provide the foundation 
                for evidence-based healthcare decisions.
              </p>
              <p>
                I'm currently pursuing my degree at University Medical College, where I've developed 
                proficiency in various laboratory techniques, from routine biochemical testing to 
                specialized molecular diagnostics. My academic focus includes hematology, clinical 
                chemistry, immunology, and molecular biology.
              </p>
              <p>
                Beyond technical skills, I value the critical role medical laboratory professionals play 
                in healthcare teams, providing accurate diagnostic information that guides treatment 
                decisions and improves patient outcomes.
              </p>
            </div>
            <Button className="mt-8">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medical Laboratory Professional"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 bg-card p-4 rounded-lg shadow-lg">
              <blockquote className="italic text-muted-foreground">
                "In the medical laboratory, precision isn't just a standard—it's the difference between a correct 
                diagnosis and a missed opportunity for healing."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 inline-flex rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Specializations */}
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Areas of Interest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((skill, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 inline-flex rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Personal Philosophy */}
      <section className="my-16">
        <div className="bg-muted/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight mb-6">My Approach</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I believe in the power of accurate diagnostics to transform healthcare. Every sample 
              represents a patient whose treatment depends on precise analysis and interpretation. 
              This responsibility drives my commitment to excellence in laboratory practice.
            </p>
            <p>
              My approach combines technical precision with continuous learning. The field of medical 
              laboratory technology is constantly evolving with new diagnostic methods, automation 
              systems, and research findings. Staying current with these developments is essential for 
              providing the highest quality diagnostic services.
            </p>
            <p>
              I'm particularly interested in how emerging technologies like artificial intelligence 
              and advanced molecular techniques can enhance traditional laboratory methods, improving 
              both efficiency and diagnostic accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}