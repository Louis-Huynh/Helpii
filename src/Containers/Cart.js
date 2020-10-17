import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { COLORS } from "../Styles/Color";
import CartIcon from "../assets/icons/shoppingCart.png";

const Cart = (props) => {
  console.log("test");

  return (
    <LinkItem to="/cart">
      <img style={{ height: "5vh", width: "5vw" }} src={CartIcon} />
      <NumberImg src={props.number} />
    </LinkItem>
  );
};

export default Cart;

const Wrapper = styled.div``;

const LinkItem = styled(Link)`
  padding: 0 5%;
  color: white;
  text-decoration: none;
  outline: none;
  &:hover {
    color: ${COLORS.orange};
  }
  font-size: 1.5em;
`;

const NumberImg = styled.img`
  position: absolute;
  top: 0px;
  height: 25px;
  width: 25px;
`;
