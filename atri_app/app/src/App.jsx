import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Menu" element={<Menu />} />
<Route path="/About" element={<About />} />
    </Routes>
  );
}
