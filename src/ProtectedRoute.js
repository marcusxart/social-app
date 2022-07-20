import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/slices/userSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isActive = JSON.parse(localStorage.getItem("isLoggin")).isActive;
  return isActive ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
