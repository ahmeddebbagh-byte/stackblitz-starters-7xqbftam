import React from 'react';
import Link from 'next/link';

// Réutilisation locale de la Navbar
const Navbar = () => (
    <nav className="w-full py-5 px-6 md:px-10 flex justify-between items-center bg-[#F7FAFC] border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xl tracking-tight">
        <span className="text-2xl">🧭</span> 
        <span>CareerPulse AI</span>
      </div>
      
      {/* SECTION LIENS (TARIFS ACTIF) */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <Link href="/" className="hover:text-emerald-600 transition">Accueil</Link> 
        <Link href="/comment-ca-marche" className="hover:text-emerald-600 transition">Comment ça marche</Link>
        <Link href="/tarifs" className="text-emerald-600 transition">Tarifs</Link>
      </div>
      
      <Link 
  href="/espace-candidat" 
  className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-emerald-100"
>
  Espace Candidat
</Link>
    </nav>
);

// Composant pour une carte de tarif
const PriceCard = ({ title, price, features, isFeatured = false, speed }: { title: string, price: string, features: string[], isFeatured?: boolean, speed: string }) => (
    <div className={`flex flex-col p-8 rounded-2xl shadow-xl transition-all duration-300 transform h-full
        ${isFeatured ? 'bg-emerald-700 text-white scale-[1.03] shadow-emerald-400/50' : 'bg-white text-gray-900 border border-gray-100 hover:shadow-2xl'}`
    }>
        <h3 className="text-2xl font-extrabold mb-2" style={{ color: isFeatured ? 'white' : undefined }}>{title}</h3>
        <p className={`text-sm mb-4 font-semibold ${isFeatured ? 'text-emerald-200' : 'text-gray-500'}`}>{speed}</p>

        <div className="text-4xl font-black mb-6">
            {price}
            <span className={`text-base font-medium ${isFeatured ? 'text-emerald-200' : 'text-gray-400'}`}>/ unique</span>
        </div>

        <ul className="space-y-3 flex-grow mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <span className={`mr-3 text-lg ${isFeatured ? 'text-green-300' : 'text-emerald-500'}`}>
                        {feature.startsWith('❌') ? '❌' : '✅'}
                    </span>
                    <span className={`${isFeatured ? 'text-emerald-100' : 'text-gray-600'} text-sm`}>
                        {feature.replace('❌', '').trim()}
                    </span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-3 rounded-lg font-bold transition-all text-sm 
            ${isFeatured 
                ? 'bg-white text-emerald-700 hover:bg-gray-100 shadow-md' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'
            }`}
        >
            Choisir ce Plan
        </button>
    </div>
);

export default function PricingPage() {
    const prices = [
        {
            title: "Plan Découverte",
            price: "Gratuit",
            speed: "Livraison 1 semaine",
            features: ["✅ 1 Match de Job", "❌ Validation RH manuelle", "❌ Priorité de Traitement", "❌ Accès au support Premium"],
            isFeatured: false
        },
        {
            title: "Plan Standard",
            price: "99€",
            speed: "Livraison 72 heures",
            features: ["✅ 5 Matchs de Job", "✅ Validation RH manuelle", "✅ Priorité de Traitement", "❌ Accès au support Premium"],
            isFeatured: true
        },
        {
            title: "Plan Exécutif",
            price: "199€",
            speed: "Livraison 24 heures",
            features: ["✅ 10 Matchs de Job", "✅ Validation RH manuelle", "✅ Priorité de Traitement", "✅ Consultation carrière 30min"],
            isFeatured: false
        }
    ];

    return (
        <main className="min-h-screen bg-[#F7FAFC] font-sans">
            <Navbar />
            
            <div className="max-w-6xl mx-auto py-16 px-4 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Trouvez votre prochaine opportunité <span className="text-emerald-600">sans effort.</span>
                </h1>
                <p className="text-xl text-gray-500 mb-12">
                    Choisissez le plan qui correspond à votre ambition et à votre urgence.
                </p>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {prices.map((plan, index) => (
                        <PriceCard key={index} {...plan} />
                    ))}
                </div>
                
                <p className="text-sm text-gray-400 mt-12">
                    Tous les plans incluent un accès garanti à l'algorithme d'IA CareerPulse. Paiement unique, sans abonnement.
                </p>
            </div>
        </main>
    );
}