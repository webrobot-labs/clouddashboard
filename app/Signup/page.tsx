import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignIn from "../../components/SignIn/SignIn";                                      // Assicurati che il percorso del componente sia corretto

// Configura la pagina che utilizza il componente SignInNew
const SignInPage: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      {/* Utilizza il componente SignInNew */}
      <SignIn />
    </GoogleOAuthProvider>
  );
};

export default SignInPage;