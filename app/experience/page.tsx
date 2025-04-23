import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Experience | BMLT Portfolio",
  description: "My professional experience and internships in Medical Laboratory Technology",
};

const experiences = [
  {
    position: "Laboratory Intern",
    company: "City General Hospital",
    period: "Jun 2023 - Present",
    location: "San Francisco, CA",
    description: "Rotating internship through clinical laboratory departments providing hands-on experience with diagnostic procedures and laboratory operations.",
    responsibilities: [
      "Assist in specimen collection, processing, and analysis under supervision",
      "Perform basic hematology, chemistry, and urinalysis testing",
      "Participate in quality control procedures and documentation",
      "Shadow senior laboratory technologists in specialized testing areas",
      "Contribute to laboratory data management and reporting"
    ],
    technologies: ["Automated Analyzers", "LIMS", "Microscopy", "Centrifugation", "Spectrophotometry"],
    image: "https://images.pexels.com/photos/8376255/pexels-photo-8376255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    position: "Research Assistant",
    company: "University Medical Research Lab",
    period: "Sep 2022 - May 2023",
    location: "San Francisco, CA",
    description: "Assisted in molecular diagnostics research focusing on novel biomarker identification for early disease detection.",
    responsibilities: [
      "Prepared and processed biological samples for genetic analysis",
      "Conducted PCR, gel electrophoresis, and other molecular techniques",
      "Maintained detailed laboratory notebooks and research documentation",
      "Assisted in data collection, organization, and preliminary analysis",
      "Collaborated with research team on experiment design and optimization"
    ],
    technologies: ["PCR", "DNA Extraction", "Gel Electrophoresis", "Western Blot", "ELISA"],
    image: "https://images.pexels.com/photos/8325914/pexels-photo-8325914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    position: "Laboratory Assistant",
    company: "MedPath Diagnostic Center",
    period: "Jun 2022 - Aug 2022",
    location: "San Francisco, CA",
    description: "Summer position assisting laboratory technicians in a busy outpatient diagnostic center serving multiple clinics.",
    responsibilities: [
      "Received and accessioned patient samples according to laboratory protocols",
      "Prepared specimens for testing through centrifugation and aliquoting",
      "Assisted with basic testing procedures under direct supervision",
      "Maintained laboratory supplies and prepared reagents as needed",
      "Handled specimen transport and storage following established guidelines"
    ],
    technologies: ["Sample Processing", "Laboratory Information Systems", "Quality Control", "Basic Testing"],
    image: "https://images.pexels.com/photos/8460223/pexels-photo-8460223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Professional Experience</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        My hands-on experience in clinical laboratories and research settings, where I've applied
        my medical laboratory technology education to real-world diagnostic challenges.
      </p>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-64 lg:h-auto lg:col-span-1">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <Badge variant="secondary" className="mb-2">
                      {exp.period}
                    </Badge>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p>{exp.company}</p>
                    <p className="text-sm opacity-80">{exp.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} • {exp.period} • {exp.location}
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-6">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies & Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight mb-6">Skills & Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Hematology Analysis</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-1 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Clinical Chemistry</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-2 w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Molecular Techniques</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-3 w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Microbiology Testing</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-4 w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Urinalysis</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-5 w-[95%]"></div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Professional Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Quality Control</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-1 w-[85%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Laboratory Safety</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-2 w-[90%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Data Analysis</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-3 w-[75%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Instrument Maintenance</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-4 w-[80%]"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Regulatory Compliance</span>
                  <div className="w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-chart-5 w-[70%]"></div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}