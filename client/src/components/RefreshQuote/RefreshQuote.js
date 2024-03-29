import React from "react";
import Heading from "../../UI/Header/Header";
import Refresh from "mdi-react/RefreshIcon";
import { connect } from "react-redux";
import { fetchQuotes } from "../../store/actions/quoteActions";

import * as Styles from "./RefreshQuote.styles";

const RefreshQuote = ({ fetchQuotes }) => {
  return (
    <Styles.Wrapper
      onClick={() => {
        fetchQuotes();
      }}
    >
      <Refresh color="var(--color-mainPink)" size="3em" />
      <Heading size="h3" color="pink">
        refresh
      </Heading>
    </Styles.Wrapper>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RefreshQuote);
