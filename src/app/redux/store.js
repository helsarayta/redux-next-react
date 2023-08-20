const { legacy_createStore, applyMiddleware, createStore } = require("redux");
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = legacy_createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;