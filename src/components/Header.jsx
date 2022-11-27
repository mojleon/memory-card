import React from "react";

import Logo from "../../src/assets/images/Berserk/Logo.svg";

const Header = (props) => {
  return (
    <nav>
      <img src={Logo} />
      <div>
        <div>Score: {props.score}</div>
        <div>Hiscore: {props.hiscore}</div>
      </div>
    </nav>
  );
};

export default Header;
