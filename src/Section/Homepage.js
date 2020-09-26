import React, { useEffect } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);

  return (
    <Wrapper>
      <p>Homepage</p>

      {isLogged ? (
        <div>
          <p>Welcome {username}</p>
          <p>email:{email}</p>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  height: 80vh;
`;
