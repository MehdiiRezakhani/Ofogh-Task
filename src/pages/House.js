import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../redux/uiSlice";
import MapLeaflet from "../components/House/MapLeaflet";
import FormConfirm from "../components/House/FormConfirm";
import HousePic from '../assets/HousePic.svg';
import styles from '../styles/House.module.css';

const House = () => {
  const [estate, setEstate] = useState({});
  const [isShowForm, setIsShowForm] = useState(false);
  const { isLoading } = useSelector((store) => store.ui);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEstateItem = async () => {
    const response = await fetch(`http://localhost:4000/estates?id=${id}`);
    const data = await response.json();
    setEstate(...data);
    dispatch(uiAction.isLoading(false));
  };

  useEffect(() => {
    dispatch(uiAction.isLoading(true));
    fetchEstateItem();
  }, [isShowForm]);

  const deleteTodoHandler = () => {
    let userMessage = window.confirm("Are you sure delete the house?");
    if (userMessage) {
      dispatch(uiAction.isLoading(true));
      fetch(`http://localhost:4000/estates/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      dispatch(uiAction.isLoading(false));
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Success",
          message: "House is Deleted!",
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      {isShowForm ? (
        <FormConfirm id={id} setIsShowForm={setIsShowForm} />
      ) : null}
      {!isLoading ? (
        <div className={styles.House}>
            <div className={styles.firstBox}>
              <img src={HousePic} alt="HousePicture"/>
              <div className={styles.textBox}>
                <p>Address : {estate.address}</p>
                <p>
                  Description : {estate.description}
                </p>
                <p>Phone : {estate.tel}</p>
              </div>
            </div>
            {estate.coordinates ? (
              <MapLeaflet position={estate.coordinates} />
            ) : null}
            <div className={styles.buttonBox}>
              <button onClick={() => setIsShowForm(true)} type="submit">Change</button>
              <button onClick={deleteTodoHandler} type="submit">Delete</button>
            </div>
        </div>
      ) : null}
    </>
  );
};

export default House;
