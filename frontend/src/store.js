import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./slices/authSlice";
import gangImagesReducer from "./slices/gangImagesSlice";
import gangImageReducer from "./slices/gangImageSlice";
import chatsReducer from "./slices/chatSlice";
import reviewReducer from "./slices/reviewSlice";
import userReducer from "./slices/userSlice";


const reducer = combineReducers({
  authState: authReducer,
  gangImagesState: gangImagesReducer,
  gangImageState: gangImageReducer,
  chatsState: chatsReducer,
  reviewsState: reviewReducer,
  userState: userReducer,


});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
