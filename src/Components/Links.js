import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../Styles/Color";
import Logo from "../assets/Logo/logo.png";

const Links = () => {
  return (
    <Wrapper>
      <LeftSideWrapper>
        <LinkItem to="/">
          <img style={{ height: "5vh", width: "5vw" }} src={Logo}></img>
        </LinkItem>
      </LeftSideWrapper>

      <MiddleWrapper>
        <LinkItem to="/services">services</LinkItem>
        <LinkItem to="/shop">shops</LinkItem>
      </MiddleWrapper>
      <RightSideWrapper>
        <LinkItem to="/auth">signin</LinkItem>
      </RightSideWrapper>
    </Wrapper>
  );
};

export default Links;
//MOBILE-> flex-direction: row-reverse;

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

const Wrapper = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  border: 1px solid black;
  background-color: #242a47;
`;

const LeftSideWrapper = styled.div`
  margin-left: 2%;
`;

const MiddleWrapper = styled.div``;

const RightSideWrapper = styled.div`
  margin-right: 2%;
`;
