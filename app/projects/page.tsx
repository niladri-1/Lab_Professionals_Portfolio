"use client";

import { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, BarChart, Microscope, FlaskRound as Flask, Search } from "lucide-react";

const metadata: Metadata = {
  title: "Projects | BMLT Portfolio",
  description: "Showcasing my laboratory research projects and clinical studies",
};

const projects = [
  {
    id: 1,
    title: "Blood Cell Morphology Analysis",
    description: "Comprehensive study of red blood cell morphology in anemic patients using digital imaging and machine learning classification.",
    longDescription: "This research project focused on automating the analysis of red blood cell morphology in anemic patients. Using advanced digital microscopy imaging and machine learning algorithms, we developed a system that could accurately identify and categorize various RBC abnormalities including poikilocytosis and anisocytosis. The system was validated against expert pathologist assessments, showing 92% concordance with manual classification.",
    image: "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Research", "Hematology"],
    tags: ["Digital Microscopy", "Machine Learning", "Anemia", "RBC Morphology"],
    tools: ["Digital Imaging Software", "TensorFlow", "Python", "Clinical Data Analysis"],
    date: "January 2023",
    report: "https://example.com/report"
  },
  {
    id: 2,
    title: "Automated Urinalysis System Evaluation",
    description: "Evaluation of automated urine analyzers for accuracy and efficiency in routine clinical laboratory settings.",
    longDescription: "This project evaluated the performance of three automated urinalysis systems for implementation in a clinical laboratory setting. The study compared analytical precision, throughput capacity, ease of use, and cost-effectiveness. Each system was assessed using standardized samples and real patient specimens with results compared to manual microscopy and chemical analysis. The findings provided comprehensive data to guide clinical laboratory equipment selection decisions.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Clinical", "Evaluation"],
    tags: ["Urinalysis", "Automation", "Quality Control", "Laboratory Efficiency"],
    tools: ["Automated Analyzers", "Statistical Analysis", "ROC Curve Analysis", "Method Comparison"],
    date: "March 2023",
    report: "https://example.com/report"
  },
  {
    id: 3,
    title: "Point-of-Care Testing in Emergency Medicine",
    description: "Analysis of rapid diagnostic tests for emergency department use, focusing on accuracy and time efficiency.",
    longDescription: "This study evaluated the implementation of point-of-care testing (POCT) in emergency medicine settings. The research assessed the impact on patient care outcomes, clinical decision-making speed, and resource utilization. Multiple POCT devices for cardiac markers, blood gases, and electrolytes were compared against central laboratory testing for accuracy, turnaround time, and clinical utility. The project resulted in evidence-based recommendations for POCT integration in emergency care protocols.",
    image: "https://images.pexels.com/photos/8376263/pexels-photo-8376263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Clinical", "Research"],
    tags: ["Point-of-Care", "Emergency Medicine", "Rapid Diagnostics", "Clinical Outcomes"],
    tools: ["POC Devices", "Statistical Analysis", "Clinical Trials", "Survey Methods"],
    date: "May 2023",
    report: "https://example.com/report"
  },
  {
    id: 4,
    title: "Molecular Detection of Antimicrobial Resistance",
    description: "Development of PCR-based methods for rapid detection of antibiotic resistance genes in clinical isolates.",
    longDescription: "This research focused on developing and optimizing molecular diagnostic techniques for the rapid identification of antimicrobial resistance genes in clinical bacterial isolates. Using multiplex PCR and targeted genetic sequencing, the study aimed to reduce the time required for identifying resistant pathogens compared to traditional culture methods. The project successfully identified key resistance markers in MRSA, VRE, and ESBLs with results available within 4 hours of sample collection.",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Research", "Microbiology"],
    tags: ["Antimicrobial Resistance", "PCR", "Molecular Diagnostics", "Infection Control"],
    tools: ["Thermal Cycler", "DNA Extraction", "Gel Electrophoresis", "Bioinformatics"],
    date: "August 2023",
    report: "https://example.com/report"
  },
  {
    id: 5,
    title: "Quality Management System Implementation",
    description: "Development and implementation of a comprehensive quality management system for a clinical laboratory.",
    longDescription: "This project involved designing and implementing a comprehensive quality management system for a clinical laboratory seeking ISO 15189 accreditation. The work included developing standard operating procedures, quality control protocols, document management systems, and personnel competency assessments. The implementation resulted in improved process efficiency, reduced error rates, and successful accreditation outcomes.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Quality", "Management"],
    tags: ["ISO 15189", "Quality Assurance", "Process Improvement", "Accreditation"],
    tools: ["Document Control Software", "Process Mapping", "Audit Tools", "Quality Metrics"],
    date: "October 2023",
    report: "https://example.com/report"
  },
  {
    id: 6,
    title: "Biomarker Validation for Early Cancer Detection",
    description: "Collaborative research evaluating novel biomarkers for early detection of colorectal cancer in clinical samples.",
    longDescription: "This collaborative research project evaluated the clinical utility of novel protein biomarkers for the early detection of colorectal cancer. The study involved analyzing serum samples from patients with confirmed colorectal cancer, patients with benign gastrointestinal conditions, and healthy controls. Using immunoassay techniques and proteomics, the research identified a panel of three biomarkers that, when combined, provided 85% sensitivity and 90% specificity for early-stage colorectal cancer detection.",
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    categories: ["Research", "Oncology"],
    tags: ["Cancer Diagnostics", "Biomarkers", "Clinical Validation", "Early Detection"],
    tools: ["ELISA", "Mass Spectrometry", "ROC Analysis", "Biostatistics"],
    date: "December 2023",
    report: "https://example.com/report"
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    // Apply category filter
    if (activeFilter !== "all" && !project.categories.includes(activeFilter)) {
      return false;
    }
    
    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.tags.some(tag => tag.toLowerCase().includes(search)) ||
        project.categories.some(category => category.toLowerCase().includes(search))
      );
    }
    
    return true;
  });

  const project = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Research Projects</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        A showcase of my laboratory research projects, clinical studies, and academic work
        in medical laboratory technology.
      </p>
      
      {/* Project filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <Tabs defaultValue="all" onValueChange={setActiveFilter}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Research">Research</TabsTrigger>
            <TabsTrigger value="Clinical">Clinical</TabsTrigger>
            <TabsTrigger value="Quality">Quality</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full sm:w-[200px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge>{project.date}</Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => setSelectedProject(project.id)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="bg-muted/50 inline-flex p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
      
      {/* Project details modal */}
      {selectedProject !== null && project && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
            <div className="relative h-64 md:h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4 bg-background/80 hover:bg-background" 
                size="icon"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {project.categories.map((category, i) => (
                  <Badge key={i} variant="secondary">
                    {category}
                  </Badge>
                ))}
                <span className="text-muted-foreground text-sm ml-auto">
                  {project.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-muted-foreground mb-6">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Technologies & Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Areas of Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
                <Button asChild>
                  <a href={project.report} target="_blank" rel="noopener noreferrer">
                    View Report <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Research statistics */}
      <section className="pt-8 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Research Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Total Projects</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Publications</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Research Hours</p>
                  <p className="text-3xl font-bold">720+</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Lab Techniques</p>
                  <p className="text-3xl font-bold">12+</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Flask className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}