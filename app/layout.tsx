"use client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il CSS di Bootstrap
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../styles/global.css";
import "../styles/login.module.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from 'react';
import { SessionProvider } from "next-auth/react"; // Importa SessionProvider
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Crea un'istanza di QueryClient usando React's useState
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body>
        {/* Avvolgi l'applicazione con QueryClientProvider e SessionProvider */}
        <QueryClientProvider client={queryClient}>
          <SessionProvider >
            {children}
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}


