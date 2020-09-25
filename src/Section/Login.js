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
import axios from "axios";

import RegistrationContainer from "../Containers/RegistrationContainer";
import { getNodeText } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setEmail, setLogin } from "../Actions/user";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [isFlipped, setFlipped] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isContinueToPass, setContinueToPass] = useState(false);

  const history = useHistory();

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
          setEmail(response.data.email);
          setLogin(true);
        } else {
          console.log("login fails");
        }
      })
      .catch((error) => console.log("error: ", error));

    return;
  };

  const submitEmail = () => {
    let getEmail = true;

    if (getEmail) {
      setContinueToPass(true);
    } else {
      setEmail(null);
    }
  };

  return (
    <Wrapper>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontWrapper>
          <LogoContainer>
            <LogoImage src={Logo} />
          </LogoContainer>
          <LoginOptions>
            <Title>Member Login</Title>

            {isContinueToPass ? (
              <UserInputWrapper>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  onChange={(e) => setPassword(e.target.value)}
                  type={"password"}
                />
                <Button onClick={submitPassword}>Submit</Button>
              </UserInputWrapper>
            ) : (
              <UserInputWrapper>
                <TextField
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
          <RegistrationContainer />
          <Button onClick={handleClick}>Already have an account?</Button>
        </BackWrapper>
      </ReactCardFlip>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  //null because we are not planning on changing the state
  return {
    setEmail: (email) => {
      console.log("in map dispatch: ");
      dispatch(setEmail(email));
    },
    setLogin: (isLogged) => {
      dispatch(setLogin(isLogged));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);

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
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(196, 196, 196, 0.4);
  border-radius: 5px;
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
