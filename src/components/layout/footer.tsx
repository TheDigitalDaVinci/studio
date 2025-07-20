import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} The Digital Da Vinci. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
