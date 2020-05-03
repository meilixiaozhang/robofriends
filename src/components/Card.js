import React from "react";

function Card(props) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img src={props.img} alt="robot" /> */}
      <h2>{props.name}</h2>
      <p>{props.username}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
