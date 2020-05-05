import React from "react";

function Card(props) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={"https://robohash.org/" + props.id + "?size=200x200"}
        alt="robot"
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
