import React from "react";

function Card(props) {
    return  <div id={props.number} onClick={(event) => {props.clickCard(event)} }>
                <img src={props.image} />
            </div>
}

export default Card;