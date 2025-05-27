'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string; // Optional className prop for additional styling
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, margin: '-100px' }}
      className={`py-8 md:py-12 ${className}`} // Added some default padding
    >
      {children}
    </motion.div>
  );
}
