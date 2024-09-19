"use client";
import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import TopSearch from "../TopSearch/TopSearch";
import { Table } from "reactstrap";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs";
import Link from "next/link";
import Image from "next/image";

// Definizione del tipo per il singolo lavoro associato ai bot
interface Job {
  description: string;
  creationDate: string;
}

// Definizione del tipo per i dati di categoria che vengono passati come props
interface CatData {
  id: number;
  name: string;
  job: Job[];
}

// Definizione delle props del componente CategoryBotsList
interface CategoryBotsListProps {
  singleData: CatData;
}

const CategoryBotsList: React.FC<CategoryBotsListProps> = ({ singleData }) => {
  return (
    <>
      <InnerHeader />

      <section className="project-list cat-bot-list">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table-responsive">
            <Table
              borderless
              style={{
                paddingLeft: "20px",
                paddingRight: "10px",
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th>Name/ID</th>
                  <th>Description</th>
                  <th>Project</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="160">
                    <div className="left_content">
                      <div className="left-content-inner">
                        <h6>{singleData?.name}</h6>
                        <span>ID# {singleData?.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>{singleData?.job[0]?.description}</span>
                  </td>
                  <td>
                    <span>Not associated</span>
                  </td>
                  <td>
                    <div className="action_group category-board">
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon27.svg"}
                          alt="icon27"
                        />
                      </Link>
                      <Link data-tip="Duplicate" href="#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon30.svg"}
                          alt="icon30"
                        />
                      </Link>
                      <Link
                        href="/#0"
                        data-tip="Export bot/scraper without data sets"
                      >
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon29.svg"}
                          alt="icon29"
                        />
                      </Link>
                      <Link href="/#0">
                        <Image
                          width={50}
                          height={50}
                          src={"/images/icon28.svg"}
                          alt="icon28"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="pagination-block">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <span data-tip="First page">&laquo;</span> Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next <span data-tip="Last page">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default CategoryBotsList;
