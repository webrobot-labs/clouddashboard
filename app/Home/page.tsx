'use client';
import React from "react";
import InnerHeader from "../../components/Header/Header";
import SelfServiceLinks from "../../components/SelfServiceLinks/SelfServiceLink"; // Importa il componente rifattorizzato
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
const SelfServiceHome: React.FC = () => {
  const router = useRouter();

  const logout = (): void => {
    router.push("/"); // Esegui il logout navigando alla pagina principale
  };

  return (
    <>
      <InnerHeader />
      <section>
        {/* Renderizza i link di navigazione separati */}
        <SelfServiceLinks />
   
      </section>
    </>
  );
};

export default SelfServiceHome;