import shoppingCartIcon from "./Images/Shopping bag icon.svg";
import searchIcon from "./Images/Search icon.svg";
import { NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useState } from "react";
import styles from "./Styles/Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <NavLink to="/">
        <h1>EON</h1>
      </NavLink>

      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <NavLink to="/Mobile">Mobile</NavLink>

          <NavLink to="/Smartwatch">Smartwatch</NavLink>
          <NavLink to="/Computers">Computers</NavLink>
          <NavLink to="/Support">Support</NavLink>

          <div className={styles.mobile_icons}>
            <AiOutlineSearch size={25} style={{ paddingRight: "1.5em" }} />
            <AiOutlineUser size={25} style={{}} />
          </div>
        </ul>
      </nav>

      <div className={styles.icons}>
        <AiOutlineSearch size={25} style={{ paddingRight: "1.5em" }} />
        <AiOutlineUser size={25} style={{}} />
      </div>

      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>

    // <header className="App-header">
    //   <div className="navbar logo">
    //     <NavLink to="/">
    //       <h1 className="logo-text">EON</h1>
    //     </NavLink>
    //   </div>
    //   <div class="navbar menu">
    //     <ul class="main-nav">
    // <NavLink to="/Mobile">Mobile</NavLink>

    // <NavLink to="/Smartwatch">Smartwatch</NavLink>
    // <NavLink to="/Computers">Computers</NavLink>
    // <NavLink to="/Support">Support</NavLink>
    //     </ul>
    //     <div class="indicator"></div>
    //   </div>
    //   <div class="navbar icons">
    //     <div className="icon-wrapper">
    //       <img src={searchIcon}></img>
    //     </div>

    //     <div className="icon-wrapper">
    //       <img src={shoppingCartIcon}></img>
    //     </div>
    //   </div>

    //   <div cla ss="navbar hamburger" onClick={() => setNav(!nav)}>
    //     {nav ? (
    //       <AiOutlineClose size={30} />
    //     ) : (
    //       <AiOutlineMenu size="30px" className="hamburgerMenu" />
    //     )}
    //   </div>
    // </header>
  );
};

export default Navbar;
