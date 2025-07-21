'use client';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const CURSOR_TRAIL_COUNT = 8;

const CursorDot = ({ position, isHovering, index }: { position: { x: number; y: number }, isHovering: boolean, index: number }) => {
  const isMainDot = index === 0;
  
  const size = isMainDot ? 8 : 4;
  const opacity = isMainDot ? 1 : 1 - (index / CURSOR_TRAIL_COUNT);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)',
        opacity: opacity,
        transition: isMainDot ? 'top 0s, left 0s' : `top ${0.03 * index}s, left ${0.03 * index}s`,
      }}
      className={cn(
        `fixed pointer-events-none rounded-full`,
        isMainDot ? 'z-[9999] bg-primary' : 'z-[9998] bg-primary/50'
      )}
    >
      {isMainDot && (
        <div
          className="absolute inset-0 rounded-full border border-foreground/30 transition-all duration-300"
          style={{
            transform: isHovering ? 'scale(4)' : 'scale(0)',
            opacity: isHovering ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};


export function CustomCursor() {
  const [positions, setPositions] = useState(Array(CURSOR_TRAIL_COUNT).fill({ x: -100, y: -100 }));
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Default to true, handle visibility in effect
  const [isMounted, setIsMounted] = useState(false);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    setIsMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(() => {
        setPositions(prev => [
          { x: e.clientX, y: e.clientY },
          ...prev.slice(0, CURSOR_TRAIL_COUNT - 1)
        ]);
      });
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    
    document.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    const onElementEnter = () => setIsHovering(true);
    const onElementLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onElementEnter);
      el.addEventListener('mouseleave', onElementLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onElementEnter);
        el.removeEventListener('mouseleave', onElementLeave);
      });
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className="transition-opacity duration-300 hidden md:block">
      {positions.map((pos, index) => (
        <CursorDot key={index} index={index} position={pos} isHovering={isHovering} />
      ))}
    </div>
  );
}
