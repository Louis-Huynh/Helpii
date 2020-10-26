import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { COLORS } from "../Styles/Color";
import axios from "axios";

const Profile = (props) => {
  useEffect(() => {
    // console.log("test");
    //use axios call to get the item
    axios
      .get("http://localhost:3001/user/" + props.match.params.user)
      .then((results) => {
        console.log("test");
        console.log(results.data);
      })
      .catch();

    //get user information
  }, []);

  return (
    <Wrapper>
      <p>Display their service and shops</p>
      <p>Favorites</p>
      <p>change username</p>
      <p>Reset password</p>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div``;
