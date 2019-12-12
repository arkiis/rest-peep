import React from "react";
import Heading from "../../UI/Header/Header";
import Refresh from "mdi-react/RefreshIcon";
import * as Styles from "./RefreshQuote.styles";

const RefreshQuote = () => {
  return (
    <Styles.Wrapper>
      <Refresh color="var(--color-mainPink)" size="3em" />
      <Heading size="h3" color="pink">
        refresh
      </Heading>
    </Styles.Wrapper>
  );
};

export default RefreshQuote;
