import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
import User from "../assets/icons/user.png";
import { useHistory } from "react-router-dom";

const CardItem = (props) => {
  const history = useHistory();
  //redirect to card with api
  let clickedCard = () => {
    history.push("/services/" + props.id);
  };
  return (
    <CardContainer>
      <CardActionArea style={{ padding: "2%" }} onClick={clickedCard}>
        <CardContent>
          <HeaderContainer>
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
          </HeaderContainer>
          <Description>{props.description}</Description>
        </CardContent>
      </CardActionArea>
      <CardActionsContainer>
        <Button>
          <UserProfile>
            <img height="20px" width="20px" src={User} />
          </UserProfile>
          <Username>{props.username}</Username>
        </Button>
        <ActionContainer>
          <Button>
            <i class="fas fa-star"></i>
          </Button>
          <Button>
            <i class="fas fa-cart-plus"></i>
          </Button>
        </ActionContainer>
      </CardActionsContainer>
    </CardContainer>
  );
};

export default CardItem;

const UserProfile = styled.div`
  border-radius: 5px;
  margin-right: 5px;
`;

const CardContainer = styled(Card)`
  margin: 4% 2%;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.5em;
`;

const Username = styled.div`
  font-weight: 500;
`;

const Description = styled.div`
  font-weight: 500;
`;

const Date = styled.div`
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardActionsContainer = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

const ActionContainer = styled.div``;
