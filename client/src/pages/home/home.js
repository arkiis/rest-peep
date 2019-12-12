import React from "react";
import { BackgroundWrapper } from "../../layout/elements/index";
import HomeContainer from "../../components/HomeContainer/HomeContainer";

const Home = () => {
  return (
    <BackgroundWrapper bgBlack>
      {/* place bg image divs <div /> */}
      <HomeContainer />
    </BackgroundWrapper>
  );
};

export default Home;
