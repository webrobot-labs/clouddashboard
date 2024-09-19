"use client";
import CatListCss from "./categories-list.module.css";
import React, { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/InnerHeader";
import TopSearch from "../TopSearch/TopSearch";
import { Table } from "reactstrap";
import Breadcrumbs from "../BreadCrumbs/BreadCrumbs"
import moment from "moment";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import PaginationWork from "../PaginationWork/PaginationWork";

// Definizione delle interfacce per tipizzare i dati
interface Job {
  description: string;
  creationDate: string;
}

interface CatData {
  id: number;
  name: string;
  job: Job[];
}

interface CatListProps {
  catData: CatData[];
  refetch: () => void;
}

const CatList: React.FC<CatListProps> = ({ catData, refetch }) => {
  const [changeCatData, setChangeCatData] = useState<CatData[]>(catData);
  const data = changeCatData;
  const dataLimit = 1;
  const [returnPagiantionResponseData, setReturnPagiantionResponseData] = useState<CatData[]>([]);
  
  console.log(catData, returnPagiantionResponseData, "catData");

  useEffect(() => {
    fetchData();
    getPaginatedData(catData);  // Correzione: passaggio dei dati iniziali
  }, [catData]); // Aggiunta la dipendenza `catData` per ricaricare i dati quando cambiano
  
  const fetchData = () => {
    setReturnPagiantionResponseData(catData);
  };

  const getPaginatedData = (data: CatData[]) => {
    console.log(data, "testing");
    setReturnPagiantionResponseData(data);
  };

  const getCatData = () => {
    axios
      .get("/api/category")
      .then((response) => {
        setChangeCatData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteClick = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      deleteUser(id);
    }
  };

  const deleteUser = (id: number) => {
    return axios
      .delete(`/api/category`, {
        data: { id: id },
      })
      .then((response) => {
        if (response.status === 204) {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
          const updatedCatData = catData.filter(category => category.id !== id);
          setReturnPagiantionResponseData(updatedCatData);
          refetch();
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <InnerHeader />

      <section className={CatListCss.project_list}>
        <Breadcrumbs />
        <TopSearch />
        <div className={CatListCss.project_items}>
          <div className={CatListCss.table_responsive}>
            <Table borderless style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name/ID/Description</th>
                  <th>Creation date</th>
                  <th>Nr. bots/scrapers</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {returnPagiantionResponseData?.length
                  ? returnPagiantionResponseData?.map((item, index) => (
                      <tr key={item?.id}>
                        <td>
                          <div className={CatListCss.left_content}>
                            <div className={CatListCss.imgBlock}></div>
                            <div className={CatListCss.item_info}>
                              <h6>
                                <Link href="/category-bots-list">
                                  {item?.name}
                                </Link>
                              </h6>
                              <span className={CatListCss.item_id}>
                                ID# {item?.id}
                              </span>
                              <p>{item?.job[index]?.description}</p>
                              <Link
                                href={`categories-list/${item?.id}`}
                                data-tip="Click here or on the title to see the list of bots under this category"
                              >
                                Category details (bots/scrapers list)
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="font-20">
                            {moment(item?.job[index]?.creationDate).format(
                              "DD MMMM YYYY"
                            )}
                          </span>
                        </td>
                        <td>
                          <span className="font-24">3</span>
                        </td>
                        <td>
                          <div className={CatListCss.action_group}>
                            <Link href="/#0">
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon27.svg"}
                                  alt="icon27"
                                />
                              </a>
                            </Link>
                            <Link
                              href="/#0"
                              data-tip="Export all bots/scrapers (without data sets)"
                            >
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon29.svg"}
                                  alt="icon29"
                                />
                              </a>
                            </Link>
                            <Link
                              data-tip="Import bots/scrapers (without datasets)"
                              href="/#0"
                            >
                              <a>
                                <Image
                                  width={50}
                                  height={50}
                                  src={"/images/icon31.svg"}
                                  alt="icon31"
                                />
                              </a>
                            </Link>
                            <Link href="/categories-list">
                              <a onClick={() => handleDeleteClick(item?.id)}>
                                <Image
                                  width={50}
                                  height={50}
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

        <PaginationWork
          data={data}
          dataLimit={dataLimit}
          getPaginatedData={getPaginatedData}
        />
      </section>
    </>
  );
};

export default CatList;
