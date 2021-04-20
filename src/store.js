import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
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
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION",
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(4200));
store.dispatch("TEST_STRING_ACTION");

export default store;
