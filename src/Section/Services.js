import React from "react";
import styled from "styled-components";
import SearchBar from "../Containers/SearchBar";

const Services = () => {
  return (
    <Wrapper>
      <p>Services!</p>
      <SearchBar />
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  height: 80vh;
`;
