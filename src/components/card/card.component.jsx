import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="cats"
      src={`https://robohash.org/${props.character.id}?set=set4&size=180x180`}
    />
    <h2> {props.character.name} </h2>
    <p> {props.character.email} </p>
  </div>
);
