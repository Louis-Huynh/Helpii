import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Logo from "../assets/Logo/logo.png";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";

import RegistrationContainer from "../Containers/RegistrationContainer";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [isFlipped, setFlipped] = useState(false);

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

  return (
    <Wrapper>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <FrontWrapper>
          <LogoContainer>
            <LogoImage src={Logo} />
          </LogoContainer>
          <LoginOptions>
            <Title>Member Login</Title>
            <Button>Login with Email</Button>
            <GoogleLogin
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
            />
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
