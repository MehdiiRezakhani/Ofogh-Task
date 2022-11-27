import React, { useState } from "react";
import LeafletMap from "../components/LeafletMap/LeafletMap";
import { useNavigate } from "react-router-dom";
import { uiAction } from "../redux/uiSlice";
import { useDispatch } from "react-redux";
import styles from '../styles/Create.module.css'

const Create = () => {
  const [position, setPosition] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const putCreate = async (tel, address, description, coordinates) => {
    dispatch(uiAction.isLoading(true));
    const response = await fetch("http://localhost:4000/estates", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 100),
        tel: tel,
        address: address,
        description: description,
        coordinates: coordinates,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(uiAction.isLoading(false));
    if (response.ok) {
      navigate("/");
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Success",
          message: "House is Created!",
        })
      );
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const telValue = e.target[0].value;
    const addressValue = e.target[1].value;
    const descriptionValue = e.target[2].value;
    const roundedPostion = {
      lat: +position.lat.toFixed(3),
      lng: +position.lng.toFixed(3),
    };
    putCreate(telValue, addressValue, descriptionValue, roundedPostion);
  };

  return (
    <div className={styles.Create}>
      <div>
        <h3>Write About Your House</h3>
      <form onSubmit={formSubmitHandler} id="form">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="Phone" placeholder="Phone" required/>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="Address" placeholder="Address" required/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" form="form" required placeholder="Description"></textarea>
        <LeafletMap position={position} setPosition={setPosition} />
        <input type='submit'/>
      </form>
      </div>
    </div>
  );
};

export default Create;
