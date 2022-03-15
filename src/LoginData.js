import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "./features/userSlice";

export default function LoginData() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutButton = () => {
    dispatch(logout());
  };
  return (
    <>
      {user ? (
        <div>
          <div>Name:{user?.user_name}</div>
          <div>Email:{user?.user_email}</div>
          <div>
            <button onClick={logoutButton}>Logout</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
