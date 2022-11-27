import React from "react";
import UserForm from "../components/UserForm";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/authAction";

const Register = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    const emailValue = event.nativeEvent.srcElement[0].value;
    const passwordValue = event.nativeEvent.srcElement[1].value;
    dispatch(fetchData(emailValue, passwordValue, false));
  };

  return (
    <div className="flex h-screen">
      <UserForm name={"Register"} onSubmit={formHandler} />
    </div>
  );
};

export default Register;
