import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Logo from "../assets/Logo/logo.png";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import { COLORS } from "../Styles/Color";

import EditIcon from "@material-ui/icons/Edit";

import RegistrationContainer from "../Containers/RegistrationContainer";
import { getNodeText } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUsername, receiveEmail, setCart } from "../Actions";
import { useTranslation } from "react-i18next";

const Login = () => {
  // const [username, setUsername] = useState(null);
  const [isFlipped, setFlipped] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isContinueToPass, setContinueToPass] = useState(false);
  const [isPasswordSet, setIsPassword] = useState(false);
  const [isEmailSet, setIsEmail] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const successLogin = () => {
    console.log("Success");
  };

  const failureLogin = () => {
    console.log("failure");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!isFlipped);
  };

  //if response.data.status===Success then the user is authenticated
  const submitPassword = () => {
    axios
      .post("https://helpii-backend.herokuapp.com/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("res: ", response);
        if (response.data.status === "Success") {
          history.push("/");
          dispatch(setUsername(response.data.username));
          dispatch(setLogin(true));
        } else {
          console.log("login fails");
          setOpenSnack(true);
          setIsPassword(true);
        }
      })
      .catch((error) => console.log("error: ", error));

    return;
  };

  const submitEmail = () => {
    let getEmail = true;

    axios
      .post("https://helpii-backend.herokuapp.com/verify_email", {
        email: email,
      })
      .then((response) => {
        if (response.data.email) {
          setContinueToPass(true);
          dispatch(receiveEmail(response.data.email));
          setIsEmail(false);
        } else {
          setOpenSnack(true);
          setIsEmail(true);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  let displayLoginForm = isContinueToPass ? (
    <UserInputWrapper>
      <Chip
        style={{ margin: "2% 0" }}
        label={
          <span>
            {email} <i class="fas fa-edit"></i>
          </span>
        }
        onClick={() => {
          setContinueToPass(false);
        }}
      />
      <InputContainer>
        <TextField
          style={{ background: COLORS.white }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitPassword();
            }
          }}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          label={t("Login_password")}
          variant="outlined"
        />
        <ButtonField onClick={submitPassword}>
          <i class="fas fa-sign-in-alt"></i>
        </ButtonField>
      </InputContainer>
    </UserInputWrapper>
  ) : (
    <UserInputWrapper>
      <InputContainer>
        <TextField
          style={{ background: COLORS.white }}
          value={email}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitEmail();
            }
          }}
          onChange={(e) => setEmail(e.target.value)}
          label="Login with Email"
          variant="outlined"
        />
        <ButtonField onClick={submitEmail}>
          <i class="fas fa-sign-in-alt"></i>
        </ButtonField>
      </InputContainer>
    </UserInputWrapper>
  );

  return (
    <Wrapper>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontWrapper>
          <LogoContainer>
            <LogoTitle>{t("Login_member")}</LogoTitle>
            <LogoImage src={Logo} />
          </LogoContainer>
          <LoginOptions>
            {displayLoginForm}
            <LowerButtonContainer>
              <Button>{t("Login_forgot")}</Button>
              <Button onClick={handleClick}>{t("Login_create")}</Button>
            </LowerButtonContainer>
          </LoginOptions>
        </FrontWrapper>

        <BackWrapper>
          <RegistrationContainer />
          <Button onClick={handleClick}>{t("Login_already")}</Button>
        </BackWrapper>
      </ReactCardFlip>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => {
          setOpenSnack(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpenSnack(false);
          }}
          severity="error"
        >
          {isEmailSet ? <>{t("Login_error_email")}</> : null}
          {isPasswordSet ? <>{t("Login_error_password")}</> : null}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 2em;
  width: 100%;
`;

const FrontWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(196, 196, 196, 0.4);
  border-radius: 5px;
  padding: 4%;
`;

const BackWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  background: rgb(196, 196, 196, 0.4);
  padding: 0 8%;
`;

const LogoContainer = styled.div`
  height: 50%;
  width: 50%;
  margin-bottom: 5%;
`;

const LogoImage = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3``;

const UserInputWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LowerButtonContainer = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: "ow;
  justify-content:space-between;
`;

const ButtonField = styled(Button)`
  height: 50px;
`;

{
  /* <Button>Login with Email</Button> */
}
{
  /* <GoogleLogin
              clientId="185804809654-lvp5lufl3r6nk9lf2rbe26lb28llmcgm.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={successLogin}
              onFailure={failureLogin}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin
              appId="1088597931155576"
              // autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            /> */
}
