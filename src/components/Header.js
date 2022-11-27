import React from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { authAction } from "../redux/authSlice";
import { uiAction } from "../redux/uiSlice";

const Header = ({ title, path, nameButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(uiAction.toggleShow());
    dispatch(
      uiAction.showNotification({
        status: "Success",
        message: "Logout is succes.",
      })
    );
    dispatch(authAction.logoutHandler());
  };

  return (
    <div className="flex justify-between py-3 px-5 bg-slate-300 items-center">
      <h2 className="capitalize">{title}</h2>
      <div className="flex space-x-2 justify-center">
        <button onClick={() => navigate("/")}>Houses</button>
        <button onClick={() => navigate("/create")}>create</button>
        <button
          onClick={logoutHandler}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
