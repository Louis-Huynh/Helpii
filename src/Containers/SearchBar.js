import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = () => {
  return (
    <Wrapper>
      <TextWrapper
        style={{ height: "5vh" }}
        label="Search for anything..."
        variant="outlined"
      />
      <SubmitBtn style={{ height: "5vh" }} variant="contained">
        Search
      </SubmitBtn>
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
  .MuiOutlinedInput-root {
    margin-right: 1%;
    padding: 2%;
  }
`;

const SubmitBtn = styled(Button)`
  .MuiButton-label {
    color: green;
    padding: 2%;
  }
`;
