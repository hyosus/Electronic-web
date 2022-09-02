import "./Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Mobile" element={<Products />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
