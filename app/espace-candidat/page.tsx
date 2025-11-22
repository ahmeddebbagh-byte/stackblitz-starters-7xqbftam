'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Composant Navbar (copie adaptée de la version Accueil)
const Navbar = () => (
    <nav className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-[#F7FAFC] border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl tracking-tight">
        <span className="text-2xl">🧭</span> 
        <span>CareerPulse AI</span>
      </div>
      
      {/* SECTION LIENS */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <Link href="/" className="hover:text-emerald-600 transition">Accueil</Link> 
        <Link href="/comment-ca-marche" className="hover:text-emerald-600 transition">Comment ça marche</Link>
        <Link href="/tarifs" className="hover:text-emerald-600 transition">Tarifs</Link>
      </div>
      
      {/* Le bouton est ici pour la symétrie, mais le lien actif est dans la section Auth */}
      <Link href="/espace-candidat" className="bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100">
        Espace Candidat
      </Link>
    </nav>
);

// Composant de Formulaire
const AuthForm = ({ isLogin }: { isLogin: boolean }) => (
    <form className="space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            {isLogin ? "Connexion" : "Inscription"}
        </h2>
        
        {!isLogin && (
            // Champ Nom/Prénom pour l'inscription
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom et Prénom</label>
                <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="Jane Doe"
                />
            </div>
        )}

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
            <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                placeholder="vous@exemple.com"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de Passe</label>
            <input
                type="password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-emerald-500 focus:border-emerald-500 transition"
                placeholder="••••••••"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-emerald-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-800 transition shadow-lg"
        >
            {isLogin ? "Se Connecter" : "Créer mon Compte"}
        </button>
        
        {/* Lien de mot de passe oublié */}
        {isLogin && (
            <div className="text-center text-sm">
                <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Mot de passe oublié ?
                </a>
            </div>
        )}
    </form>
);


export default function CandidateAreaPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className="min-h-screen bg-[#F7FAFC] font-sans">
            <Navbar />
            
            <div className="flex justify-center items-start py-16 px-4">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 w-full max-w-md">
                    
                    {/* Toggle Connexion / Inscription */}
                    <div className="flex justify-center mb-8">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`px-6 py-2 rounded-l-full font-semibold transition text-sm ${
                                isLogin ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Connexion
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`px-6 py-2 rounded-r-full font-semibold transition text-sm ${
                                !isLogin ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            Inscription
                        </button>
                    </div>

                    <AuthForm isLogin={isLogin} />
                </div>
            </div>
        </main>
    );
}