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

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

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
        setIsActive(true);
      } else {
        dispatch(logOut());
        setIsActive(true);
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="App">
      {isActive && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={isActive && <Home />} />
        <Route path="/profile/*" element={isActive && <Profile />} />
      </Routes>
    </main>
  );
}

export default App;
