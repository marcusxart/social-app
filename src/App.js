import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";

function App() {
  const userLogged = false;
  return (
    <main className="App">
      {userLogged && <Header />}
      <Routes>
        <Route path="/" element={userLogged ? <Home /> : <Auth />} />
        {userLogged && <Route path="/profile/*" element={<Profile />} />}
      </Routes>
    </main>
  );
}

export default App;
