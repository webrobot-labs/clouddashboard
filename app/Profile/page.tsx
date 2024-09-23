"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from "../../components/Profile/Profile"; // Assicurati che il percorso sia corretto

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Sostituisci con il tuo Client ID di Google

const ProfilePage = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h2>Profile</h2>
        <Profile />
      </div>
    </GoogleOAuthProvider>
  );
};

export default ProfilePage;
