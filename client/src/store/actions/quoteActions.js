import axios from "axios";
import * as actions from "./actionTypes";

//SPECIAL ACTION CREATOR
export const fetchQuotes = () => {
  return dispatch => {
    dispatch(fetchQuotesStart());
    axios
      .get("https://rest-in-peep.herokuapp.com/posts")
      .then(response => {
        const quote = response.data;

        dispatch(fetchQuotesSuccess(quote));
        const random = quote[Math.floor(Math.random() * quote.length)];
        dispatch(fetchRandomQuote(random));
      })
      .catch(error => {
        dispatch(fetchQuotesFail(error.message));
      });
  };
};

//fetch quotes
//action creators
export const fetchQuotesStart = () => {
  return {
    type: actions.ADD_QUOTE_START
  };
};
export const fetchQuotesSuccess = quote => {
  return {
    type: actions.ADD_QUOTE_SUCCESS,
    payload: quote
  };
};
export const fetchRandomQuote = randomQuote => {
  return {
    type: actions.ADD_RANDOM_QUOTE,
    payload: randomQuote
  };
};
export const fetchQuotesFail = error => {
  return {
    type: actions.ADD_QUOTE_FAIL,
    payload: error
  };
};
