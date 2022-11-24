import React from "react";

const Header = (props) => {
    return  <nav>
                <div>Score: {props.score}</div>
                <div>Hiscore: {props.hiscore}</div>
            </nav>
}

export default Header;