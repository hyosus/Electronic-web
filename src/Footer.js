import styled from "styled-components";
import twitter from "./Images/Twitter.svg";
import ig from "./Images/Instagram.svg";
import fb from "./Images/Fb.svg";
import { NavLink } from "react-router-dom";

const FooterBody = styled.footer`
  width: 100%;
  height: fit-content;
  padding-bottom: 25px;
  border-top: 2px solid rgba(38, 38, 38, 0.2);
`;

const Container = styled.div`
  max-width: 1280px;
  height: 100%;

  @media screen and (max-width: 1279px) {
    margin: 0 25px;
  }
`;

const Section = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  padding-top: 50px;

  @media screen and (max-width: 650px) {
    gap: 15px;
  }
`;

const SecondSection = styled(Section)`
  padding-top: 25px;
  align-items: center;
  border-top: 2px solid #acacac;
  margin-top: 25px;

  @media screen and (max-width: 955px) {
    flex-wrap: wrap;
    gap: 25px;
  }
`;

const Cols = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

const Ul = styled.ul`
  padding: 0;
`;

const BodyLink = styled.li`
  font-size: 16px;
  line-height: 38px;
  list-style-type: none;

  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 18px;

  @media screen and (max-width: 955px) {
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

const SocialsWrapper = styled(Cols)`
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  justify-content: end;

  @media screen and (max-width: 955px) {
    justify-content: center;
  }
`;

const Socials = styled.div`
  height: 50px;
  width: 50px;
  background: #262626;
  border-radius: 100%;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease;
    background: rgba(142, 102, 227, 0.5);
  }

  @media screen and (max-width: 720px) {
    height: 40px;
    width: 40px;
  }
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;

  @media screen and (max-width: 720px) {
    height: 20px;
    width: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterBody>
      <Container>
        <Section>
          <Cols>
            <Title>Product</Title>
            <Ul>
              <NavLink to="/Mobile">
                <BodyLink>Mobile</BodyLink>
              </NavLink>
              <BodyLink>Tablet</BodyLink>
              <BodyLink>Smartwatch</BodyLink>
              <BodyLink>Computer</BodyLink>
              <BodyLink>Accessories</BodyLink>
            </Ul>
          </Cols>
          <Cols>
            <Title>Services</Title>
            <Ul>
              <BodyLink>Replacement</BodyLink>
              <BodyLink>EON Care</BodyLink>
            </Ul>
          </Cols>
          <Cols>
            <Title>About Us</Title>
            <Ul>
              <BodyLink>Contact Us</BodyLink>
            </Ul>
          </Cols>
        </Section>

        <SecondSection>
          <Cols align>
            <Text>Copyright © All Rights Reserved by Shanice Yeong</Text>
          </Cols>

          <SocialsWrapper>
            <Socials>
              <Icon src={twitter}></Icon>
            </Socials>

            <Socials>
              <Icon src={ig}></Icon>
            </Socials>
            <Socials>
              <Icon src={fb}></Icon>
            </Socials>
          </SocialsWrapper>
        </SecondSection>
      </Container>
    </FooterBody>
  );
};

export default Footer;
