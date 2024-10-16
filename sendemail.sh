#!/bin/bash

# Configurazione SMTP Zoho
SMTP_SERVER="smtp.zoho.com:465"
EMAIL_FROM="info@webrobot.eu"  # Inserisci il tuo indirizzo Zoho
EMAIL_TO="info@webrobot.eu"   # Inserisci il destinatario del test
SMTP_USERNAME="ceo@webrobot.eu"  # Inserisci il tuo indirizzo Zoho
SMTP_PASSWORD="__A7gwqllHW__1!"    # Inserisci la tua password SMTP generata per Zoho (non la password di login)
SUBJECT="Test email SMTP Zoho"
BODY="Questa è una email di test inviata tramite SMTP Zoho."

# Comando curl per inviare l'email via SMTP Zoho
curl --url "smtps://$SMTP_SERVER" \
  --ssl-reqd \
  --mail-from "$EMAIL_FROM" \
  --mail-rcpt "$EMAIL_TO" \
  --user "$SMTP_USERNAME:$SMTP_PASSWORD" \
  -T <(echo -e "From: $EMAIL_FROM\nTo: $EMAIL_TO\nSubject: $SUBJECT\n\n$BODY")

# Controlla se l'invio ha avuto successo
if [ $? -eq 0 ]; then
  echo "Email inviata con successo."
else
  echo "Errore nell'invio dell'email."
fi