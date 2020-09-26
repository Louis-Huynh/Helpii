import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Styles/Color";

const FooterLinks = () => {
  return (
    <Wrapper>
      <LinkItem to="/info">Contact us</LinkItem>
      <LinkItem to="/info">Privacy & Policy</LinkItem>
      <LinkItem to="/info">Terms and agreements</LinkItem>
    </Wrapper>
  );
};

export default FooterLinks;

const Wrapper = styled.div`
  background-color: ${COLORS.dark_blue};

  width: 100%;
  padding: 1% 0%;
`;

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
