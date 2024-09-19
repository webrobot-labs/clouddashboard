import CatList from "../../../components/Categories/CategoryList";
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// Definizione dei tipi per i dati di Categoria e Job
interface Job {
  description: string;
  creationDate: string;
}

interface CatData {
  id: number;
  name: string;
  job: Job[];
}

// Funzione per ottenere i dati delle categorie
const getCatData = async (): Promise<CatData[]> => {
  try {
    const response = await axios.get("/api/category");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch category data");
  }
};

const IndexPage: React.FC = () => {
  // Usa React Query per gestire il fetch e la cache dei dati
  const {
    isLoading,
    error,
    data: catData,
    refetch,
  } = useQuery<CatData[], Error>({
    queryKey: ["catData"],
    queryFn: getCatData,
  });

  if (isLoading) {
    return <h3>Loading.....</h3>;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      {catData && <CatList catData={catData} refetch={refetch} />}
    </div>
  );
};

export default IndexPage;

