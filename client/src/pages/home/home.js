import React from "react";
import { BackgroundWrapper } from "../../layout/elements/index";
import HomeContainer from "../../components/HomeContainer/HomeContainer";
import MovingBg from "../../components/MovingBg/MovingBg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <BackgroundWrapper bgBlack>
      <Helmet>
        <title>Rest PeeP</title>
        <meta
          name="description"
          content="Discover random quotes from lil peep"
        />
        <meta
          name="keywords"
          content="lil peep, lil PEEP, GBC, goth bio clique, quote generator, lil peep quotes, quotes, lil peep tattos, hellboy, cry baby, lil peeps tweets"
        />
      </Helmet>
      <MovingBg />
      <HomeContainer />
    </BackgroundWrapper>
  );
};

export default Home;
