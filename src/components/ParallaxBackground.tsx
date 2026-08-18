import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const y1 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -350]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -120]);
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 30]);
  const opacityGrid = useTransform(scrollY, [0, 1000], [0.08, 0.04]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050505]">
      {/* Dynamic ambient radial gradients in champagne gold / deep onyx */}
      <motion.div
        style={{
          y: y1,
          x: mousePos.x * 1.2,
        }}
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-[#9c8461]/[0.04] blur-[140px]"
      />
      <motion.div
        style={{
          y: y2,
          x: mousePos.x * -1.0,
        }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#c4aa82]/[0.03] blur-[150px]"
      />
      <motion.div
        style={{
          y: y3,
          x: mousePos.x * 0.7,
        }}
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#9c8461]/[0.03] blur-[130px]"
      />

      {/* Architectural subtle grid lines */}
      <motion.div
        style={{ opacity: opacityGrid }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Floating minimal particles */}
      <div className="absolute inset-0 opacity-25">
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-24 left-[15%] w-1.5 h-1.5 rounded-full bg-[#9c8461]/60"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-72 right-[25%] w-1 h-1 rounded-full bg-[#c4aa82]/50"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-[#9c8461]/40 blur-[0.5px]"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[65%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#9c8461]/40"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[85%] left-[30%] w-1 h-1 rounded-full bg-[#c4aa82]/50"
        />
      </div>

      {/* Subtle top edge border highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9c8461]/25 to-transparent" />
    </div>
  );
};
