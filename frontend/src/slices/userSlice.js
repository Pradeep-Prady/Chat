import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
  },
  reducers: {
    userRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    userSuccess(state, action) {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      };
    },
    userFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    clearError(state, action) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  userRequest,
  userSuccess,
  userFail,

  clearError,
} = actions;

export default reducer;
