import React from 'react';
import Link from 'next/link';

// --- LE COMPOSANT NAVBAR ---
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
        <Link href="/tarifs" className="text-emerald-600 transition">Tarifs</Link>
      </div>
      
      {/* Bouton Espace Candidat */}
      <Link href="/espace-candidat" className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100">
        Espace Candidat
      </Link>
    </nav>
);

// --- LE COMPOSANT PRINCIPAL (APOSTROPHES CORRIGÉES) ---
export default function TarifsPage() {
    return (
        <main className="min-h-screen bg-[#F7FAFC] font-sans">
            <Navbar />
            
            <div className="flex flex-col items-center text-center pt-16 pb-24 px-4">
                
                {/* Titre Principal */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 max-w-2xl">
                    Trouvez votre prochaine opportunité.
                    <br /> C&apos;est le moment d&apos;investir en vous.
                </h1>
                <p className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed">
                    Accédez à des matchs de carrière exclusifs générés par l&apos;IA. Sans engagement.
                </p>

                {/* Grille des Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    
                    {/* Plan 1 : Basic */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Plan Découverte</h2>
                        <p className="text-gray-500 mb-6">Testez la puissance de l&apos;IA.</p>
                        
                        <p className="text-4xl font-extrabold text-emerald-600 mb-4">
                            Gratuit <span className="text-base font-medium text-gray-400">/ 1 analyse</span>
                        </p>
                        
                        <Link href="/" className="w-full bg-emerald-100 text-emerald-700 py-3 rounded-lg font-bold hover:bg-emerald-200 transition text-center mb-6">
                            Commencer
                        </Link>
                        
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex items-center gap-2">✅ 1 Analyse de CV IA</li>
                            <li className="flex items-center gap-2">✅ 3 Matchs de carrière</li>
                            <li className="flex items-center gap-2">❌ Accès au marché caché</li>
                            <li className="flex items-center gap-2">❌ Suivi illimité</li>
                        </ul>
                    </div>

                    {/* Plan 2 : Pro (Recommandé) */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-emerald-500 flex flex-col items-start text-left relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Recommandé
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2 mt-4">Plan Pro</h2>
                        <p className="text-gray-500 mb-6">Pour trouver votre poste idéal rapidement.</p>
                        
                        <p className="text-4xl font-extrabold text-gray-900 mb-4">
                            9,99€ <span className="text-base font-medium text-gray-400">/ mois</span>
                        </p>
                        
                        <Link href="/espace-candidat" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition shadow-lg text-center mb-6">
                            S&apos;abonner
                        </Link>
                        
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex items-center gap-2">✅ 5 Analyses de CV IA</li>
                            <li className="flex items-center gap-2">✅ Jusqu&apos;à 25 Matchs de carrière</li>
                            <li className="flex items-center gap-2">✅ Accès au marché caché</li>
                            <li className="flex items-center gap-2">✅ Suivi illimité</li>
                        </ul>
                    </div>
                    
                    {/* Plan 3 : Équipe */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Plan Recruteur</h2>
                        <p className="text-gray-500 mb-6">Pour les entreprises qui recrutent.</p>
                        
                        <p className="text-4xl font-extrabold text-gray-900 mb-4">
                            Contactez-nous
                        </p>
                        
                        <Link href="#" className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition text-center mb-6">
                            Demander un devis
                        </Link>
                        
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li className="flex items-center gap-2">✅ Accès à la base de CV</li>
                            <li className="flex items-center gap-2">✅ Outil de matching inverse</li>
                            <li className="flex items-center gap-2">✅ Support dédié</li>
                            <li className="flex items-center gap-2">❌ N&apos;inclut pas le coaching candidat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
