import { signIn, signOut, useSession } from "next-auth/react";

const AuthComponent = () => {
  // Ottieni i dati della sessione e lo stato
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; // Mostra un caricamento durante il fetch della sessione
  }

  return (
    <div>
      {session ? ( // Se la sessione è presente, mostra il messaggio di benvenuto e il pulsante di logout
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : ( // Se non c'è sessione, mostra il pulsante di accesso
        <>
          <button onClick={() => signIn("keycloak")}>Sign In with Keycloak</button>
        </>
      )}
    </div>
  );
};

export default AuthComponent;
