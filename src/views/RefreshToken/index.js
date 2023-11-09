import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../../store/authSlice";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { isLoadingReducer } from "../../store/authSlice";

function RefreshToken() {
  const dispatch = useDispatch();
  const { user, userData } = useSelector((state) => state.auth);
  const token = localStorage.getItem("user");
  useEffect(() => {
    if (!user && token) {
      const decoded = jwtDecode(token);
      dispatch(refreshToken({ token, user: decoded }));
    } else {
      dispatch(isLoadingReducer(false));
    }
  }, [user, userData, dispatch, token]);
  return <Outlet />;
}

export default RefreshToken;
