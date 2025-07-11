import React from 'react';
import { motion as Motion } from 'framer-motion';

export default function SuspectCard({ suspect }) {
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="bg-white p-4 rounded-2xl shadow">
        <h4 className="text-lg font-semibold">{suspect.name}</h4>
        <p className="italic">{suspect.role}</p>
      </div>
    </Motion.div>
  );
}
