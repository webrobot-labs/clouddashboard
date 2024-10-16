"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/login.module.css"
import { useSession } from "next-auth/react"; // Importa useSession
import { signIn } from 'next-auth/react';
const SelfServiceLinks: React.FC = () => {
  const { data: session } = useSession(); // Ottieni i dati della sessione
  return (
    <div className={`${styles.loginWrap} ${styles.style_two}`}>
      <h2>Welcome to WebRobot Self-Service Web Scraping Platform!</h2>
      <h3>
        From here, you can control your profile, manage your plans, payment,
        data extraction projects, and look for help.
      </h3>
      <ul>
        <li>
          <Link href="/Home">
            <Image width={77} height={74} src="/images/icon12.svg" alt="Icon" />
            <span className={styles.login_text}>Home</span>
          </Link>
        </li>
        {session ? ( // Controlla se la sessione è attiva
        <>
          <li>
            <Link href="https://keycloak.webrobot.eu/realms/webrobot-realm/account">
              <Image width={77} height={74} src="/images/icon13.svg" alt="Icon" />
              <span className={styles.login_text}>Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <Image width={77} height={74} src="/images/icon16.svg" alt="Icon" />
              <span className={styles.login_text}>Projects</span>
            </Link>
          </li>
        </>
      ) : (
        // Se non c'è sessione, non mostrare nulla
        <div></div>
      )}
        <li>
          <Link href="https://www.webrobot.eu/help">
            <Image width={77} height={74} src="/images/icon4.svg" alt="Icon" />
            <span className={styles.login_text}>Help</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SelfServiceLinks;