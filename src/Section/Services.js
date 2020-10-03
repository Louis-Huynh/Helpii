import React from "react";
import styled from "styled-components";
import ServicesMenu from "../Containers/ServicesMenu";
import LatestServices from "../Containers/LatestServices";
import FeatureServices from "../Containers/FeatureServices";

const Services = () => {
  return (
    <Wrapper>
      <ServicesMenu />
      <FeatureServices />
      <LatestServices />
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  height: 100vh;
  background-image: radial-gradient(
      circle at center center,
      transparent,
      rgb(0, 0, 0)
    ),
    linear-gradient(
      114deg,
      rgba(59, 59, 59, 0.05) 0%,
      rgba(59, 59, 59, 0.05) 50%,
      rgba(63, 63, 63, 0.05) 50%,
      rgba(63, 63, 63, 0.05) 100%
    ),
    linear-gradient(
      186deg,
      rgba(173, 173, 173, 0.05) 0%,
      rgba(173, 173, 173, 0.05) 50%,
      rgba(237, 237, 237, 0.05) 50%,
      rgba(237, 237, 237, 0.05) 100%
    ),
    linear-gradient(
      98deg,
      rgba(191, 191, 191, 0.05) 0%,
      rgba(191, 191, 191, 0.05) 50%,
      rgba(119, 119, 119, 0.05) 50%,
      rgba(119, 119, 119, 0.05) 100%
    ),
    linear-gradient(
      58deg,
      rgba(95, 95, 95, 0.05) 0%,
      rgba(95, 95, 95, 0.05) 50%,
      rgba(189, 189, 189, 0.05) 50%,
      rgba(189, 189, 189, 0.05) 100%
    ),
    linear-gradient(
      259deg,
      rgba(31, 31, 31, 0.05) 0%,
      rgba(31, 31, 31, 0.05) 50%,
      rgba(110, 110, 110, 0.05) 50%,
      rgba(110, 110, 110, 0.05) 100%
    ),
    linear-gradient(
      41deg,
      rgba(142, 142, 142, 0.05) 0%,
      rgba(142, 142, 142, 0.05) 50%,
      rgba(84, 84, 84, 0.05) 50%,
      rgba(84, 84, 84, 0.05) 100%
    ),
    linear-gradient(
      134deg,
      rgba(96, 96, 96, 0.05) 0%,
      rgba(96, 96, 96, 0.05) 50%,
      rgba(198, 198, 198, 0.05) 50%,
      rgba(198, 198, 198, 0.05) 100%
    ),
    linear-gradient(
      46deg,
      rgba(12, 12, 12, 0.05) 0%,
      rgba(12, 12, 12, 0.05) 50%,
      rgba(71, 71, 71, 0.05) 50%,
      rgba(71, 71, 71, 0.05) 100%
    ),
    radial-gradient(
      circle at center center,
      hsl(227, 81%, 21%),
      hsl(227, 81%, 21%)
    );
`;
