import zflip from './Images/Phone.png'
import applewatch from './Images/AppleWatch.png'
import laptop from './Images/laptop.png'
import {Link} from 'react-router-dom'


const Home = () => {

    const handleClick = () => {
        console.log("button click test")
    }

    const handleClickDynamic = (emoji) => {
        console.log("Hello World " + emoji)
    }

    return ( 
        <><section class="section-1">
            <div class="grid-item">
                <img src={zflip} class="zflip"></img>
            </div>
            <div class="grid-item">
                <h1 class="heading">Unfold your world</h1>
                <button onClick={handleClick}>ORDER NOW</button>
                <Link to="ProductDetail"><h2 class="learn-more">Learn more &gt;</h2></Link>
            </div>
        </section><section class="section-2">
                <div class="grid-item">
                    <img src={applewatch} class="zflip"></img>
                </div>
                <div class="grid-item">
                    <h1 class="heading">Tap. Type. Swipe.</h1>
                    <button onClick={() => handleClickDynamic('🍣')}>ORDER NOW</button>
                    <h2 class="learn-more">Learn more &gt;</h2>
                </div>
            </section><section class="section-3">
                <div class="grid-item">
                    <img src={laptop} class="zflip"></img>
                </div>
                <div class="grid-item">
                    <h1 class="heading">Power and Perfection.</h1>
                    <button onClick={handleClick}>ORDER NOW</button>
                    <h2 class="learn-more">Learn more &gt;</h2>
                </div>
            </section></>
     );
}
 
export default Home;