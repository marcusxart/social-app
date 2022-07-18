import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./features/slices/userSlice";
import "./app.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGetUser = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      dispatch(logIn({ id: doc.id, ...doc.data() }));
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleGetUser();
      } else {
        dispatch(logOut());
        localStorage.setItem("isLoggin", JSON.stringify({ isActive: "false" }));
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
