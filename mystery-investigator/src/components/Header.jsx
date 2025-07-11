import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function Header() {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-md rounded-b-2xl p-4 mb-6"
    >
      <h1 className="text-2xl font-bold text-center">Mystery Investigator</h1>
    </Motion.div>
  );
}
