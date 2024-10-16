import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SignupLink() {
  const { data: session } = useSession();

  // Se la sessione è attiva, mostra un div vuoto
  if (session) {
    return <div></div>;
  }

  // Se la sessione non è attiva, mostra il link per il signup
  return (
    <li>
      <Link href="/api/auth/signup" passHref>
        <a>
          <Image
            width={50}
            height={50}
            src={"/images/icon3.svg"}
            alt="Signup Icon"
          />
        </a>
      </Link>
    </li>
  );
}