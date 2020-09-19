import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FieldInput from "../Components/FieldInput";

import axios from "axios";

const RegistrationContainer = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let submitRegistration = () => {
    // console.log("tesst");
    // let registerInfo = {
    //   username: username,
    //   email: email,
    //   password: password,
    // };

    axios
      .post("http://localhost:3001/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <UserInputWrapper>
        <Title>Create an account</Title>
        <SubTitle>
          Create an account. It’s free and take only a few minutes.
        </SubTitle>

        <FieldInput
          title={"Username"}
          updateData={(e) => {
            setUsername(e);
          }}
        />
        <FieldInput
          variant="outlined"
          title={"Email Address"}
          updateData={(e) => {
            setEmail(e);
          }}
        />
        <FieldInput
          title={"Password"}
          updateData={(e) => {
            setPassword(e);
          }}
        />
      </UserInputWrapper>
      <Button variant="outlined" color="primary" onClick={submitRegistration}>
        Create account
      </Button>
    </Wrapper>
  );
};

export default RegistrationContainer;

const Wrapper = styled.div`
  border-radius: 10px;
  margin: 4%;
  padding: 2%;
`;

const Title = styled.div`
  border-bottom: 3px solid black;
`;

const SubTitle = styled.div`
  font-size: 0.8em;
`;

const UserInputWrapper = styled.div`
  margin: 0 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
