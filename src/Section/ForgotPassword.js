import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import FieldInput from "../Components/FieldInput";
import Button from "@material-ui/core/Button";
import ForgotPwIcon from "../assets/icons/forgot.svg";

const ForgotPassword = (event) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const forgotPassword = () => {
    //https://helpii-backend.herokuapp.com/reset_password
    axios
      .post("http://localhost:3001/reset_password", {
        email: email,
      })
      .then((response) => {
        console.log("response GET forgotpw: ", response);
      })
      .catch((error) => {
        console.log("Error forgotpw: ", error);
      });

    setSubmitted(true);
  };

  return (
    <Wrapper>
      <ResetPwContainer>
        {submitted ? (
          <div>
            <Title>Password reset link sent</Title>
            <Image src={ForgotPwIcon} alt="Forgot pw" />
            <h4>
              If your email matches an existing account we will send you a
              password recovery email within a few minutes
            </h4>
          </div>
        ) : (
          <div>
            <Title>Reset your password</Title>
            <Image src={ForgotPwIcon} alt="Forgot pw" />
            <FieldInput
              title={"Enter your email"}
              value={email}
              updateData={(e) => setEmail(e)}
            />

            <Button type="submit" onClick={forgotPassword}>
              Reset your password
            </Button>
          </div>
        )}
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
  height: 60%;
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
