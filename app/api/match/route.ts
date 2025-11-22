// app/api/match/route.ts

// Fonction qui gère les requêtes POST (l'envoi du formulaire)
export async function POST(request: Request) {
  
  // 1. Réception des données du formulaire (CV + Prompt)
  const formData = await request.formData();
  const cvFile = formData.get('cv');
  const userPrompt = formData.get('prompt') as string;

  // 2. Vérification rapide
  if (!cvFile || !userPrompt) {
    return new Response(JSON.stringify({ error: 'CV ou prompt manquant.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 3. SIMULATION DU DÉMARRAGE DU TRAITEMENT IA (72h)
  const jobId = `job_${Date.now()}`; 

  // 4. RÉPONSE AU CLIENT (statut 202: Accepté, traitement en cours)
  return new Response(
    JSON.stringify({
      message: 'Recherche lancée. Statut EN COURS.',
      jobId: jobId,
      eta: '72 heures',
    }),
    {
      status: 202,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}