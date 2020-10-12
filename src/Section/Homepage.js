import React, { useEffect } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import { COLORS } from "../Styles/Color";
import { useSelector, useDispatch } from "react-redux";
import LatestServices from "../Containers/FeatureServices";

const Homepage = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);

  // make api cards to fetch most recent cards
  let fetchLatestCards = () => {};

  return (
    <Wrapper>
      {/* <p>Homepage</p> */}

      {isLogged ? (
        <WelcomeContainer>
          <WelcomeMessage>Welcome {username} to Helpii!</WelcomeMessage>
          <Bar />
          <Bar />
          {/* <p>email:{email}</p> */}
        </WelcomeContainer>
      ) : null}

      <LatestServices />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(79, 255, 204, 0) 0%,
    rgba(0, 10, 57, 1) 100%
  );
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const WelcomeMessage = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 1.8em;
  color: ${COLORS.white};
`;

const Bar = styled.div`
  width: 40%;
  margin: 0.5% 0;
  border-bottom: 1px solid white;
`;
