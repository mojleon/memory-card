import React from "react";

import Logo from "../../src/assets/images/Berserk/Logo.svg";

const Header = (props) => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} />
        <p>card-game</p>
      </div>
      <button
        onClick={(event) => {
          props.toggleSlained(event);
        }}
      >
        SLAIN LIST
      </button>
      <div className="score">
        <div>Score: {props.score}</div>
        <div>Hiscore: {props.hiscore}</div>
      </div>
    </nav>
  );
};

export default Header;
