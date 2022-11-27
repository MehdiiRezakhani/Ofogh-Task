import React from "react";
import {Link} from "react-router-dom";
import HousePic from '../assets/HousePic.svg';
import '../styles/HousesItem.css'

const HousesItem = ({ address, id }) => {
  return (
    <li className="HousesItem" >
      <Link to={`/house/${id}`}>
      <img src={HousePic} alt="HousePicture"/>
      <div>
        <p>Address :</p>
        <span>{address}</span>
      </div>
      </Link>
    </li>
  );
};

export default HousesItem;