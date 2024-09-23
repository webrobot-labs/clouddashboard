"use client";
import React, { useEffect, useState } from "react";
import NewCat from "../../components/NewCat/NewCat";

const Index: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  // Controllo per verificare se il codice viene eseguito lato client
  useEffect(() => {
    setIsClient(true); // Questo effetto si attiva solo quando il componente viene montato lato client
  }, []);

  if (!isClient) {
    return null; // Ritorna null o un loader finché il componente non è montato lato client
  }

  return (
    <div>
      <NewCat />
    </div>
  );
};

export default Index;
