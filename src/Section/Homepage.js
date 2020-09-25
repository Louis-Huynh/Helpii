import React, { useEffect } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setUsername, receiveEmail, setCart } from "../Actions";

const Homepage = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const username = useSelector((state) => state.username);
  let cart = useSelector((state) => state.cart);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

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

const Wrapper = styled.div``;
