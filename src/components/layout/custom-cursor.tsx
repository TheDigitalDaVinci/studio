'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState('default');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnterLink = () => setVariant('link');
    const onMouseLeaveLink = () => setVariant('default');

    document.addEventListener('mousemove', onMouseMove);

    document.querySelectorAll('a, button, [role="button"], [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, [role="button"], [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }
  
  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'hsl(var(--foreground))',
      mixBlendMode: 'difference' as const,
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'normal' as const,
      opacity: 0.2,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] rounded-full"
      variants={variants}
      animate={variant}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
