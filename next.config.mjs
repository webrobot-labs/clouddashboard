import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"


/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,  // Loggare l'URL completo nelle richieste di fetch
    },
    level: 'debug',  // Livello di logging
  },
  
  experimental: {
   
  },
  
  // Altre opzioni sperimentali o di ottimizzazione
  optimizeFonts: true,  // Ottimizzazione dei font
});

export default config;
