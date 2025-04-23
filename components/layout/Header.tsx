"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            BMLT
          </span>
          <span className="hidden md:inline-block font-medium">Portfolio</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile navigation toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileNavOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-2 py-3 text-sm font-medium rounded-md transition-colors",
                  pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}