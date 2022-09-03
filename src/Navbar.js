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
            nav ? [styles.menu, styles.navActive].join(" ") : [styles.menu]
          }
        >
          <li>
            <NavLink to="/Mobile" onClick={() => setNav(!nav)}>
              Mobile
            </NavLink>
          </li>

          <li>
            <NavLink to="/Smartwatch">Smartwatch</NavLink>
          </li>
          <li>
            <NavLink to="/Computers">Computers</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>

          <div className={styles.mobile_icons}>
            <AiOutlineSearch size={30} style={{ paddingRight: "1.8em" }} />
            <AiOutlineUser size={30} style={{}} />
          </div>
        </ul>
      </nav>

      <div className={styles.icons}>
        <AiOutlineSearch size={30} style={{ paddingRight: "1.8em" }} />
        <AiOutlineUser size={30} style={{}} />
      </div>

      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
