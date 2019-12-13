import React from "react";
import { BackgroundWrapper } from "../../layout/elements/index";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import MovingBg from "../../components/MovingBg/MovingBg";

const Home = () => {
  return (
    <BackgroundWrapper bgBlack>
      <MovingBg />
      <HomeContainer />
    </BackgroundWrapper>
  );
};

export default Home;
