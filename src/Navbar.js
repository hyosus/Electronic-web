import shoppingCartIcon from "./Images/Shopping bag icon.svg";
import searchIcon from "./Images/Search icon.svg";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="App-header">
      <div className="navbar logo">
        <Link to="/">
          <h1 className="logo-text">EON</h1>
        </Link>
      </div>
      <div class="navbar menu">
        <ul class="main-nav">
          <li class="nav-item">Mobile</li>
          <li class="nav-item">Smartwatch</li>
          <li class="nav-item">Computers</li>
          <li class="nav-item">Support</li>
        </ul>
        <div class="indicator"></div>
      </div>
      <div class="navbar icons">
        <img src={searchIcon}></img>
        <img src={shoppingCartIcon}></img>
      </div>

      <div class="navbar hamburger">
        <AiOutlineMenu size="30px" className="hamburgerMenu" />
      </div>
    </header>
  );
};

export default Navbar;
