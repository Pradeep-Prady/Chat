import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import authReducer from "./slices/authSlice";
import chatsReducer from "./slices/chatSlice";
import userReducer from "./slices/userSlice";

const reducer = combineReducers({
  authState: authReducer,
  chatsState: chatsReducer,
  userState: userReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
