"use client";

import { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, Calendar, Award, X } from "lucide-react";

const metadata: Metadata = {
  title: "Certificates | BMLT Portfolio",
  description: "Professional certifications and achievements in Medical Laboratory Technology",
};

const certificates = [
  {
    id: 1,
    title: "Phlebotomy Technician Certification",
    issuer: "National Phlebotomy Association",
    date: "December 2022",
    description: "Professional certification in blood collection techniques and patient care during phlebotomy procedures.",
    skills: ["Venipuncture", "Capillary Puncture", "Sample Handling", "Patient Care"],
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  },
  {
    id: 2,
    title: "Laboratory Safety and Compliance",
    issuer: "Medical Laboratory Safety Institute",
    date: "March 2023",
    description: "Comprehensive training in laboratory safety protocols, hazardous materials handling, and regulatory compliance.",
    skills: ["OSHA Standards", "Biohazard Management", "Chemical Safety", "Emergency Procedures"],
    image: "https://images.pexels.com/photos/8964459/pexels-photo-8964459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  },
  {
    id: 3,
    title: "Point-of-Care Testing Specialist",
    issuer: "American Association for Clinical Chemistry",
    date: "July 2023",
    description: "Specialized certification for conducting and managing point-of-care testing in clinical settings.",
    skills: ["POCT Implementation", "Quality Control", "Test Validation", "Operator Training"],
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  },
  {
    id: 4,
    title: "Molecular Diagnostic Techniques",
    issuer: "Molecular Medicine Academy",
    date: "November 2023",
    description: "Advanced training in PCR, DNA sequencing, and genetic analysis techniques for diagnostic applications.",
    skills: ["PCR", "DNA Extraction", "Sequencing", "Genetic Analysis"],
    image: "https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  },
  {
    id: 5,
    title: "Clinical Laboratory Quality Management",
    issuer: "Clinical Laboratory Management Association",
    date: "February 2024",
    description: "Certification in implementing and maintaining quality management systems in clinical laboratory settings.",
    skills: ["Quality Assurance", "Process Improvement", "Documentation Control", "Audit Procedures"],
    image: "https://images.pexels.com/photos/7579576/pexels-photo-7579576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  },
  {
    id: 6,
    title: "Advanced Hematology Analysis",
    issuer: "International Society for Laboratory Hematology",
    date: "April 2024",
    description: "Specialized training in advanced hematological analysis techniques and interpretation of complex cases.",
    skills: ["Blood Cell Morphology", "Flow Cytometry", "Hemoglobinopathies", "Bone Marrow Analysis"],
    image: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/certificate"
  }
];

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<null | number>(null);

  const filteredCertificates = certificates.filter(cert => {
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      return (
        cert.title.toLowerCase().includes(search) ||
        cert.issuer.toLowerCase().includes(search) ||
        cert.description.toLowerCase().includes(search) ||
        cert.skills.some(skill => skill.toLowerCase().includes(search))
      );
    }
    return true;
  });

  const certificate = selectedCertificate !== null 
    ? certificates.find(c => c.id === selectedCertificate) 
    : null;

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Certifications</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Professional certifications and specialized training in medical laboratory technology,
        demonstrating my commitment to excellence and continuous professional development.
      </p>
      
      {/* Search */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search certificates by title, issuer, or skills..."
          className="pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Certificates grid */}
      {filteredCertificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <Card 
              key={cert.id} 
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedCertificate(cert.id)}
            >
              <div className="relative h-48">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex items-center text-white gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="font-medium mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="bg-muted/50 inline-flex p-4 rounded-full mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No certificates found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria
          </p>
        </div>
      )}
      
      {/* Certificate modal */}
      {selectedCertificate !== null && certificate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
            <div className="relative h-64">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
              />
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4 bg-background/80 hover:bg-background" 
                size="icon"
                onClick={() => setSelectedCertificate(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {certificate.date}
                </Badge>
              </div>
              
              <h2 className="text-2xl font-bold mb-1">{certificate.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{certificate.issuer}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">
                    {certificate.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Skills & Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 flex justify-between items-center">
                  <div className="flex items-center text-muted-foreground">
                    <Award className="h-5 w-5 mr-2" />
                    <span>Verified Credential</span>
                  </div>
                  
                  <Button asChild>
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                      View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Professional development section */}
      <section className="mt-16 pt-8 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Professional Development</h2>
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="text-muted-foreground mb-6">
            In addition to formal certifications, I regularly participate in continuing 
            education and professional development activities to stay current with 
            emerging technologies and best practices in laboratory medicine:
          </p>
          
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Annual Medical Laboratory Professionals Conference</h3>
                <p className="text-sm text-muted-foreground">
                  Regular attendance at industry conferences to learn about emerging technologies 
                  and network with other laboratory professionals.
                </p>
              </div>
            </li>
            
            <li className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Online Continuing Education Courses</h3>
                <p className="text-sm text-muted-foreground">
                  Completion of monthly online courses covering advanced laboratory techniques, 
                  new diagnostic methods, and regulatory updates.
                </p>
              </div>
            </li>
            
            <li className="flex gap-3">
              <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Laboratory Journal Club</h3>
                <p className="text-sm text-muted-foreground">
                  Active participation in bi-weekly journal club meetings to review and discuss 
                  current research in laboratory medicine and diagnostic technology.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}