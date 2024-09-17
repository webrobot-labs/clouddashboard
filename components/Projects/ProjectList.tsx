import ProductListCss from "./project-list.module.css";
import React, { useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import TopSearch from "../TopSearch/TopSearch";
import {
  Row,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Link from "next/link";
import Image from "next/image";

// Define the type for the props and the project data structure
interface Project {
  id: number;
  name: string;
  description: string;
  frequency: string;
}

interface ProjectListProps {
  projData: Project[] | null;
}

function ProjectList({ projData }: ProjectListProps) {
  console.log(projData, "props");

  const [modal, setModal] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState<boolean>(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState<boolean>(false);
  const toggle2 = () => setModal2(!modal2);

  const options = [
    { label: "KCOM Colourpages UK", value: 1 },
    { label: "Yellow Pages Spain", value: 2 },
    { label: "Comments on G20 Twitter", value: 3 },
    { label: "Walmart Smart TVs", value: 4 },
    { label: 'Opinions on Jesus "catholicforum.com"', value: 5 },
    { label: "Smart TVs on Amazon.it", value: 6 },
  ];

  return (
    <>
      <InnerHeader />

      <section className={ProductListCss.project_list}>
        <Breadcrumbs />
        <TopSearch />
        <div className={ProductListCss.project_items}>
          <div className={ProductListCss.table_responsive}>
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Frequency</th>
                  <th>Status</th>
                  <th>Statistics</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projData !== null && projData?.length
                  ? projData.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className={ProductListCss.left_content}>
                            <div className={ProductListCss.imgBlock}></div>
                            <div className={ProductListCss.item_info}>
                              <h6>
                                <Link href="/project-bots-list">
                                  <a>{item.name}</a>
                                </Link>
                              </h6>
                              <span className={ProductListCss.item_id}>
                                ID# {item.id}
                              </span>
                              <p>{item.description}</p>

                              <Link
                                href="/project-bots-list"
                                data-tip="Click here or on the title to see the list of bots and datasets"
                              >
                                <a>Project details</a>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={ProductListCss.blue_btn}>
                            {item.frequency}
                          </span>
                        </td>
                        <td>
                          <span className={ProductListCss.gray_btn}>Empty</span>
                        </td>
                        <td>
                          <span
                            className={ProductListCss.projectInfoBtn}
                            onClick={toggle}
                          >
                            <Image
                              height={50}
                              width={50}
                              data-tip="Click to see project info"
                              src={"/images/img1.svg"}
                              alt="Img"
                            />
                          </span>
                        </td>
                        <td>
                          <div className={ProductListCss.action_group}>
                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon25.svg"}
                                  alt="icon25"
                                />
                              </a>
                            </Link>
                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon26.svg"}
                                  alt="icon26"
                                />
                              </a>
                            </Link>
                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon27.svg"}
                                  alt="icon27"
                                />
                              </a>
                            </Link>
                            <Link href="/#0">
                              <a>
                                <Image
                                  height={40}
                                  width={40}
                                  src={"/images/icon28.svg"}
                                  alt="icon28"
                                />
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Project Statistics</ModalHeader>
        <ModalBody>Modal content goes here...</ModalBody>
      </Modal>

      <Modal isOpen={modal1} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Import or Associate Existing Bots</ModalHeader>
        <ModalBody>Modal content goes here...</ModalBody>
      </Modal>

      <Modal isOpen={modal2} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Import or Associate Existing Bots</ModalHeader>
        <ModalBody>Modal content goes here...</ModalBody>
      </Modal>
    </>
  );
}

export default ProjectList;
