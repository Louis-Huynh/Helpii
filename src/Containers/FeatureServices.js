import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardItem from "../Components/Card";
import dateFormat from "dateformat";

const FeatureServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://helpii-backend.herokuapp.com/services").then((x) => {
      setItems(x.data);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Feature Services</Title>
      <CardContainer>
        {items.map((item, index) => {
          return (
            <CardWrapper>
              <CardItem
                key={index}
                id={item.id}
                title={item.title}
                username={item.username}
                description={item.description}
                date={dateFormat(item.date, "dS, mm, yyyy")}
              />
            </CardWrapper>
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default FeatureServices;

const Wrapper = styled.div``;

const Title = styled.p`
  color: white;
  font-weight: 900;
  font-size: 1.5em;
  text-align: left;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  height: 20vh;
  width: 25vw;
  margin: 2% 4%;
`;
