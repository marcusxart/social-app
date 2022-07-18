import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isActive }) => {
  const user = useSelector(selectUser);
  const isActive = JSON.parse(localStorage.getItem("isLoggin"));
  console.log(isActive);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
