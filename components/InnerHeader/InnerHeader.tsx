import InnHeader from "./inner-header.module.css";
import React, { useState, MouseEvent } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';
interface InnerHeaderProps {}

const InnerHeader: React.FC<InnerHeaderProps> = (props) => {
  // Aggiungo il tipo per l'evento MouseEvent
  const handelClick = (e: MouseEvent<HTMLLIElement>) => {
    Array.from(document.getElementsByClassName("forRemoveclassName")).forEach(
      (el) => {
        el.classList.remove("active");
      }
    );
    e.currentTarget.classList.add("active");
  };

  const navWrap = () => {
   
    document.body.classList.add("navigation_open");
  };

  const closeIcon = () => {
   
    document.body.classList.remove("navigation_open");
  };

  const fillterWrap = () => {
 
    document.body.classList.add("fillter_open");
  };

  const Closefillter = () => {
   
    document.body.classList.remove("fillter_open");
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <header className={InnHeader.headerTwo}>
        <Row className="justify-content-between align-items-center header_flex">
          <Col lg="4" sm="3" className="col-6" style={{ width: "350px" }}>
            <Link href="/">
              <a>
                <Image
                  width={169}
                  height={41}
                  src={"/images/innerlogo.png"}
                  alt="Logo"
                />
              </a>
            </Link>
          </Col>
          <Col lg="3" sm="6" className="d-none d-sm-block">
            <ul className={InnHeader.count_wrap}>
              <li>
                <span>Beginner</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>20K</span>
              </li>
              <li>
                <span>Business</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>505K</span>
              </li>
              <li>
                <span>Big Data</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>25M</span>
              </li>
              <li>
                <span>Custom</span>
                <div className={InnHeader.countIcon}>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Counter-Icon.svg"}
                    alt="Count"
                  />
                </div>
                <span className={InnHeader.count}>14.2B</span>
              </li>
            </ul>
          </Col>
          <Col
            lg="5"
            sm="3"
            className="col-8"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div className={InnHeader.header_right}>
              <ul>
                <li className={InnHeader.close_icon_block}>
                  <span
                    className={InnHeader.close_icon}
                    onClick={closeIcon}
                  ></span>
                </li>
                <li>
                  <Link href="/Home">
                    <a className="active">
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon7.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Profile" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon8.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Profile</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon11.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Projects</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.webrobot.eu/help" className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon3.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>Help</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#0" onClick={() => signOut()} className="topMenu">
                    <a>
                      <Image
                        width={30}
                        height={28.33}
                        src={"/images/icon2.svg"}
                        alt="Icon"
                      />
                      <span className={InnHeader.login_text}>LogOut</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <span className={InnHeader.toggleGroup} onClick={navWrap}>
                <span className={InnHeader.toggleIcon}></span>
              </span>
            </div>
          </Col>
        </Row>
        <div className={InnHeader.header_menu}>
          <ul>
            <li className={InnHeader.close_icon_block}>
              <span
                onClick={Closefillter}
                className={InnHeader.close_icon}
              ></span>
            </li>
            <li onClick={handelClick}>
              <Link className="forRemoveclassName active" href="/Projects">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon17.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  <span className={InnHeader.menu_name}>Projects</span>
                </a>
              </Link>
            </li>
            <li onClick={handelClick}>
              <Link className="forRemoveclassName" href="/NewProject">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon18.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  <span className={InnHeader.menu_name}>New Project</span>
                </a>
              </Link>
            </li>
            <li>
              <Link className="forRemoveclassName" href="/Categories">
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon19.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  <span className={InnHeader.menu_name}>Scraper</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                onClick={toggle}
                className="forRemoveclassName"
                href="/NewCategory"
              >
                <a>
                  <Image
                    width={40}
                    height={40}
                    src={"/images/icon20.svg"}
                    alt="Icon"
                    className={InnHeader.default_img}
                  />
                  <span className={InnHeader.menu_name}>New Category</span>
                </a>
              </Link>
            </li>
            <li>
              <Link className="forRemoveclassName" href="/Script">
                <a>
                  <Image
                    width={50}
                    height={50}
                    src={"/images/Scripticon2.png"}
                    alt="Icon"
                  />
                  <span className={InnHeader.menu_name}>New Script</span>
                </a>
              </Link>
            </li>
          </ul>
          <span className={InnHeader.menu_close} onClick={fillterWrap}>
            Projects/Scrapers
          </span>
        </div>
      </header>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`${InnHeader.modalWrap} ${InnHeader.header_modal}`}
      >
        <ModalHeader>
          <span className={InnHeader.modalTitle}>
            New Category - Creation Panel
          </span>
          <span className={InnHeader.closeButton} onClick={toggle}></span>
        </ModalHeader>
        <ModalBody>
          <div className={InnHeader.modalBodyContent}>
            <Form>
              <FormGroup>
                <Label>Category name:</Label>
                <Input
                  placeholder="Write your extraction project name here"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>
                <Input
                  placeholder="Write a brief description of your extraction project here"
                  type="textarea"
                />
              </FormGroup>
              <FormGroup>
                <Label>Upload image:</Label>
                <span className={InnHeader.uploadIcon}>
                  <Input type="file" />
                  <Image
                    width={40}
                    height={40}
                    src={"/images/Upload-Icon.svg"}
                    alt="Upload"
                  />
                </span>
              </FormGroup>
              <div className={InnHeader.btn_block}>
                <Link href="#0" onClick={toggle}>
                  CANCEL
                </Link>
                <Link href="/Categories" className={InnHeader.style_two}>
                  SAVE
                </Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default InnerHeader;