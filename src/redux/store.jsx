import { applyMiddleware, combineReducers, createStore } from "redux";
import CustomerReducer from "./reducers/CustomerREducer";
import AccountReducer from "./reducers/AccountReducer";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// const rotReeducer = combineReducers({
//   account: AccountReducer,
//   customer: CustomerReducer,
// });
// const store = createStore(rotReeducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: CustomerReducer,
  },
});

export default store;
