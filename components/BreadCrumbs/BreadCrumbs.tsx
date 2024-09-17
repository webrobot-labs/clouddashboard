// import '../App.css';
import Breadcrumbscss from "./breadcrumbs.module.css";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Link from "next/link";

interface BreadcrumbsProps {
  // Puoi aggiungere altri tipi di proprietà qui, se necessario
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link href="/#0" passHref>
            <span>Project</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/#0" passHref>
            <span>Smart TVs price comparison (ID# 0001234)</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/#0" passHref>
            <span>Scrapers</span>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
