import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const FieldInput = (props) => {
  return (
    <Wrapper>
      <TextField
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
  margin-bottom: 2%;
`;

const Title = styled.div``;
