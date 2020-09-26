import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const ShoppingCart = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const cart = useSelector((state) => state.cart);
  return (
    <Wrapper>
      <p>ShoppingCart</p>
    </Wrapper>
  );
};

export default ShoppingCart;

const Wrapper = styled.div`
  height: 80vh;
`;
