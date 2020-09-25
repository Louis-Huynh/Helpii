import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Homepage = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const username = useSelector((state) => state.username);

  return (
    <Wrapper>
      <p>Homepage</p>
      {isLogged ? <p>{username}</p> : null}
    </Wrapper>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     username: state.username,
//     isLogged: state.isLogged,
//   };
// };

export default connect(null, null)(Homepage);

const Wrapper = styled.div``;
