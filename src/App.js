import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
