
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: 'https://nidhinzzx4.myportfolio.com/', label: 'Portfolio', external: true },
  { href: '/courses', label: 'Masterclasses' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/recommendations', label: 'AI Recommendations' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, external }: { href: string; label: string, external?: boolean }) => {
    const isActive = !external && (pathname === href || (href !== '/' && pathname.startsWith(href)));
    return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        'transition-colors text-lg md:text-sm hover:text-primary',
        isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
      )}
    >
      {label}
    </Link>
  )};

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold tracking-tight">The Digital Da Vinci</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-background">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold tracking-tight">The Digital Da Vinci</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
