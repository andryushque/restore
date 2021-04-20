import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }

  return next(action);
};

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(stringMiddleware, logMiddleware)
);

store.dispatch("TEST_ACTION");

export default store;
