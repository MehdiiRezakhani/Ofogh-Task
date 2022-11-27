import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/UserForm.module.css';

const UserForm = ({ name, onSubmit }) => {
  let context = "";
  if (name === "Login") {
    context = "Register";
  } else if (name === "Register") {
    context = "Login";
  }
  return (
    <div className={styles.UserForm}>
      <div>
        <h3>Welcome</h3>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="email"
              required
              name="Email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Your Password"
              type="password"
              required
              name="Password"
              id="password"
            />
          <input
            type={"submit"}
            value={name}
          />
        </form>
          <span>
            {context === "Login"
              ? "Do you have an account?"
              : "Don't have an account?"}
            <Link to={`/${context.replace(/\s/g, "")}`}> {context}</Link>
          </span>
      </div>
    </div>
  );
};

export default UserForm;
