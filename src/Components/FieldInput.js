import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { COLORS } from "../Styles/Color";

const FieldInput = (props) => {
  return (
    <Wrapper>
      <TextField
        style={{ borderRadius: "5px", background: COLORS.white, width: "100%" }}
        variant="outlined"
        label={props.title}
        onChange={(data) => {
          props.updateData(data.target.value);
        }}
      />
    </Wrapper>
  );
};

export default FieldInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% 0;
`;

const Title = styled.div``;
