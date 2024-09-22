"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/login.module.css"
const SelfServiceLinks: React.FC = () => {
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
        <li>
          <Link href="/Profile">
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
        <li>
          <Link href="/Help">
            <Image width={77} height={74} src="/images/icon4.svg" alt="Icon" />
            <span className={styles.login_text}>Help</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SelfServiceLinks;