import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { COLORS } from "../Styles/Color";

const Links = () => {
  return (
    <Wrapper>
      <LinkItem to="/services">services</LinkItem>
      <LinkItem to="/shop">shops</LinkItem>
      <LinkItem to="/auth">signin</LinkItem>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    email: state.email,
    isLogged: state.isLogged,
    cart: state.cart,
  };
};

// const mapDispatchToProps = (dispatch) => {//null because we are not planning on changing the state
//   return{

//   }
// };
export default connect(mapStateToProps, null)(Links);

const LinkItem = styled(Link)`
  margin: 3%;
  color: white;
  text-decoration: none;
  outline: none;
  &:hover {
    color: ${COLORS.orange};
  }
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: rows;

  justify-content: center;

  border: 1px solid black;
  background-color: #242a47;
`;
