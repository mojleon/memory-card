import React from "react";

function Card(props) {
  return (
    <div
      id={props.number}
      onClick={(event) => {
        props.clickCard(event);
      }}
    >
      <img src={props.image} />
      <h2>{props.name}</h2>
      <div className={props.slain ? `slash` : ""}></div>
    </div>
  );
}

export default Card;
