import React from "react";
import UserForm from "../components/UserForm";
import {  useDispatch } from "react-redux";
import { fetchData } from "../redux/authAction";

const Login = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    const emailValue = event.nativeEvent.srcElement[0].value;
    const passwordValue = event.nativeEvent.srcElement[1].value;
    dispatch(fetchData(emailValue, passwordValue, true));
  };

  return (
    <div className="flex h-screen">
      <UserForm name={"Login"} onSubmit={formHandler} />
    </div>
  );
};

export default Login;
