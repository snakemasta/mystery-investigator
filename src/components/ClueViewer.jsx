import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';

export default function ClueViewer({ clue }) {
  const [zoom, setZoom] = useState(false);
  return (
    <Motion.div whileHover={{ scale: 1.05 }} className="relative cursor-pointer" onClick={() => setZoom(!zoom)}>
      <img
        src={clue.image}
        alt={clue.title}
        className={`rounded-2xl shadow-md transition-transform ${zoom ? 'scale-150 z-10' : ''}`}
      />
      <p className="mt-2 text-center font-medium">{clue.title}</p>
    </Motion.div>
  );
}
