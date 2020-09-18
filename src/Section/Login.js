import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Logo from "../assets/Logo/logo.png";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Login = () => {
  const [username, setUsername] = useState(null);

  const successLogin = () => {
    console.log("Success");
  };

  const failureLogin = () => {
    console.log("failure");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <Wrapper>
      <MainWrapper>
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
          <span>Forgot password/username</span>
          <span>Create an account</span>
        </LoginOptions>
      </MainWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
`;

const MainWrapper = styled.div`
  width: 100%;
  margin: 10% 25%;
  justify-content: center;
  display: flex;
  flex-direction: row;
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
