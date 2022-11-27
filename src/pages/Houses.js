import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HousesItem from "../components/HousesItem";
import Pagination from "../components/Pagination";
import { uiAction } from "../redux/uiSlice";
import '../styles/Houses.css'

const Houses = () => {
  const [Homes, setHomes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const recordsPerPage = 2;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = [];

  currentRecords = Homes.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(Homes.length / recordsPerPage);

  const fetchData = async () => {
    dispatch(uiAction.isLoading(true));
    const response = await fetch("http://localhost:4000/estates");
    const data = await response.json();
    setHomes(data);
    dispatch(uiAction.isLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {currentRecords.map((item) => (
          <HousesItem key={item.id} id={item.id} address={item.address} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Houses;