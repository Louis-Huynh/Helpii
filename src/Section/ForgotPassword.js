import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import FieldInput from "../Components/FieldInput";
import Button from "@material-ui/core/Button";
import ForgotPwIcon from "../assets/icons/forgot.svg";

const ForgotPassword = (event) => {
  const [email, setEmail] = useState("");

  const forgotPassword = () => {
    axios
      .post("https://helpii-backend.herokuapp.com/reset_password", {
        email: email,
      })
      .then((response) => {
        console.log("da response: ", response);
      })
      .catch((error) => {
        console.log("error forgot: ", error);
      });
  };

  return (
    <Wrapper>
      <ResetPwContainer>
        <Title>Reset your password</Title>
        <Image src={ForgotPwIcon} alt="Forgot pw" />
        <FieldInput
          title={"Enter your email"}
          value={email}
          updateData={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" onClick={forgotPassword}>
          Reset your password
        </Button>
      </ResetPwContainer>
    </Wrapper>
  );
};

export default ForgotPassword;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ResetPwContainer = styled.div`
  padding: 4%;
  background: rgba(190, 190, 190, 0.4);
  height: 50%;
  width: 30%;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 4%;
`;

const Image = styled.img`
  height: 180px;
  width: 180px;
`;