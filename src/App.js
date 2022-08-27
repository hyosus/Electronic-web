import './Styles/App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Mobile from './ProductDetail'

function App() {
  return (
    <BrowserRouter>
            <main>
              <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/ProductDetail" element={<Mobile/>} />
                </Routes>
            </main>
        </BrowserRouter>
  );
}

export default App;
