import { useEffect, useRef, useCallback } from 'react';

export const CursorFollower = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mainPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const hovering = useRef(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = useCallback(() => {
    mainPos.current.x = lerp(mainPos.current.x, pos.current.x, 0.2);
    mainPos.current.y = lerp(mainPos.current.y, pos.current.y, 0.2);
    trailPos.current.x = lerp(trailPos.current.x, pos.current.x, 0.1);
    trailPos.current.y = lerp(trailPos.current.y, pos.current.y, 0.1);

    if (mainRef.current) {
      const s = hovering.current ? 2 : 1;
      mainRef.current.style.transform = `translate3d(${mainPos.current.x - 8}px,${mainPos.current.y - 8}px,0) scale(${s})`;
    }
    if (trailRef.current) {
      const s = hovering.current ? 2.5 : 1;
      trailRef.current.style.transform = `translate3d(${trailPos.current.x - 16}px,${trailPos.current.y - 16}px,0) scale(${s})`;
    }

    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t?.matches?.('button, a, [data-cursor="pointer"], h1, h2, h3, .text-gradient')) {
        hovering.current = true;
      }
    };

    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t?.matches?.('button, a, [data-cursor="pointer"], h1, h2, h3, .text-gradient')) {
        hovering.current = false;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
      cancelAnimationFrame(raf.current);
    };
  }, [tick]);

  return (
    <>
      <div
        ref={mainRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          backgroundColor: 'hsl(220 60% 35% / 0.3)',
          willChange: 'transform',
          transition: 'background-color 0.3s ease',
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-40"
        style={{
          border: '1px solid hsl(220 60% 35% / 0.15)',
          willChange: 'transform',
          transition: 'border-color 0.3s ease',
        }}
      />
    </>
  );
};
