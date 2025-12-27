import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import MainHomePage from "./components/pages/MainHomePage";
import About from "./components/About/About";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
