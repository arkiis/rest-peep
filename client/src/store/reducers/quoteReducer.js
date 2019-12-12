import * as actions from "../actions/actionTypes";

const intialState = {
  loading: false,
  quote: [],
  error: false,
  randomQuote: ""
};

export default (state = intialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case actions.ADD_QUOTE_START:
      return { ...state, loading: true };
    case actions.ADD_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };
    case actions.ADD_QUOTE_FAIL:
      return { loading: false, error: action.payload, quote: [] };
    case actions.ADD_RANDOM_QUOTE:
      return {
        ...state,

        randomQuote: action.payload
      };
    default:
      return state;
  }
};
