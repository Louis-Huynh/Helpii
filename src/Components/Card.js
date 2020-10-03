import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrapper>
      <Card className={classes.root}>
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
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div``;
