import React, { Component } from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return  <div id={this.props.number} onClick={(event) => {this.props.clickCard(event)} }>
                    <img src={this.props.image} />
                </div>
    }
}

export default Card;