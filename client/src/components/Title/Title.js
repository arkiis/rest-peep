import React from "react";
import Header from "../../UI/Header/Header";
import logo from "../../assets/peep-logo.svg-min.png";
import { TitleImg } from "./Title.styles";

const Title = () => {
  return (
    <>
      <Header size="h1" color="white" noMargin>
        <TitleImg src={logo} alt="White edgy letters that spell peep" />
      </Header>
      <Header size="h3" color="white" opacity>
        Enjoy random quotes of lil bo Peep
      </Header>
    </>
  );
};

export default Title;
