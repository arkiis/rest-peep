import React, { useEffect } from "react";
import Heading from "../../UI/Header/Header";
import { connect } from "react-redux";
import { fetchQuotes } from "../../store/actions/quoteActions";
import { LoaderWrapper, QuoteSpan } from "./Quote.styles";
import Loader from "../../UI/Loader/Loader";
import { PropTypes } from "prop-types";

const Quote = ({ quoteData, children, fetchQuotes }) => {
  console.log("quoteData", quoteData);
  useEffect(() => {
    fetchQuotes();
  }, []);
  return quoteData.loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : quoteData.error ? (
    <Heading size="h2" color="pink">
      {quoteData.error}
    </Heading>
  ) : (
    <div>
      <Heading size="h2" color="white">
        🐣:{" "}
        <QuoteSpan data-test="input">"{quoteData.randomQuote.quote}"</QuoteSpan>
      </Heading>
    </div>
  );
};

Quote.propTypes = {
  quoteData: PropTypes.shape({
    quote: PropTypes.array.isRequired,
    randomQuote: PropTypes.string.isRequired
  })
};

const mapStateToProps = state => {
  return {
    quoteData: state.quote
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuotes: () => dispatch(fetchQuotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
