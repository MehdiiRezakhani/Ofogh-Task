import { authAction } from "./authSlice";
import { uiAction } from "./uiSlice";

export const fetchData = (emailValue, passwordValue, isLogin = false) => {
  return async (dispatch) => {
    dispatch(uiAction.isLoading(true));
    const dataObj = {
      email: emailValue,
      password: passwordValue,
    };
    const url = isLogin
    ? "http://localhost:4000/login"
    : "http://localhost:4000/register";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(authAction.loginHandler({ token: data.accessToken }));
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Success",
          message: "Sign in succesful!",
        })
        );
      } else {
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Error",
          message: data,
        })
      );
    }
    dispatch(uiAction.isLoading(false));
  };
};
