"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const metadata: Metadata = {
  title: "Contact | BMLT Portfolio",
  description: "Get in touch with me for collaborations, opportunities, or inquiries",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Me</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        I'm always open to discussing research opportunities, laboratory science innovations,
        or potential collaborations. Feel free to reach out using the form below or through
        my contact information.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-300 p-4 rounded-md text-center">
                  <p>Thank you for your message! I'll respond as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@bmltportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Medical University Campus</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connect Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-8 w-8 mb-2 text-blue-600" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="h-8 w-8 mb-2" />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="h-8 w-8 mb-2 text-blue-400" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span>By appointment</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span>Closed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}