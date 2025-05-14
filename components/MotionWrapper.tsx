"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionAnimeCardProps {
  children: ReactNode;
  index: number;
}

export function MotionAnimeCard({ children, index }: MotionAnimeCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25 * (index % 8),
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
