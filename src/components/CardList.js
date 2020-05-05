import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <Card
      key={props.id}
      id={props.id}
      name={props.name}
      username={props.username}
      email={props.email}
    />
  );
}

export default CardList;
