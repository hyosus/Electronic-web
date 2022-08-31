import zflip from "./Images/Phone.png";
import applewatch from "./Images/AppleWatch.png";
import laptop from "./Images/laptop.png";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = () => {
    console.log("button click test");
  };

  const handleClickDynamic = (emoji) => {
    console.log("Hello World " + emoji);
  };

  return (
    <>
      <section class="section home-1">
        <div class="grid-item">
          <img src={zflip} class="home-img"></img>
        </div>
        <div class="grid-item">
          <h1 class="heading">Unfold your world</h1>
          <button onClick={handleClick}>ORDER NOW</button>
          <Link to="ProductDetail">
            <h2 class="learn-more">Learn more &gt;</h2>
          </Link>
        </div>
      </section>

      <section class="section-home-2">
        <div className="gridWrapper">
          <div class="grid-item">
            <img src={applewatch} class="home-img"></img>
          </div>
          <div class="grid-item home-2">
            <h1 class="heading">Tap. Type. Swipe.</h1>
            <button onClick={() => handleClickDynamic("🍣")}>ORDER NOW</button>
            <h2 class="learn-more">Learn more &gt;</h2>
          </div>
        </div>
      </section>

      <section class="section home-3">
        <div class="grid-item">
          <img src={laptop} class="home-img"></img>
        </div>
        <div class="grid-item">
          <h1 class="heading">Power and Perfection</h1>
          <button onClick={handleClick}>ORDER NOW</button>
          <h2 class="learn-more">Learn more &gt;</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
