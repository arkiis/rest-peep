import React from "react";
import Header from "../../UI/Header/Header";
import logo from "../../assets/peep-logo.svg.png";

const Title = () => {
  return (
    <>
      <Header size="h1" color="white" noMargin>
        <img style={{ paddingLeft: "72px" }} src={logo} />
      </Header>
      <Header size="h3" color="white" opacity>
        Enjoy random quotes of lil bo Peep
      </Header>
    </>
  );
};

export default Title;
