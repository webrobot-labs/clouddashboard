"use client"; // Forza il rendering solo lato client

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "../../components/Projects/ProjectList";
import { useRouter } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";

// Definisci la struttura dei dati del progetto (adatta alla risposta effettiva dell'API)
interface Project {
  id: number;
  name: string;
  description: string;
  frequency: string;
  // Aggiungi altri campi in base alla struttura dell'API
}

// Funzione principale per la pagina protetta
export default function Index() {
  return (
    <SessionProvider>
      <ClientPage />
    </SessionProvider>
  );
}

// Componente client-side per visualizzare i progetti
function ClientPage() {
  const [projData, setProjData] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null); // Gestisce gli errori
  const router = useRouter();
  const { data: session, status } = useSession(); // Ottieni la sessione lato client

  useEffect(() => {
    if (status === "unauthenticated") {
      // Reindirizza alla pagina di login se non autenticato
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    // Effettua la richiesta per ottenere i progetti solo se la sessione è autenticata
    if (status === "authenticated" && session?.accessToken) {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/project", {
            headers: {
              Authorization: `Bearer ${session.accessToken}`, // Passa l'accessToken dalla sessione
            },
          });
          setProjData(response.data); // Imposta i dati dei progetti
        } catch (error) {
          console.error("Errore:", error);
          setError("Impossibile caricare i progetti"); // Imposta il messaggio di errore
        }
      };

      fetchData();
    }
  }, [status, session]);

  // Mostra un messaggio di caricamento se i dati sono in fase di caricamento
  if (status === "loading") {
    return <p>Caricamento dei progetti...</p>;
  }

  // Se c'è un errore, visualizzalo
  if (error) {
    return <p>{error}</p>;
  }

  // Se non ci sono ancora dati sui progetti, mostra un messaggio
  if (!projData) {
    return <p>Nessun progetto disponibile o caricamento fallito.</p>;
  }

  return <ProjectList projData={projData} />;
}
