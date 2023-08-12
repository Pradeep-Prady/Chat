import { createSlice } from "@reduxjs/toolkit";

const gangImagesSlice = createSlice({
  name: "gangImages",
  initialState: {
    loading: false,
  },
  reducers: {
    gangImagesRequest(state, action) {
      return {
        loading: true,
      };
    },
    gangImagesSuccess(state, action) {
      return {
        loading: false,
        gangImages: action.payload.images,
      };
    },
    gangImagesFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },

    admingangImagesRequest(state, action) {
      return {
        loading: true,
      };
    },
    admingangImagesSuccess(state, action) {
      return {
        loading: false,
        gangImages: action.payload.images,
      };
    },
    admingangImagesFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },

    userGangImagesRequest(state, action) {
      return {
        loading: true,
      };
    },
    userGangImagesSuccess(state, action) {
      return {
        loading: false,
        userGangImages: action.payload.images,
      };
    },
    userGangImagesFail(state, action) {
      return {
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

const { actions, reducer } = gangImagesSlice;

export const {
  gangImagesRequest,
  gangImagesSuccess,
  gangImagesFail,

  userGangImagesRequest,
  userGangImagesSuccess,
  userGangImagesFail,
  
  admingangImagesRequest,
  admingangImagesSuccess,
  admingangImagesFail,
  clearError,
} = actions;

export default reducer;
