"use client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il CSS di Bootstrap
import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import "../styles/global.css";
import "../styles/login.module.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from 'react';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Crea un'istanza di QueryClient usando React's useState
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body>
        {/* Avvolgi l'applicazione con QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}


