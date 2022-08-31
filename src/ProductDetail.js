import phone1 from "./Images/phone2.png";
import phone2 from "./Images/phone3.png";
import phone3 from "./Images/phone4.png";
import phone4 from "./Images/phone5.png";
import phoneoverflow from "./Images/phoneOverflow.png";
import phoneoverflow2 from "./Images/phoneOverflow2.png";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const ZoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn());
const ProductDetail = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <section>
            <Animator
              animation={batch(Sticky(50, 50), Fade(), MoveOut(0, -200))}
            >
              <h2>Let me show you scroll animation 🤩</h2>
            </Animator>
          </section>
        </ScrollPage>

        <ScrollPage>
          <section className="section-pd-1">
            <Animator animation={ZoomInScroll}>
              <div className="gridWrapper gw1">
                <div className="grid-item pd-1">
                  <img src={phone1} className="pd-img"></img>
                </div>

                <div className="grid-item pd-1">
                  <h1 className="heading">
                    GALAXY <span>Z</span> FLIP 4
                  </h1>
                </div>
              </div>
            </Animator>
          </section>
        </ScrollPage>

        <ScrollPage>
          <section className="section-pd-2">
            <div className="gridWrapper gw2">
              <div className="grid-item pd-2">
                <h1 className="heading">
                  <Animator animation={FadeIn()}>
                    THE PHONE THAT <br></br> CLAPS BACK
                  </Animator>
                </h1>
              </div>

              <div className="grid-item pd-2">
                <Animator animation={MoveIn(-2000, 0)}>
                  <img src={phone2} className="pd-img-2"></img>
                </Animator>
              </div>
            </div>
          </section>
        </ScrollPage>

        <div class="section pd-3">
          <div class="grid-item left-phone">
            <img src={phone3} className="pd-3-img"></img>
            <img src={phoneoverflow} className="pd-phoneoverflow"></img>
          </div>
          <div class="grid-item linearBG"></div>

          <div class="grid-item text">
            <div className="text-wrapper">
              <h2>Fits your pocket</h2>
              <p>
                Compact full-sized smartphone, and just the right size to slip
                in a pocket when it's time to slay.
              </p>
            </div>
          </div>
          <div class="grid-item right-phone">
            <img src={phone4} className="pd-3-img"></img>
            <img src={phoneoverflow2} className="pd-phoneoverflow"></img>
          </div>
          <div class="grid-item linearBG-2"> </div>
        </div>
      </ScrollContainer>
    </>
  );
};

export default ProductDetail;
