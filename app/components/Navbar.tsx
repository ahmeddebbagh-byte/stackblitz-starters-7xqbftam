import React from 'react';
import { Compass } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center bg-[#F7FAFC] border-b border-gray-100">
      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl">
        <Compass size={28} strokeWidth={2.5} />
        <span>CareerPulse AI</span>
      </div>
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <a href="#" className="hover:text-emerald-600 transition">Le Concept</a>
        <a href="#" className="hover:text-emerald-600 transition">Tarifs</a>
        <a href="#" className="hover:text-emerald-600 transition">Connexion</a>
      </div>
      <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-lg font-medium transition shadow-md text-sm">
        Espace Candidat
      </button>
    </nav>
  );
}