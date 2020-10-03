import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Services = () => {
  useEffect(() => {
    console.log("fetch latest services with axios");
  }, []);

  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div``;

const Card = styled.div``;
