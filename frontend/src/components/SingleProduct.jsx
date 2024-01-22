import {
  FavoriteBorderRounded,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f5f5;
  position: relative;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  z-index: 2;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f7eeed;
    transform: scale(1.1);
  }
`;

export default function SingleProduct({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderRounded />
        </Icon>
      </InfoContainer>
    </Container>
  );
}
