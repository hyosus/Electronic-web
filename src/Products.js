import { useState } from "react";
import { NavLink } from "react-router-dom";

import zfold from "./Images/image 2.png";
import zflip from "./Images/image 3.png";
import s22 from "./Images/image 4.png";

// Using 'styled-components'
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

const Wrapper = styled.section`
  max-width: 1280px;
  padding: 4em;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4em;
  justify-content: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 22rem));
  }
`;

const Card = styled.div`
  min-width: 300px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0px 3px 10px -1px rgba(25, 10, 56, 0.1);

  @media screen and (min-width: 600px) {
    flex-direction: column;
    text-align: center;
    min-width: 300px;
  }
`;

const ProdImage = styled.img`
height 215px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #262626;
`;

const CircleWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 15px;
  flex-direction: row;
`;

const Circle = styled.a`
  width: 12px;
  height: 12px;
  float: left;
  border-radius: 6px;
  background-color: ${(props) => props.inputColor};
  margin: 0 5px;
  border: ${(props) => (props.primary ? "1px solid #262626" : "")};
`;

const Price = styled.p`
  font-size: 1em;
  text-align: center;
  color: #262626;
  margin-top: 20px;
`;

const BuyButton = styled.button`
  background-color: transparent;
  border: 1px solid #262626;
  border-radius: 12px;
  height: 42px;
  width: 106px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease;
    background: #262626;
    color: white;
  }
`;

const AddButton = styled(BuyButton)`
  width: 200px;
  height: 50px;
  display: block;
  margin: 0 auto;
`;

// ==== START ====
const Products = () => {
  const [product, setProduct] = useState([
    {
      name: "Galaxy Fold 4",
      price: "$2,400",
      img: zfold,
      colors: ["#654D57", "#1B1B1B", "#747474", "#F3E3CA"],
    },
    {
      name: "Galaxy Flip Z 4",
      price: "$1,389",
      img: zflip,
      colors: ["#B4AACB", "#747474", "#C2DEF9", "#F3CCCA"],
    },
    {
      name: "Galaxy S22 Ultra",
      price: "$998",
      img: s22,
      colors: ["#747474", "#654D57", "#487953", "#EBEBEB"],
    },
  ]);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const handleClick = () => {
    const tempProd = shuffle(product.slice(-3));

    tempProd.map((sProds, i) => setProduct((current) => [...current, sProds]));
  };

  let prodCards = product.map((prods, index) => (
    <Card>
      <ProdImage src={prods.img}></ProdImage>
      <Title>{prods.name}</Title>

      <CircleWrapper>
        {prods.colors.map((c, i) => (
          <Circle inputColor={c}></Circle>
        ))}
      </CircleWrapper>

      <Price>{prods.price}</Price>
      <BuyButton>Buy</BuyButton>
    </Card>
  ));

  return (
    <Body>
      <Wrapper>{prodCards}</Wrapper>
      <AddButton onClick={handleClick}>Add a row 😃</AddButton>
    </Body>
  );
};

export default Products;
