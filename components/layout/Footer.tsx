import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">BMLT Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              A showcase of my journey as a Bachelor of Medical Laboratory 
              Technology student and aspiring medical laboratory professional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com" className="hover:text-primary" aria-label="GitHub">
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="mailto:example@email.com" className="hover:text-primary" aria-label="Email">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BMLT Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}