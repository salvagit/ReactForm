import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from "./store";

import App from "./routes/App";
import Register from "./routes/Register";
import Home from "./routes/Home";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/register" component={Register} exact={true} />
          <Route path="/home" component={Home} exact={true} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById("root")
);