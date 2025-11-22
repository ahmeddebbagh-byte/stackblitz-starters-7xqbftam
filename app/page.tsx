'use client'; 
import React, { useState } from 'react';
import Link from 'next/link';

// --- 1. LA BARRE DE NAVIGATION ---
const Navbar = () => (
  <nav className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-[#F7FAFC] border-b border-gray-100 sticky top-0 z-50">
    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl tracking-tight">
      <span className="text-2xl">🧭</span> 
      <span>CareerPulse AI</span>
    </div>
    
    {/* SECTION LIENS (ACCUEIL ACTIF) */}
    <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
      <Link href="/" className="text-emerald-600 transition">Accueil</Link> 
      <Link href="/comment-ca-marche" className="hover:text-emerald-600 transition">Comment ça marche</Link>
      <Link href="/tarifs" className="hover:text-emerald-600 transition">Tarifs</Link>
    </div>
    
    {/* Bouton Espace Candidat (désormais un Link) */}
    <Link 
      href="/espace-candidat" 
      className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100"
    >
      Espace Candidat
    </Link>
  </nav>
);

// --- 2. LE COMPOSANT D'INTERRUPTION MODALE ---
const AuthModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-[100] flex items-center justify-center p-4" onClick={onClose}>
    <div 
      className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center transform transition-all animate-in zoom-in-95 duration-300"
      onClick={e => e.stopPropagation()} 
    >
      <div className="text-5xl mb-4">🔐</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Presque terminé !</h3>
      <p className="text-gray-600 mb-6">
        Pour que votre analyse IA démarre, veuillez créer votre **Espace Candidat**.
      </p>

      <Link 
        href="/espace-candidat" 
        className="w-full inline-block bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition shadow-md"
      >
        Finaliser mon Inscription
      </Link>
      <button 
        onClick={onClose} 
        className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition"
      >
        Annuler
      </button>
    </div>
  </div>
);


// --- 3. LA SECTION PRINCIPALE & LOGIQUE API ---
const Hero = () => {
  const [status, setStatus] = useState('idle');
  const [cvFile, setCvFile] = useState<File | null>(null);
  
  // Simulation de l'état d'authentification et de l'affichage de la modale
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Fonction asynchrone qui appelle l'API /api/match
  const handleSearch = async (e: any) => {
    e.preventDefault();
    
    if (!cvFile) {
        alert("Veuillez charger votre CV pour continuer.");
        return;
    }
    
    // LOGIQUE D'INTERRUPTION : Si déconnecté, montre la modale
    if (!isAuthenticated) {
        setShowAuthModal(true);
        return; 
    }
    
    // LOGIQUE API : Utilisateur authentifié
    setStatus('uploading');

    const form = e.currentTarget;
    const formData = new FormData();
    const promptValue = form.querySelector('textarea').value; 

    formData.append('cv', cvFile); 
    formData.append('prompt', promptValue);

    try {
      const response = await fetch('/api/match', {
        method: 'POST',
        body: formData, 
      });

      const data = await response.json();

      if (response.status === 202) {
        setStatus('success');
      } else {
        console.error('Erreur API:', data.error);
        setStatus('idle');
        alert('Erreur: ' + (data.error || "Problème de connexion au serveur."));
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      setStatus('idle');
      alert('Erreur réseau. Le serveur ne répond pas.');
    }
  };

  return (
    <div className="flex flex-col items-center text-center pt-16 pb-24 px-4 bg-[#F7FAFC] min-h-screen">
      
      {/* AFFICHAGE CONDITIONNEL DE LA MODALE */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      
      {/* Badge de promesse */}
      <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-wide shadow-sm">
        <span>⚡</span>
        <span>Résultats garantis sous 72h</span>
      </div>
      
      {/* Titre Principal */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight max-w-4xl">
        Ne cherchez plus l'emploi idéal.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
          Laissez l'IA le chasser.
        </span>
      </h1>
      
      <p className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed">
        Téléchargez votre CV. Notre algorithme scanne le marché caché et les réseaux privés pour vous livrer 5 opportunités exclusives.
      </p>

      {/* La "Boite Magique" (Formulaire) */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 w-full max-w-lg relative overflow-hidden transition-all mx-auto">
        
        {status === 'success' ? (
          // --- ÉTAT : SUCCÈS ---
          <div className="py-8 animate-pulse flex flex-col items-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Dossier reçu !</h3>
            <p className="text-gray-500">L'analyse IA a commencé.</p>
            
            <div className="mt-8 w-full bg-gray-50 rounded-lg p-4 border border-gray-100 text-left">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Temps restant :</span>
                <span className="font-bold text-emerald-600">71h 59m</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full w-[1%]"></div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">Vous recevrez un email dès que les matchs sont trouvés.</p>
          </div>
        ) : (
          // --- ÉTAT : FORMULAIRE ---
          <form onSubmit={handleSearch} className="space-y-6 text-left">
            
            {/* Input CV réel */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">1. Votre CV (PDF)</label>
              
              <label 
                htmlFor="cv-upload" 
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition group bg-gray-50 
                  ${cvFile ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 hover:bg-emerald-50/50 hover:border-emerald-300'}`}
              >
                <input
                  type="file"
                  id="cv-upload"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="hidden" 
                  onChange={e => setCvFile(e.target.files ? e.target.files[0] : null)}
                />

                <span className="text-4xl mb-2 group-hover:scale-110 transition">📄</span>
                
                <span className="text-sm font-medium text-gray-500">
                  {cvFile ? cvFile.name : 'Cliquez ou glissez votre CV ici'}
                </span>
                {cvFile && <span className="text-xs text-emerald-600 mt-1">Fichier prêt à l'envoi ✅</span>}
              </label>
            </div>

            {/* Input Prompt */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">2. Vos Critères</label>
              <textarea 
                className="w-full border border-gray-200 bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none text-sm transition resize-none"
                rows={3}
                placeholder="Ex: Je veux un poste de Product Manager, Full Remote, Salaire min 65k€..."
                name="prompt"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'uploading' || !cvFile}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2"
            >
              {status === 'uploading' 
                ? 'Analyse en cours...' 
                : isAuthenticated ? '🚀 Lancer la recherche' : 'Créer mon Espace et Lancer'
              }
            </button>
          </form>
        )}
      </div>

      {/* Preuve Sociale */}
      <div className="mt-16 pt-8 border-t border-gray-200 w-full max-w-2xl">
        <p className="text-sm text-gray-400 mb-6 font-medium uppercase tracking-widest">Ils recrutent via notre IA</p>
        <div className="flex justify-center gap-8 md:gap-12 opacity-40 grayscale text-xl font-bold font-serif">
           <span>Google</span>
           <span>Spotify</span>
           <span>Airbnb</span>
           <span>Tesla</span>
        </div>
      </div>
    </div>
  );
};

// --- 4. LE RENDU FINAL ---
export default function Home() {
  return (
    <main className="min-h-screen font-sans text-gray-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
    </main>
  );
}