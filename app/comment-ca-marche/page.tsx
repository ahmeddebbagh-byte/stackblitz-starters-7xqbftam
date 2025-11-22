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
        <Link href="/comment-ca-marche" className="text-emerald-600 transition">Comment ça marche</Link>
        <Link href="/tarifs" className="hover:text-emerald-600 transition">Tarifs</Link>
      </div>
      
      {/* Bouton Espace Candidat */}
      <Link href="/espace-candidat" className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100">
        Espace Candidat
      </Link>
    </nav>
);

// --- LE COMPOSANT PRINCIPAL (APOSTROPHES CORRIGÉES) ---
export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-[#F7FAFC] font-sans">
            <Navbar />
            
            <div className="flex flex-col items-center text-center pt-16 pb-24 px-4">
                
                {/* Titre Principal */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 max-w-2xl">
                    C&apos;est simple. C&apos;est puissant.
                    <br /> Découvrez la méthode en 3 étapes.
                </h1>
                <p className="text-lg text-gray-500 max-w-xl mb-16 leading-relaxed">
                    Nous automatisons le travail d&apos;un chasseur de têtes, pour vous.
                </p>

                {/* Timeline des étapes */}
                <div className="space-y-12 w-full max-w-3xl text-left">
                    
                    {/* ÉTAPE 1 */}
                    <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-500 rounded-full text-white font-bold text-xl">1</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre Profil Complet</h2>
                            <p className="text-gray-600">
                                Vous téléchargez votre CV (le vrai !), décrivez le poste idéal et vos attentes salariales. Cette étape crée votre jumeau numérique de carrière.
                            </p>
                        </div>
                    </div>

                    {/* ÉTAPE 2 */}
                    <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-500 rounded-full text-white font-bold text-xl">2</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">L&apos;Analyse IA</h2>
                            <p className="text-gray-600">
                                Notre algorithme scanne des milliers d&apos;offres publiées et non publiées (le marché caché) en temps réel, évaluant la compatibilité de votre profil avec chaque poste.
                            </p>
                        </div>
                    </div>

                    {/* ÉTAPE 3 */}
                    <div className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-500 rounded-full text-white font-bold text-xl">3</div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Vos Matchs Exclusifs</h2>
                            <p className="text-gray-600">
                                Dans un délai maximum de 72 heures, vous recevez une liste de 5 opportunités de carrière parfaitement alignées avec vos critères, prêtes à être saisies.
                            </p>
                        </div>
                    </div>

                </div>
                
                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href="/" className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition shadow-xl shadow-emerald-100">
                        Commencez votre recherche maintenant !
                    </Link>
                </div>
            </div>
        </main>
    );
}
