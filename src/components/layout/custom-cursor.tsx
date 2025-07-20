'use client';
import { useEffect, useState } from 'react';

const CURSOR_TRAIL_COUNT = 10;

const CursorDot = ({ position, isHovering, index }: { position: { x: number; y: number }, isHovering: boolean, index: number }) => {
  const isMainDot = index === 0;
  
  // Main dot is larger and changes on hover
  const size = isMainDot ? (isHovering ? 24 : 16) : 6;
  const opacity = isMainDot ? 1 : 1 - index / CURSOR_TRAIL_COUNT;
  const scale = isMainDot ? 1 : 1 - index / CURSOR_TRAIL_COUNT;
  
  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transform: `translate(-50%, -50%) scale(${scale})`,
        transition: `width 0.2s, height 0.2s, top ${0.01 * index}s, left ${0.01 * index}s`,
      }}
      className={`fixed pointer-events-none z-[9999] bg-primary transition-[width,height,opacity] ease-out ${isMainDot ? 'rounded-full' : ''}`}
    ></div>
  );
};


export function CustomCursor() {
  const [positions, setPositions] = useState(Array(CURSOR_TRAIL_COUNT).fill({ x: -100, y: -100 }));
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, [isVisible]);

  return (
    <div style={{ opacity: isVisible ? 1 : 0 }} className="transition-opacity duration-300">
      {positions.map((pos, index) => (
        <CursorDot key={index} index={index} position={pos} isHovering={isHovering} />
      ))}
    </div>
  );
}
