import reducers from "./reducers"; // Gets the State from the reducer(s)
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import createHistory from "history/createBrowserHistory";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  composedEnhancers
);

export default store;
