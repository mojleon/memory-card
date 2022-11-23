import React, { Component } from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return  <div>
                    <img src={this.props.image} />
                    {this.props.number}
                </div>
    }
}

export default Card;