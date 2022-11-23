import React, { Component } from "react";

class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return  <nav>
                    <div>Score: {this.props.score}</div>
                    <div>Hiscore: {this.props.hiscore}</div>
                </nav>
    }
}

export default Header;