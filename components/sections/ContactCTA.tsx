"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ArrowRight, Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Interested in collaboration, research opportunities, or just want to discuss 
              medical laboratory technology? I'd love to hear from you.
            </p>
            
            <div className="space-y-4 mt-8">
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
                  <p className="font-medium">Medical University Campus, San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="mt-6">
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Quick Message</CardTitle>
              <CardDescription>
                Send a brief message and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-[120px]" 
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}