import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardItem from "../Components/Card";

const FeatureServices = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/services").then((x) => {
      setItems(x.data);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Feature Services</Title>
      <CardContainer>
        {items.map((item) => {
          return (
            <CardWrapper>
              <CardItem
                title={item.title}
                username={item.username}
                description={item.description}
                date={item.date}
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
