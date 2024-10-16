# Dockerfile per eseguire direttamente un'applicazione Next.js 14 compilata

# Step 1: Fase di runtime
FROM node:20.8.1-alpine AS runner

# Imposta la directory di lavoro
WORKDIR /app

# Copia solo i file compilati necessari per l'esecuzione dell'applicazione
COPY .next ./.next
COPY public ./public
COPY package.json ./package.json
COPY node_modules ./node_modules
COPY yarn.lock ./yarn.lock

# Imposta la variabile d'ambiente per la produzione
ENV NODE_ENV production

# Espone la porta su cui l'applicazione è in ascolto
EXPOSE 3000

# Avvia l'applicazione
CMD ["yarn", "start"]