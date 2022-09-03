import phone1 from "./Images/phone2.png";
import phone2 from "./Images/phone3.png";
import phone3 from "./Images/phone4.png";
import phone4 from "./Images/phone5.png";
import phoneoverflow from "./Images/phoneOverflow.png";
import phoneoverflow2 from "./Images/phoneOverflow2.png";
import styled from "styled-components";

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

const ZoomInScroll = batch(FadeIn(), ZoomIn());

const Section = styled.section`
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1279px) {
    padding: 0 25px;
  }

  @media only screen and (max-width: 630px) {
    height: 100%;
  }
`;

const Section2 = styled(Section)`
  background: #f5f5f5;
`;

const Container = styled.div`
  max-width: 1280px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media only screen and (max-width: 912px) {
    grid-template-columns: 1fr;
  }
`;

const GridWrapper = styled.div``;

const GridImg = styled.img`
  width: 100%;
`;

const GridTitle = styled.h1`
  font-size: 4em;
`;

const GridTitle2 = styled(GridTitle)`
  text-align: right;

  @media only screen and (max-width: 912px) {
    text-align: center;
  }
`;

const ProductDetail = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Section>
            <Animator
              animation={batch(Sticky(50, 50), Fade(), MoveOut(0, -200))}
            >
              <h2>Let me show you scroll animation 🤩</h2>
            </Animator>
          </Section>
        </ScrollPage>

        <ScrollPage>
          <Section2>
            <Container>
              <GridWrapper>
                <Animator animation={ZoomInScroll}>
                  <GridImg src={phone1}></GridImg>
                </Animator>
              </GridWrapper>

              <GridWrapper>
                <GridTitle>
                  <Animator animation={FadeIn()}>
                    GALAXY <span>Z</span> FLIP 4
                  </Animator>
                </GridTitle>
              </GridWrapper>
            </Container>
          </Section2>
        </ScrollPage>

        <ScrollPage>
          <Section>
            <Container>
              <GridWrapper>
                <GridTitle2>
                  <Animator animation={FadeIn()}>
                    THE PHONE THAT <br></br> CLAPS BACK
                  </Animator>
                </GridTitle2>
              </GridWrapper>

              <GridWrapper>
                <Animator animation={MoveIn(-2000, 0)}>
                  <GridImg src={phone2} style={{ width: 500 }}></GridImg>
                </Animator>
              </GridWrapper>
            </Container>
          </Section>
        </ScrollPage>

        <Section>
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
        </Section>
      </ScrollContainer>
    </>
  );
};

export default ProductDetail;
