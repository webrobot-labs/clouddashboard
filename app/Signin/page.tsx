"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signin from "../../components/SignIn/SignInForm"; // Assicurati che il percorso sia corretto

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Sostituisci con il tuo Client ID di Google

const SigninPage = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Sign In</h2>
        <Signin />
      </div>
    </GoogleOAuthProvider>
  );
};

export default SigninPage;
