'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function SiteLoader() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Adjust delay as needed

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  );
}
