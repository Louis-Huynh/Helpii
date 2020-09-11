import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <Wrapper>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/services">services</LinkItem>
      <LinkItem to="/shop">shops</LinkItem>
      <LinkItem to="/auth">signin</LinkItem>
    </Wrapper>
  );
};

export default Links;

const LinkItem = styled(Link)`
  margin: 3%;
`;

const Wrapper = styled.div`
    display:flex
    flex-direction:column;
    padding-top: 2%;

    border:1px solid black;
`;
