import React, { useState } from "react";
import { Route } from "react-router-dom";
import {Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import {useSelector } from "react-redux";
import Houses from "./pages/Houses";
import Notification from "./components/Notification";
import Create from "./pages/Create";
import Estate from "./pages/House";
import Header from "./components/Header";
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));

const App = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const [dark,setDark] = useState(false);
  const darkHandler = () => {
    setDark(!dark)
    document.getElementsByTagName("HTML")[0].classList.toggle("dark")
  }

  return (
    <>  
        {isLoggedIn ? <Header/> : null}
        <Loader />
        <Notification />
        <main>
          <Routes>
            <Route
              path={"/"}
              element={
                <React.Suspense fallback={<Loader />}>
                  {isLoggedIn ? <Houses/> : <Navigate to={"/Register"} />}
                </React.Suspense>
              }
            />
            <Route
              path="/create"
              element={
                <React.Suspense fallback={<Loader />}>
                  {isLoggedIn ? <Create/> : <Navigate to={"/Register"} />}
                </React.Suspense>
              }
            />
            <Route
              path="/house/:id"
              element={
                <React.Suspense fallback={<Loader />}>
                  {isLoggedIn ? <Estate /> : <Navigate to={"/Register"} />}
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<Loader />}>
                  {!isLoggedIn ? <Login /> : <Navigate to={"/"} />}
                </React.Suspense>
              }
            />

            <Route
              path={"/Register"}
              element={
                <React.Suspense fallback={<Loader />}>
                  {!isLoggedIn ? <Register /> : <Navigate to={"/"} />}
                </React.Suspense>
              }
            />
          </Routes>
        </main>
        <button onClick={darkHandler} className="DarkModeButton">{dark?"Light": "Dark"}Mode</button>
    </>
  );
}

export default App;
