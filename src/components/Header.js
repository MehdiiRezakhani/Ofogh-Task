import React from "react";
import {useNavigate} from "react-router-dom";
//redux
import {useDispatch} from "react-redux";
import {authAction} from "../redux/authSlice";
import {uiAction} from "../redux/uiSlice";
//style
import '../styles/Header.css';

const Header = ({ title, path, nameButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(uiAction.toggleShow());
    dispatch(
      uiAction.showNotification({
        status: "Success",
        message: "Logout was successful!",
      })
    );
    dispatch(authAction.logoutHandler());
  };

  return (
    <header>
      <h2>Ofogh</h2>
      <div>
        <button onClick={() => navigate("/")}>Houses</button>
        <button onClick={() => navigate("/create")}>create</button>
        <button onClick={logoutHandler} type="button">Log out</button>
      </div>
    </header>
  );
};

export default Header;
