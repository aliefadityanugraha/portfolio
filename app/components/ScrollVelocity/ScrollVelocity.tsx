"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import items from "./items";

interface ScrollVelocityProps {
  velocity?: number;
  className?: string;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = (
    {
        velocity = 50,
        className = "",
        parallaxClassName,
        scrollerClassName,
        parallaxStyle,
        scrollerStyle,
        }) => {
  const baseX = useMotionValue(0); // Posisi horizontal awal
  const containerRef = useRef<HTMLDivElement>(null); // Referensi ke container utama

  /** Fungsi untuk loop tanpa batas */
  useAnimationFrame((t, delta) => {
    const moveBy = (velocity * delta) / 1000; // Hitung pergerakan berdasarkan delta time
    baseX.set(baseX.get() - moveBy); // Geser elemen ke kiri terus-menerus

    const container = containerRef.current;
    if (container) {
      const firstChild = container.children[0] as HTMLElement;
      if (firstChild) {
        const width = firstChild.offsetWidth;
        if (baseX.get() <= -width) {
          baseX.set(0); // Reset posisi ketika elemen pertama keluar dari layar
        }
      }
    }
  });

  return (
      <div
          ref={containerRef}
          className={`${parallaxClassName} relative overflow-hidden whitespace-nowrap`}
          style={parallaxStyle}
      >
        <motion.div
            className={`${scrollerClassName} flex text-center font-bold drop-shadow md:text-[2rem] md:leading-[3rem] pb-2`}
            style={{ x: baseX, ...scrollerStyle }}
        >
          {[...items, ...items].map((item, index) => (
              <div
                  key={index}
                  className={`flex items-center space-x-2 pl-4 pr-8 py-2 mx-2 rounded-full bg-[#C6DE41] ${className}`}
              >
                <img src={item.icon} alt={item.name} className="w-5 drop-shadow-sm" />
                <span>{item.name}</span>
              </div>
          ))}
        </motion.div>
      </div>
  );
};

export default ScrollVelocity;
