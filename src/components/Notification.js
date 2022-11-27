import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "../redux/uiSlice";

const Notification = () => {
  const { isShowCart, notification } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    let closeNotification = null;
    if (isShowCart) {
      closeNotification = setTimeout(() => {
        dispatch(uiAction.toggleShow());
      }, 3500);
    }
    return () => clearInterval(closeNotification);
  }, [isShowCart, dispatch]);

  return (
    <>
      {notification && (
        <div
          className={`${isShowCart && "active"} ${
            notification.status === "Success" ? "success" : "error"
          } alertbox absolute top-5 left-3  p-3 w-1/4 rounded-md`}
          role="alert"
        >
          <p className="font-bold">{notification.status}</p>
          <p className="text-sm">{notification.message}</p>
        </div>
      )}
    </>
  );
};

export default Notification;
