'use client';
import { useEffect, useState } from 'react';

const CURSOR_TRAIL_COUNT = 10;

const CursorDot = ({ position, isHovering, index }: { position: { x: number; y: number }, isHovering: boolean, index: number }) => {
  const isMainDot = index === 0;
  
  // Main dot is a small circle. Trailing dots are smaller.
  const size = isMainDot ? 8 : 4; 
  const opacity = 1 - index / CURSOR_TRAIL_COUNT;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transform: `translate(-50%, -50%)`,
        transition: `top ${0.02 * index}s, left ${0.02 * index}s`,
      }}
      className={`fixed pointer-events-none z-[9999] rounded-full bg-primary transition-[width,height,opacity,transform] ease-out`}
    >
      {isMainDot && (
        <div
          className="absolute inset-0 rounded-full border border-primary transition-all duration-300"
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
