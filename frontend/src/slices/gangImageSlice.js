import { createSlice } from "@reduxjs/toolkit";

const gangImageSlice = createSlice({
  name: "gangImage",
  initialState: {
    loading: false,
    gangImage: {},
    userGangIMage: {},
    isCommentSubmitted: false,
    isCommentDeleted: false,

    isGangImageCreated: false,
    isUserGangImageCreated: false,
    isGangImageDeleted: false,
 
  },
  reducers: {
    gangImageRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    gangImageSuccess(state, action) {
      return {
        ...state,
        loading: false,
        gangImage: action.payload.image,
      };
    },
    gangImageFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    clearError(state, action) {
      return { ...state, error: null };
    },

    clearGangImage(state, action) {
      return { ...state, gangImage: {} };
    },

    // new Gang Image upload

    newGangImageRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    newGangImageSuccess(state, action) {
      return {
        ...state,
        loading: false,
        gangImage: action.payload.gangImage,
        isGangImageCreated: true,
      };
    },
    newGangImageFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isGangImageCreated: false,
      };
    },
    clearGangImageCreated(state, action) {
      return { ...state, isGangImageCreated: false };
    },

    // delete gang image

    deleteGangImageRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteGangImageSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isGangImageDeleted: true,
      };
    },
    deleteGangImageFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearGangImageDeleted(state, action) {
      return {
        ...state,
        isGangImageDeleted: false,
      };
    },


    // new user gang image creation

    newUserGangImageRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    newUserGangImageSuccess(state, action) {
      return {
        ...state,
        loading: false,
        gangImage: action.payload.gangImage,
        isUserGangImageCreated: true,
      };
    },
    newUserGangImageFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isUserGangImageCreated: false,
      };
    },
    clearUserGangImageCreated(state, action) {
      return { ...state, isUserGangImageCreated: false };
    },

    userGangImageRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    userGangImageSuccess(state, action) {
      return {
        ...state,
        loading: false,
        userGangImage: action.payload.gangImage,
      };
    },
    userGangImageFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // comment
    createCommentRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    createCommentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isCommentSubmitted: true,
      };
    },
    createCommentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearCommentSubmitted(state, action) {
      return {
        ...state,
        isCommentSubmitted: false,
      };
    },

    commentsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    commentsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
      };
    },
    commentsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    deleteCommentsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteCommentSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isCommentDeleted: true,
      };
    },
    deleteCommentFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearCommentDeleted(state, action) {
      return {
        ...state,
        isCommentDeleted: false,
      };
    },
  },
});

const { actions, reducer } = gangImageSlice;

export const {
  gangImageRequest,
  gangImageSuccess,
  gangImageFail,

  createCommentFail,
  createCommentRequest,
  createCommentSuccess,
  clearError,
  clearGangImage,
  clearCommentSubmitted,

  deleteGangImageRequest,
  deleteGangImageSuccess,
  deleteGangImageFail,
  clearGangImageDeleted,

  newGangImageRequest,
  newGangImageSuccess,
  newGangImageFail,
  clearGangImageCreated,

  userGangImageRequest,
  userGangImageSuccess,
  userGangImageFail,

  newUserGangImageRequest,
  newUserGangImageSuccess,
  newUserGangImageFail,
  clearUserGangImageCreated,

  commentsRequest,
  commentsFail,
  commentsSuccess,
  deleteCommentsFail,
  deleteCommentsRequest,
  deletecommentsuccess,
  clearReviewDeleted,
} = actions;

export default reducer;
