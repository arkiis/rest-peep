import React, { useEffect } from "react";
import * as Styles from "./QuoteBox.styles";

import Quote from "../Quote/Quote";

const QuoteBox = () => {
  return (
    <Styles.QuoteBoxContainer>
      <Quote />
    </Styles.QuoteBoxContainer>
  );
};

export default QuoteBox;
