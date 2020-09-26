import React from "react";
import styled from "styled-components";

import RegistrationContainer from "../Containers/RegistrationContainer";

const Registration = () => {
  return (
    <Wrapper>
      <RegistrationContainer />
    </Wrapper>
  );
};

export default Registration;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`;
