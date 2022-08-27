import shoppingCartIcon from './Images/Shopping bag icon.svg'
import searchIcon from './Images/Search icon.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
    <header className="App-header">
      <Link to="/"><h1 class="logo">MURA</h1></Link>
      <nav class="navbar">

        <ul class="main-nav">
          <li class="nav-item">Mobile</li>
          <li class="nav-item">Smartwatch</li>
          <li class="nav-item">Computers</li>
          <li class="nav-item">Support</li>
        </ul>
        <div class="indicator"></div>
      </nav>

      <div class='icon-wrapper'>
        <img src={searchIcon}></img>
        <img src={shoppingCartIcon}></img>
      </div>
    </header>
     );
}
 
export default Navbar;