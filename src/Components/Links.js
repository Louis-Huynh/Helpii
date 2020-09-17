import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Styles/Color";

const Links = () => {
  return (
    <Wrapper>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/services">services</LinkItem>
      <LinkItem to="/shop">shops</LinkItem>
      <LinkItem to="/auth">signin</LinkItem>
      <LinkItem to="/register">Registration</LinkItem>
    </Wrapper>
  );
};

export default Links;
//MOBILE-> flex-direction: row-reverse;

const LinkItem = styled(Link)`
  margin: 3%;
  color: white;
  text-decoration: none;
  outline: none;
  &:hover {
    color: ${COLORS.orange};
  }
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: rows;

  justify-content: center;

  border: 1px solid black;
  background-color: #242a47;
`;
