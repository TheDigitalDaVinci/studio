'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/courses', label: 'Masterclasses' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
        'transition-colors text-sm hover:text-primary',
        isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
      )}
    >
      {label}
    </Link>
  )};

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/logo.png" alt="The Digital Da Vinci Logo" width={56} height={56} className="h-14 w-14" key={Date.now()} />
           <Image src="/davinci-title.png" alt="The Digital Da Vinci Title" width={250} height={56} className="hidden md:block h-14 w-auto" key={Date.now() + 1} />
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
                 <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/logo.png" alt="The Digital Da Vinci Logo" width={48} height={48} className="h-12 w-12" key={Date.now() + 2} />
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
