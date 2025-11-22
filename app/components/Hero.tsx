'use client'; // Indispensable pour l'interactivité
import React, { useState } from 'react';
import { UploadCloud, CheckCircle, Clock, Search } from 'lucide-react';

export default function HeroSection() {
  const [status, setStatus] = useState('idle'); // idle, uploading, success

  // Code pour la fonction à remplacer dans Hero.tsx ou page.tsx

const Hero = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'uploading', 'success'

  // MODIFICATION ICI : La fonction devient asynchrone et appelle le backend
  const handleSimulateUpload = async (e: any) => {
    e.preventDefault();
    setStatus('uploading');

    // 1. Récupération des données du formulaire
    const form = e.currentTarget;
    const formData = new FormData();
    
    // Le prompt est dans la balise <textarea>. On le récupère :
    const promptValue = form.querySelector('textarea').value; 

    // Simulation : Nous créons un fichier factice pour que le backend reçoive quelque chose
    formData.append('cv', new File(['CV_content'], 'mon_cv.pdf')); 
    formData.append('prompt', promptValue);

    try {
      // 2. Appel au Backend /api/match
      const response = await fetch('/api/match', {
        method: 'POST',
        body: formData, // Envoi des données (CV + Prompt)
      });

      const data = await response.json();

      if (response.status === 202) {
        // 3. SUCCÈS : Le backend a accepté de traiter la requête
        setStatus('success');
        console.log('Recherche lancée. Job ID:', data.jobId);
      } else {
        // 4. ÉCHEC : Erreur du backend (ex: CV manquant, statut 400)
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
  // ... Le reste du composant Hero ...
  
  // Assurez-vous que le formulaire appelle bien cette fonction :
  // <form onSubmit={handleSimulateUpload} className="space-y-6 text-left">
  
  // ...
  
}

  return (
    <div className="flex flex-col items-center text-center pt-16 pb-20 px-4 bg-[#F7FAFC]">
      
      {/* Badge Promo */}
      <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-8 uppercase tracking-wide">
        <Clock size={14} />
        <span>Résultats garantis sous 72h</span>
      </div>
      
      {/* Titre */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight max-w-4xl">
        Ne cherchez plus.<br />
        <span className="text-emerald-600">Laissez l'IA chasser pour vous.</span>
      </h1>
      
      <p className="text-lg text-gray-500 max-w-xl mb-12">
        Uploadez votre CV. Notre algorithme scanne le marché caché et vous livre 5 opportunités sur-mesure, prêtes à postuler.
      </p>

      {/* Carte Formulaire */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-lg relative overflow-hidden mx-auto">
        
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-10 animate-pulse">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Dossier reçu !</h3>
            <p className="text-gray-500 mt-2">Analyse IA en cours...</p>
            <div className="mt-6 bg-emerald-50 border border-emerald-100 text-emerald-800 px-4 py-3 rounded-lg text-sm font-medium">
              📧 Vos résultats arriveront par email.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSimulateUpload} className="space-y-5 text-left">
            
            {/* Zone CV */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">1. Votre CV (PDF)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-emerald-400 transition group bg-gray-50/50">
                <UploadCloud className="text-gray-400 group-hover:text-emerald-500 mb-2" size={28} />
                <span className="text-sm text-gray-500 font-medium">Cliquez pour déposer</span>
              </div>
            </div>

            {/* Zone Prompt */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">2. Vos exigences</label>
              <textarea 
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm min-h-[100px]"
                placeholder="Ex: Je cherche un poste de Chef de Projet, Télétravail partiel, Salaire min 55k€, secteur Tech ou Santé..."
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'uploading'}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-black transition flex justify-center items-center gap-2 mt-4"
            >
              {status === 'uploading' ? (
                'Analyse en cours...'
              ) : (
                <>
                  <span>Lancer la recherche</span>
                  <Search size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Social Proof */}
      <div className="mt-12 flex flex-col items-center">
        <p className="text-sm text-gray-400 mb-4">Ils ont trouvé leur job grâce à nous</p>
        <div className="flex gap-6 opacity-40 grayscale">
           {/* Ronds de couleur pour simuler des logos */}
           <div className="h-8 w-8 rounded-full bg-gray-400"></div>
           <div className="h-8 w-8 rounded-full bg-gray-600"></div>
           <div className="h-8 w-8 rounded-full bg-gray-500"></div>
           <div className="h-8 w-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}