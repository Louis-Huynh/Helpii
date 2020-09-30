import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../Styles/Color";

const ServicesMenu = () => {
  return (
    <Wrapper>
      <Title>Services</Title>
      <LinkContainer>
        <LinkItem to="/services/education">Education</LinkItem>
        <LinkItem to="/services/construction">Construction</LinkItem>
        <LinkItem to="/services/mechanics">Mechanics</LinkItem>
        <LinkItem to="/services/technology">Technology</LinkItem>
        <LinkItem to="/services/business">Business</LinkItem>
        <LinkItem to="/services/music">Music</LinkItem>
        <LinkItem to="/services/art-writing">Art & writing</LinkItem>
        <LinkItem to="/services/house">House</LinkItem>
        <LinkItem to="/services/miscellaneous">Miscellaneous</LinkItem>
      </LinkContainer>
    </Wrapper>
  );
};

export default ServicesMenu;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  font-size: 2em;
  text-align: left;
  margin: 1% 5%;
`;

const LinkContainer = styled.div`
  display: flex;
  margin: 0 5%;
  padding: 0.5% 0;
  flex-direction: row;
  background: rgba(230, 230, 230, 0.8);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const LinkItem = styled(Link)`
  font-weight: 500;
  padding: 0 1%;
  text-decoration: none;
  color: ${COLORS.blue23};
`;
