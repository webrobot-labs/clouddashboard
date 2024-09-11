import Headcss from "./header.module.css";
import React, { FC } from "react";
import { Container } from 'reactstrap';
import Link from "next/link";
import Image from "next/image";

// Definisco l'interfaccia per le props, se necessario
interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
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
                <Link href="/auth" passHref>
                  <a>
                    <Image
                      width={50}
                      height={50}
                      src={"/images/icon2.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" passHref>
                  <a>
                    <Image
                      width={50}
                      height={50}
                      src={"/images/icon3.svg"}
                      alt="Icon"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;

