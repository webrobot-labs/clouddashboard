"use client";
import Logcss from "../styles/login.module.css"
import React, { FC } from "react";
import Link from "next/link";
import InnerHeader from "../components/Header/Header";
import Image from "next/image";
//import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

// Se hai delle props, puoi tipizzarle qui
interface SelfServiceHomeProps {}

const SelfServiceHome: FC<SelfServiceHomeProps> = (props) => {
  const router = useRouter();

  const logout = (): void => {
    //Cookies.remove('auth');
    //router.push("/");
  }

  return (
    <>
      <InnerHeader />

      <section className={Logcss.loginMain}>
        <div className={`${Logcss.loginWrap} ${Logcss.style_two}`}>
          <h2>Welcome to WebRobot Self-Service Web Scraping Platform!</h2>
          <h3>
            From here, you can control your profile, manage your plans, payment,
            data extraction projects, and look for help.
          </h3>
          <ul>
            <li>
              <Link href="/SelfServiceHome">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src="/images/icon12.svg"
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src="/images/icon13.svg"
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Profile</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/project-page">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src="/images/icon16.svg"
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Projects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>
                  <Image
                    width={77}
                    height={74}
                    src="/images/icon4.svg"
                    alt="Icon"
                  />
                  <span className={Logcss.login_text}>Help</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SelfServiceHome;
