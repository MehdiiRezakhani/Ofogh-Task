import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../redux/uiSlice";
import LeafletMap from "../LeafletMap/LeafletMap";
import styles from '../../styles/Change.module.css'

const FormConfirm = ({ setIsShowForm, id }) => {
  const [position, setPosition] = useState(null);
  const dispatch = useDispatch()

  const updateEstate = (tel, address, description, coordinates) => {

    fetch(`http://localhost:4000/estates/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        tel: tel,
        address: address,
        description: description,
        coordinates: coordinates,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(uiAction.toggleShow())
    dispatch(uiAction.showNotification({
        status: "Success",
        message: 'Update estate is success!.'
    }))
    setIsShowForm(false)
  };

  

  const formClickHandler = (e) => {
    e.preventDefault();
    const telValue = e.target[0].value;
    const addressValue = e.target[1].value;
    const descriptionValue = e.target[2].value;
    const roundedPostion = {
      lat: +position.lat.toFixed(3),
      lng: +position.lng.toFixed(3),
    };
    updateEstate(telValue, addressValue, descriptionValue, roundedPostion);
  };

  return (
    <div className={styles.Change}>
      <h3>Change What You Want</h3>
      <form onSubmit={formClickHandler} id="form">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="Phone" placeholder="Phone" required/>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="Address" placeholder="Address" required/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" form="form" required placeholder="Description"></textarea>
        <LeafletMap position={position} setPosition={setPosition} />
        <input type='submit'/>
        <button type="button" onClick={() => setIsShowForm(false)}>Exit</button>
      </form>
    </div>
  );
};

export default FormConfirm;
