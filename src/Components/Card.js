import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const CardItem = (props) => {
  return (
    <Card>
      <CardContent>
        {props.title}
        {props.username}
        {props.description}
        {props.date}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;

const Wrapper = styled.div``;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;
