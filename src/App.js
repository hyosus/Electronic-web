import shoppingCartIcon from './Images/Shopping bag icon.svg'
import searchIcon from './Images/Search icon.svg'
import zflip from './Images/Phone.png'
import applewatch from './Images/AppleWatch.png'
import laptop from './Images/laptop.png'
import './Styles/App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
      <><header className="App-header">
      <h1 class="logo">MURA</h1>
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
    
    <section class="section-1">
      <div class="grid-item">
        <img src={zflip} class="zflip"></img>
      </div>
      <div class="grid-item">
        <h1 class="heading">Unfold your world</h1>
        <button>ORDER NOW</button>
        <a href=''><h2 class="learn-more">Learn more &gt;</h2></a>
      </div>
    </section>
    
    <section class="section-2">
    <div class="grid-item">
        <img src={applewatch} class="zflip"></img>
      </div>
      <div class="grid-item">
        <h1 class="heading">Tap. Type. Swipe.</h1>
        <button>ORDER NOW</button>
        <h2 class="learn-more">Learn more &gt;</h2>
      </div>
    </section>
    
    <section class="section-3">
    <div class="grid-item">
        <img src={laptop} class="zflip"></img>
      </div>
      <div class="grid-item">
        <h1 class="heading">Power and Perfection.</h1>
        <button>ORDER NOW</button>
        <h2 class="learn-more">Learn more &gt;</h2>
      </div>
    </section>
    </>
  );
}

export default App;
