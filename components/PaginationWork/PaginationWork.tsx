import React, { useEffect, useState } from "react";

// Definizione dei tipi delle props
interface PaginationWorkProps {
  data: Array<any>; // Puoi specificare meglio il tipo dell'array se hai una struttura definita
  dataLimit: number;
  getPaginatedData: (data: Array<any>) => void; // Funzione che restituisce i dati paginati
}

const PaginationWork: React.FC<PaginationWorkProps> = ({
  data,
  dataLimit,
  getPaginatedData,
}) => {
  const pageLimit = Math.round(data.length / dataLimit);
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < pageLimit) setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  const changePage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageNumber = Number(event.currentTarget.textContent);
    setCurrentPage(pageNumber);
  };

  const responseData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return getPaginatedData(data.slice(startIndex, endIndex));
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(null).map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    responseData();
  }, [currentPage]);

  console.log(pageLimit, currentPage, "pageLimit");

  return (
    <div className="pagination-block">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <span data-tip="First page">&laquo;</span>{" "}
              <button
                onClick={goToPreviousPage}
                className={`prev button-as-link ${
                  currentPage === 1 ? "disabled" : ""
                }`}
              >
                Previous
              </button>
            </a>
          </li>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`page-item ${currentPage === item ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                <span>{item}</span>
              </a>
            </button>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              <button
                onClick={goToNextPage}
                className={`next button-as-link ${
                  currentPage === pages ? "disabled" : ""
                }`}
              >
                Next
              </button>{" "}
              <span data-tip="Last page">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationWork;
