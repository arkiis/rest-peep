import React from "react";
import Title from "../Title/Title";
import * as Styles from "./HomeContainer.styles";
import { Container } from "../../layout/elements/index";
import QuoteBox from "../QuoteBox/QuoteBox";
import RefreshQuote from "../RefreshQuote/RefreshQuote";

const HomeContainer = () => {
  return (
    <Container>
      <Styles.TitleWrapper>
        <Title />
      </Styles.TitleWrapper>
      <QuoteBox />
      <RefreshQuote />
    </Container>
  );
};

export default HomeContainer;
