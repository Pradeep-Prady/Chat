import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    loading: false,
    isReviewSubmitted: false,
    isReviewDeleted: false,
    isreviewUpdated: false,
    review: {},
  },
  reducers: {
    reviewRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    reviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        review: action.payload.review,
      };
    },
    reviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    createReviewRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    createReviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isReviewSubmitted: true,
      };
    },
    createReviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    clearReviewSubmitted(state, action) {
      return {
        ...state,
        isReviewSubmitted: false,
      };
    },
    clearError(state, action) {
      return { ...state, error: null };
    },

    reviewsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    reviewsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        reviews: action.payload.reviews,
      };
    },
    reviewsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    adminReviewsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    adminReviewsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        adminReviews: action.payload.reviews,
      };
    },
    adminReviewsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    deleteReviewRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteReviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isReviewDeleted: true,
      };
    },
    deleteReviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearReviewDeleted(state, action) {
      return {
        ...state,
        isReviewDeleted: false,
      };
    },

    // update product

    updateReviewRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    updateReviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        review: action.payload.review,
        isreviewUpdated: true,
      };
    },
    updateReviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearReviewUpdated(state, action) {
      return {
        ...state,
        isreviewUpdated: false,
      };
    },
  },
});

const { actions, reducer } = reviewSlice;

export const {
  reviewRequest,
  reviewSuccess,
  reviewFail,
  createReviewFail,
  createReviewRequest,
  createReviewSuccess,
  clearError,
  clearReviewSubmitted,

  reviewsRequest,
  reviewsFail,
  reviewsSuccess,
  deleteReviewFail,
  deleteReviewRequest,
  deleteReviewSuccess,
  clearReviewDeleted,

  updateReviewRequest,
  updateReviewSuccess,
  updateReviewFail,
  clearReviewUpdated,

  adminReviewsRequest,
  adminReviewsSuccess,
  adminReviewsFail,
} = actions;

export default reducer;
