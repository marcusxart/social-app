import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/slices/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector(selectUser);
  const isActive = JSON.parse(localStorage.getItem("isLoggin")).isActive;
  console.log(isActive);
  return isActive ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
