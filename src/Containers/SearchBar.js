import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SearchBar = () => {
  return (
    <Wrapper>
      <TextWrapper id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Default</Button>
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
  margin-right: 10%;
`;
