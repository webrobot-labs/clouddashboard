import Headcss from "./header.module.css";
import React, { FC } from "react";
import { Container } from 'reactstrap';
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import SignupLink from "../SignupLink/SignupLink";

// Definisco l'interfaccia per le props, se necessario
interface HeaderProps {}
const Header: FC<HeaderProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>; // Mostra un caricamento durante il fetch della sessione
  }
  return (
    <>
      <header className={Headcss.header}>
        <Container>
          <div className={Headcss.logo}>
            <Link href="/" passHref>
              <a>
                <Image
                  width={400}
                  height={100}
                  src={"/images/logo.png"}
                  alt="WebRobot"
                  className={Headcss.logoImg}
                />
              </a>
            </Link>
            <ul className={Headcss.header_right}>
              <li>
                <Link href="/help" passHref>
                  <a>
                    <Image
                      width={30}
                      height={30}
                      src={"/images/icon1.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
              {session ? (
        <Link href="#" onClick={() => signOut()} passHref>
          <a>
            <Image
              width={50}
              height={50}
              src={"/images/logout.jpeg"}
              alt="Logout Icon"
            />
          
          </a>
        </Link>
      ) : (
        <Link href="#" onClick={() => signIn()} passHref>
          <a>
            <Image
              width={50}
              height={50}
              src={"/images/icon2.svg"}
              alt="Login Icon"
            />
           
          </a>
        </Link>
      )}
              </li>
              <SignupLink></SignupLink>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;

