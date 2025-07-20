import { Youtube, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/80 z-10">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} The Digital Da Vinci. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.youtube.com/@the.digital.davinci" target="_blank" rel="noreferrer">
            <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://www.instagram.com/the.digital.davinci/" target="_blank" rel="noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/m-nidhin-sivan-5564221b2/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
