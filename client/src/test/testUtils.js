// import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/reducers/index";
import { middlewares } from "../store/index";
import "../setupTest";

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// export const checkProps = (component, conformingProps) => {
//   const propError = checkPropTypes(
//     component.PropTypes,
//     conformingProps,
//     "prop",
//     component.name
//   );
//   expect(propError).toBeUndefined();
// };
