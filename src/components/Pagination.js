import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const activeClassName =
    "z-10 py-2 px-3 leading-tight rounded text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700";

  return (
    <>
      <hr />
      <nav
        aria-label="Page navigation example"
        className="flex justify-center mt-3"
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <Link
              onClick={prevPage}
              to="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber}>
              <Link
                to="#"
                onClick={() => setCurrentPage(pgNumber)}
                className={`${
                  pgNumber === currentPage
                    ? activeClassName
                    : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                } `}
              >
                {pgNumber}
              </Link>
            </li>
          ))}
          <li>
            <Link
              onClick={nextPage}
              to="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
