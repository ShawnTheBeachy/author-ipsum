"use strict";

import { compose, createStore } from "redux";
import Home from "views/home";
import { Provider } from "react-redux";
import React from "react";
import store from "reducers";

function app () {
  return <Provider store={compose()(createStore)(store)}>
    <Home />
  </Provider>;
}

export default app;
