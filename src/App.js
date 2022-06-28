import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Auth from "./Auth";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </main>
  );
}

export default App;
