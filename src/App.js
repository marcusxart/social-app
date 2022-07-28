import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
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
import Loading from "./components/Loading";
import CreatePost from "./components/CreatePost";
import { useSelector } from "react-redux/es/exports";
import { selectLoading } from "./features/loading/loadingSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectLoading);
  localStorage.setItem("isLoggin", JSON.stringify({ isActive: "false" }));
  const handleUserData = async (id) => {
    onSnapshot(doc(db, "users", id), (doc) => {
      dispatch(logIn({ id: doc.id, ...doc.data() }));
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleUserData(user.uid);
      } else {
        dispatch(logOut());
        localStorage.setItem("isLoggin", JSON.stringify({ isActive: "false" }));
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="App">
      {isLoading && <Loading />}
      <Header />
      {/* <CreatePost /> */}
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
