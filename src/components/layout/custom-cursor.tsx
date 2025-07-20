'use client';
import { useEffect, useState } from 'react';

const CURSOR_TRAIL_COUNT = 8;

const CursorDot = ({ position, isHovering, index }: { position: { x: number; y: number }, isHovering: boolean, index: number }) => {
  const isMainDot = index === 0;
  
  const size = isMainDot ? (isHovering ? 16 : 8) : 2; 
  const opacity = 1 - (index / CURSOR_TRAIL_COUNT);

  if (isMainDot) {
    return (
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size}px`,
          height: `${size}px`,
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          transition: isHovering ? 'width 0.2s ease, height 0.2s ease, top 0s, left 0s' : 'width 0.2s ease, height 0.2s ease, top 0s, left 0s',
        }}
        className={`fixed pointer-events-none z-[9999] bg-primary transition-[width,height,opacity] rounded-full`}
      >
        <div
          className="absolute inset-0 rounded-full border border-foreground/50 transition-all duration-300"
          style={{
            transform: isHovering ? 'scale(2.5)' : 'scale(0)',
            opacity: isHovering ? 1 : 0,
          }}
        />
      </div>
    );
  }

  // Trailing dots
  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transform: `translate(-50%, -50%)`,
        transition: `top ${0.03 * index}s, left ${0.03 * index}s`,
      }}
      className={`fixed pointer-events-none z-[9998] rounded-full bg-primary/50 transition-opacity ease-out`}
    />
  );
};


export function CustomCursor() {
  const [positions, setPositions] = useState(Array(CURSOR_TRAIL_COUNT).fill({ x: -100, y: -100 }));
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This will only run on the client, preventing the hydration error.
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const onMouseMove = (e: MouseEvent) => {
      setPositions(prev => [
        { x: e.clientX, y: e.clientY },
        ...prev.slice(0, CURSOR_TRAIL_COUNT - 1)
      ]);
      if (!isVisible) setIsVisible(true);
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
    };
  }, [isVisible, isMounted]);

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
