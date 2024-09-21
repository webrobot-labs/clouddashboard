import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryBotsList from "../../../components/CategoryBots/CategoryBotsList";
import axios from "axios";

// Definizione del tipo per il singolo lavoro associato ai bot
interface Job {
  id: number;
  description: string;
  creationDate: string;
}

// Definizione del tipo per i dati di categoria che vengono passati come props
interface CatData {
  id: number;
  name: string;
  job: Job[];
}

// Definizione delle props del componente CategoryBotsList
interface CategoryBotsListProps {
  singleData: CatData;
  refetch: () => void;
}

function Index() {
  const router = useRouter();
  const id = router?.query?.slug as string | undefined; // Tipizzato come stringa o undefined

  // Tipizza singleData come CategoryData o undefined
  const [singleData, setSingleData] = useState<CatData | undefined>();

  // Funzione per ottenere i dati della categoria
  const fetchData = async (id: string | undefined) => {
    if (!id) return; // Se l'ID non è ancora disponibile, esci dalla funzione
    await axios
      .post("/api/category/", {
        id,
      })
      .then((response) => {
        setSingleData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData(id); // Chiama fetchData quando l'ID è disponibile
  }, [id]);

  console.log(singleData);

  // Aggiungi un controllo per assicurarti che singleData non sia undefined prima di renderizzare
  return (
    <>
      {singleData ? (
        <CategoryBotsList singleData={singleData} refetch={() => fetchData(id)} />
      ) : (
        <p>Loading...</p> // Visualizza un messaggio di caricamento finché singleData non è disponibile
      )}
    </>
  );
}

export default Index;
