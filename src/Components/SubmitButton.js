import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { COLORS } from "../Styles/Color";

const SubmitButton = (props) => {
  return (
    <Button
      style={{
        width: "100%",
        backgroundColor: COLORS.orange,
        color: COLORS.white,
      }}
      variant="outlined"
      color="primary"
      onClick={() => {}}
    >
      {props.children}
    </Button>
  );
};

export default SubmitButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% 0;
`;

const Title = styled.div``;
