import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
