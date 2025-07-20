'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', onMouseMove);

    document.querySelectorAll('a, button, [role="button"], [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
       document.querySelectorAll('a, button, [role="button"], [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          'fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-300 ease-out',
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className={cn(
            'w-2 h-2 rounded-full bg-primary transition-all duration-300',
            isHovering ? 'scale-150' : 'scale-100'
        )} />
      </div>
       <div
        className={cn(
          'fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-transform duration-100 ease-out',
          'w-10 h-10 rounded-full border-2 border-primary/50',
          isHovering ? 'scale-150 opacity-0' : 'scale-100'
        )}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
