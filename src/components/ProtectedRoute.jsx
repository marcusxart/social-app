import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);

  return <>{user ? { children } : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
