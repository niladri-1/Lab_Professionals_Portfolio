import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Education | BMLT Portfolio",
  description: "My educational background and academic journey in Medical Laboratory Technology",
};

const education = [
  {
    period: "2021 - Present",
    degree: "Bachelor of Medical Laboratory Technology",
    institution: "University Medical College",
    location: "San Francisco, CA",
    description: "Four-year program focusing on comprehensive laboratory medicine, diagnostic techniques, and clinical analysis.",
    courses: [
      "Clinical Biochemistry", "Hematology", "Medical Microbiology", 
      "Histopathology", "Molecular Diagnostics", "Immunology", 
      "Laboratory Management", "Biostatistics"
    ],
    achievements: [
      "Dean's List for Academic Excellence (2022, 2023)",
      "Research Assistant in the Department of Molecular Diagnostics",
      "Student Representative for Laboratory Sciences Department"
    ],
    image: "https://images.pexels.com/photos/8376147/pexels-photo-8376147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    period: "2020 - 2021",
    degree: "Pre-Medical Science",
    institution: "Science Academy",
    location: "San Francisco, CA",
    description: "One-year foundation program in biological sciences with laboratory skills preparation.",
    courses: [
      "General Biology", "Organic Chemistry", "Biochemistry", 
      "Introduction to Laboratory Techniques", "Medical Terminology", 
      "Anatomy and Physiology"
    ],
    achievements: [
      "Top Graduate, Pre-Medical Track",
      "Science Academy Merit Scholarship Recipient",
      "Laboratory Skills Excellence Award"
    ],
    image: "https://images.pexels.com/photos/8412414/pexels-photo-8412414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const certifications = [
  {
    name: "Phlebotomy Technician Certification",
    issuer: "National Phlebotomy Association",
    date: "December 2022",
    description: "Professional certification in blood collection techniques and patient care during phlebotomy procedures."
  },
  {
    name: "Laboratory Safety and Compliance",
    issuer: "Medical Laboratory Safety Institute",
    date: "March 2023",
    description: "Comprehensive training in laboratory safety protocols, hazardous materials handling, and regulatory compliance."
  },
  {
    name: "Point-of-Care Testing Specialist",
    issuer: "American Association for Clinical Chemistry",
    date: "July 2023",
    description: "Specialized certification for conducting and managing point-of-care testing in clinical settings."
  },
  {
    name: "Molecular Diagnostic Techniques",
    issuer: "Molecular Medicine Academy",
    date: "November 2023",
    description: "Advanced training in PCR, DNA sequencing, and genetic analysis techniques for diagnostic applications."
  }
];

export default function EducationPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Education & Qualifications</h1>
      
      <Tabs defaultValue="education" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="education">Academic History</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="education" className="space-y-12">
          {education.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.institution}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm font-medium">{item.period}</p>
                    <h3 className="text-xl font-bold">{item.institution}</h3>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {item.period}
                  </Badge>
                  <h3 className="text-2xl font-bold">{item.degree}</h3>
                  <p className="text-muted-foreground mt-1 mb-4">
                    {item.institution}, {item.location}
                  </p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, i) => (
                      <Badge key={i} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Achievements</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="certifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <Badge variant="outline">{cert.date}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <section className="my-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Continuing Education</h2>
        <div className="bg-muted/50 p-8 rounded-lg">
          <p className="text-muted-foreground mb-6">
            As a medical laboratory professional, I'm committed to continuous learning to stay 
            current with advancing diagnostic technologies and evolving laboratory practices. 
            Recent professional development activities include:
          </p>
          
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Advanced Flow Cytometry Workshop</h3>
              <p className="text-sm text-muted-foreground">
                Three-day intensive workshop on advanced applications of flow cytometry in 
                diagnostic medicine and research settings.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Laboratory Informatics and Data Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Online course on laboratory information systems, data management, and analytics 
                for modern clinical laboratories.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-semibold">Clinical Laboratory Innovations Conference</h3>
              <p className="text-sm text-muted-foreground">
                Annual conference attendance to learn about emerging technologies and 
                networking with laboratory professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}