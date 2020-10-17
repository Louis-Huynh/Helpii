import React, { useState } from "react";
import styled from "styled-components";
import dateFormat from "dateformat";
import { useSelector, useDispatch } from "react-redux";
import * as Scroll from "react-scroll";
import { setCart } from "../Actions";
import { Link, Element, Events, animateScroll } from "react-scroll";

const ShoppingCart = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const cart = useSelector((state) => state.cart);
  const cartSize = cart.length;

  const [cartItem, setCartItem] = useState([...cart]);

  const dispatch = useDispatch();

  let handleDeleteItem = (id) => {
    console.log("delete");
    let index = -1;
    let counter = 0;
    // loop till find it in cart
    cartItem.map((item) => {
      if (item.id == id) {
        index = counter;
        return;
      }
      counter++;
    });

    if (index > -1) {
      // remove from array
      cartItem.splice(index, 1);
    }
    // dispatch new cart into redux
    dispatch(setCart(cartItem));

    //update UI cart
    setCartItem([...cartItem]);
  };

  return (
    <Wrapper>
      <p>ShoppingCart</p>

      {cartSize ? (
        <MainContainer>
          <CartItemContainer>
            <Element>
              {cartItem.map((item, index) => {
                return (
                  <div key={index}>
                    <ItemNumber>Item #{index + 1}</ItemNumber>
                    <ItemContainer>
                      <HeaderContainer>
                        <Title>{item.title}</Title>
                        <Date>{dateFormat(item.date, "dS/mm/yyyy")}</Date>
                      </HeaderContainer>
                      <Username>{item.username}</Username>
                      <Description>{item.description}</Description>

                      {/* <p>{item.location}</p> */}
                      <ActionButton>
                        <button>Save for later</button>
                        <button onClick={() => handleDeleteItem(item.id)}>
                          Delete
                        </button>
                      </ActionButton>
                    </ItemContainer>
                  </div>
                );
              })}
            </Element>
          </CartItemContainer>
          <PriceContainer>
            <h1>Your total is: $125</h1>
            <button>Proceed to checkout</button>
          </PriceContainer>
        </MainContainer>
      ) : (
        <div>
          <h1>Your cart is empty!</h1>
          <h2>Why don't you explore some services or shop</h2>
        </div>
      )}
    </Wrapper>
  );
};

export default ShoppingCart;

const Wrapper = styled.div`
  height: 80vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemNumber = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 1.6em;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin: 1% 0 3% 0;
`;

const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.5em;
`;

const Username = styled.div`
  font-weight: 500;
  font-size: 1.2em;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 1.2em;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 1.5em;
`;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 2% 6%;
`;

const PriceContainer = styled.div`
  width: 30%;
`;
