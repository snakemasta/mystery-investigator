import React from 'react';
import { Link } from 'react-router-dom';
import { cases } from '../data/cases';

export default function CaseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cases.map((c) => (
        <div key={c.id} className="bg-white p-4 rounded-2xl shadow-lg">
          <Link to={`/case/${c.id}`} className="block hover:underline">
            <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
            <p>{c.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
