'use client'
import React from "react";
import UserComponent from "./component/userComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const page = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Learn React REDUX</h1>
        <UserComponent />
      </div>
    </Provider>
  );
};

export default page;
