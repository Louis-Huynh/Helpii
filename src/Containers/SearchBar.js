import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = () => {
  return (
    <Wrapper>
      <TextWrapper
        id="outlined-basic"
        label="Search for anything..."
        variant="outlined"
      />
      <SubmitBtn variant="contained">Search</SubmitBtn>
    </Wrapper>
  );
};
export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
`;

const TextWrapper = styled(TextField)`
  width: 40vw;
  .MuiOutlinedInput-root {
    margin-right: 10%;
  }
`;

const SubmitBtn = styled(Button)`
  .MuiButton-label {
    color: green;
  }
`;
