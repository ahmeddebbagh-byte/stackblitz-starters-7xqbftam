import React from 'react';
import Link from 'next/link';

// Réutilisation locale de la Navbar
const Navbar = () => (
    <nav className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-[#F7FAFC] border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl tracking-tight">
        <span className="text-2xl">🧭</span> 
        <span>CareerPulse AI</span>
      </div>
      
      {/* SECTION LIENS (COMMENT ÇA MARCHE ACTIF) */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <Link href="/" className="hover:text-emerald-600 transition">Accueil</Link> 
        <Link href="/comment-ca-marche" className="text-emerald-600 transition">Comment ça marche</Link>
        <Link href="/tarifs" className="hover:text-emerald-600 transition">Tarifs</Link>
      </div>
      
      <Link 
  href="/espace-candidat" 
  className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100"
>
  Espace Candidat
</Link>
    </nav>
);

// Composant pour chaque étape
const Step = ({ number, title, description, icon }: { number: number, title: string, description: string, icon: string }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition hover:shadow-xl hover:scale-[1.01] duration-300">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-3xl font-bold text-emerald-800 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            {icon}
        </div>
        <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Étape {number}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    </div>
);

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-[#F7FAFC] font-sans">
            <Navbar />
            
            <div className="max-w-4xl mx-auto py-16 px-4">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                    Découvrez la méthode <span className="text-emerald-600">CareerPulse AI</span>
                </h1>
                <p className="text-xl text-gray-500 text-center mb-12">
                    De la soumission de votre CV à la réception de votre liste d'opportunités en 4 étapes.
                </p>

                <div className="space-y-10">
                    <Step
                        number={1}
                        title="Soumission Sécurisée"
                        description="Téléchargez votre CV et décrivez en quelques lignes le poste idéal et vos critères de salaire/culture."
                        icon="📄"
                    />
                    <Step
                        number={2}
                        title="Analyse Sémantique Profonde"
                        description="Notre modèle propriétaire scanne votre document, extrait plus de 50 mots-clés de compétences, et modélise votre profil cible."
                        icon="🧠"
                    />
                    <Step
                        number={3}
                        title="Scan du Marché Caché"
                        description="L'IA croise vos mots-clés avec des centaines de sources de jobs non publiées (réseaux d'anciens, forums privés, API partenaires)."
                        icon="🔎"
                    />
                    <Step
                        number={4}
                        title="Validation et Livraison"
                        description="Chaque match potentiel est vérifié par nos experts RH. Vous recevez par email votre liste ultra-personnalisée sous 72h."
                        icon="📧"
                    />
                </div>
            </div>
        </main>
    );
}