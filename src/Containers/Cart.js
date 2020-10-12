import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { COLORS } from "../Styles/Color";
import CartIcon from "../assets/icons/shoppingCart.png";
import { useSelector, useDispatch } from "react-redux";

const Cart = (props) => {
  const cartSelector = useSelector((state) => state.cart);

  const [imageNumber, setImageNumber] = useState("");

  let getCartSize = () => {
    return;
  };

  return (
    <LinkItem to="/cart">
      <img style={{ height: "5vh", width: "5vw" }} src={CartIcon} />
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
