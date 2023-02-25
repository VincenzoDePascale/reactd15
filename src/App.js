import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Album from "./Components/Album";
import Artist from "./Components/Artist";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/artist/:id" element={<Artist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
