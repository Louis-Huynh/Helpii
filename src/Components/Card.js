import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import styled from "styled-components";
import User from "../assets/icons/user.png";
import { useHistory } from "react-router-dom";
import { setCart } from "../Actions";
import { COLORS } from "../Styles/Color";
import { useSelector, useDispatch } from "react-redux";

const CardItem = (props) => {
  const history = useHistory();

  const [isStar, setStar] = useState(false);

  let getCartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //redirect to card with api
  let clickedCard = () => {
    history.push("/services/" + props.id);
  };

  let handleAddToFavorite = () => {
    setStar(!isStar);
  };

  let handleCartItem = () => {
    // verify if it contains the items in carts

    let isContain = false;

    for (let i = 0; i < getCartItems.length; i++) {
      if (getCartItems[i].id == props.id) {
        isContain = true;
        return;
      }
    }

    // if true add to redux cart
    if (!isContain) {
      console.log(getCartItems);
      getCartItems.push(props.item);
      dispatch(setCart(getCartItems));
    }

    history.push("/cart/");
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
          <Button onClick={handleAddToFavorite}>
            {isStar ? (
              <i style={{ color: COLORS.yellow }} class="fas fa-star"></i>
            ) : (
              <i class="fas fa-star"></i>
            )}
          </Button>
          <Button onClick={handleCartItem}>
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
