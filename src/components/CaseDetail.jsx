import React from 'react';
import { useParams } from 'react-router-dom';
import { cases } from '../data/cases';
import ClueViewer from './ClueViewer';
import SuspectCard from './SuspectCard';
import ChatBox from './ChatBox';

export default function CaseDetail() {
  const { id } = useParams();
  const current = cases.find((c) => c.id === id);

  if (!current) return <p>Case not found.</p>;

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">{current.title}</h2>
        <p>{current.description}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2">Clues</h3>
        <div className="grid grid-cols-2 gap-4">
          {current.clues.map((clue) => (
            <ClueViewer key={clue.id} clue={clue} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2">Suspects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {current.suspects.map((s) => (
            <SuspectCard key={s.id} suspect={s} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2">Investigator Chat</h3>
        <ChatBox caseData={current} />
      </section>
    </div>
  );
}
