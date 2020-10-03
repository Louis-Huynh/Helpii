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

import RegistrationContainer from "../Containers/RegistrationContainer";
import { getNodeText } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUsername, receiveEmail, setCart } from "../Actions";

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
      .post("http://localhost:3001/signin", {
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
      .post("http://localhost:3001/verify_email", {
        email: email,
      })
      .then((response) => {
        console.log("boogey: ", response.data);
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

  return (
    <Wrapper>
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
          {isEmailSet ? <>Error, please retry entering your email</> : null}
          {isPasswordSet ? (
            <>Error, please retry entering your password</>
          ) : null}
        </Alert>
      </Snackbar>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontWrapper>
          <LogoContainer>
            <LogoImage src={Logo} />
          </LogoContainer>
          <LoginOptions>
            <Title>Member Login</Title>

            {isContinueToPass ? (
              <UserInputWrapper>
                <Chip label={email} />
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      submitPassword();
                    }
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                  type={"password"}
                />
                <Button onClick={submitPassword}>Submit</Button>
              </UserInputWrapper>
            ) : (
              <UserInputWrapper>
                <TextField
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      submitEmail();
                    }
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Login with email or username"
                  variant="outlined"
                />
                <Button onClick={submitEmail}>Continue</Button>
              </UserInputWrapper>
            )}

            <Button>Forgot password/username</Button>
            <Button onClick={handleClick}>Create an account</Button>
          </LoginOptions>
        </FrontWrapper>

        <BackWrapper>
          <Container>
            <RegistrationContainer />
            <Button onClick={handleClick}>Already have an account?</Button>
          </Container>
        </BackWrapper>
      </ReactCardFlip>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FrontWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(196, 196, 196, 0.4);
  border-radius: 5px;
`;

const BackWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const Container = styled.div`
  background: rgb(196, 196, 196, 0.4);
`;

const LogoContainer = styled.div`
  height: 50%;
  width: 50%;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
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
