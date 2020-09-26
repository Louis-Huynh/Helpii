import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FieldInput from "../Components/FieldInput";
import { useTranslation } from "react-i18next";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { COLORS } from "../Styles/Color";

import axios from "axios";

const RegistrationContainer = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage("fr");
  // }, []);

  let submitRegistration = () => {
    axios
      .post("http://localhost:3001/register", {
        username: username,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        setOpen(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <SnackbarItem>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={true}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            You have successfully registered
          </Alert>
        </Snackbar>
      </SnackbarItem>

      <FormWrapper>
        <UserInputWrapper>
          <Title>{t("Create_account")}</Title>
          <SubTitle>{t("Create_account_subtitle")}</SubTitle>
          {/* Create an account. It’s free and take only a few minutes. */}

          <FieldButton
            title={"Username"}
            updateData={(e) => {
              setUsername(e);
            }}
          />
          <FieldButton
            variant="outlined"
            title={"Email Address"}
            updateData={(e) => {
              setEmail(e);
            }}
          />
          <FieldButton
            title={"Password"}
            updateData={(e) => {
              setPassword(e);
            }}
          />

          <Button
            style={{
              width: "100%",
              backgroundColor: COLORS.orange,
              color: COLORS.white,
            }}
            variant="outlined"
            color="primary"
            onClick={submitRegistration}
          >
            Create account
          </Button>
        </UserInputWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default RegistrationContainer;

const Wrapper = styled.div`
height:100%;
width:100%:
background: rgb(196, 196, 196, 0.4);
margin: 0 25%;
border: 1px solid purple;
`;

const FormWrapper = styled.div`
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
  justify-content: left;
  align-items: left;
`;

const SnackbarItem = styled.div`
  position: absolute;
  top: 10px;
`;

const FieldButton = styled(FieldInput)``;
