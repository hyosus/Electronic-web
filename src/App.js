import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
