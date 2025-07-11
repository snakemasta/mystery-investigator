import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CaseList from './components/CaseList';
import CaseDetail from './components/CaseDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<CaseList />} />
          <Route path="/case/:id" element={<CaseDetail />} />
        </Routes>
      </main>
    </div>
  );
}
