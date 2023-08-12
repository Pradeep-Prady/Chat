import axios from "axios";
import {
  gangImagesFail,
  gangImagesRequest,
  gangImagesSuccess,
  userGangImagesFail,
  userGangImagesRequest,
  userGangImagesSuccess,
} from "../slices/gangImagesSlice";
import {
  commentsFail,
  commentsRequest,
  commentsSuccess,
  createCommentFail,
  createCommentRequest,
  createCommentSuccess,
  deleteGangImageFail,
  deleteGangImageRequest,
  deleteGangImageSuccess,
  gangImageFail,
  gangImageRequest,
  gangImageSuccess,
  newGangImageFail,
  newGangImageRequest,
  newGangImageSuccess,
  newUserGangImageFail,
  newUserGangImageRequest,
  newUserGangImageSuccess,
  userGangImageFail,
  userGangImageRequest,
  userGangImageSuccess,
} from "../slices/gangImageSlice";

export const getGangImages = () => async (dispatch) => {
  try {
    dispatch(gangImagesRequest());
    const { data } = await axios.get(`/api/v1/gang/images`);
    dispatch(gangImagesSuccess(data));
  } catch (error) {
    //handle error
    dispatch(gangImagesFail(error.response.data.message));
  }
};

export const getGangImage = (id) => async (dispatch) => {
  try {
    dispatch(gangImageRequest());
    const { data } = await axios.get(`/api/v1/gang/image/${id}`);
    dispatch(gangImageSuccess(data));
  } catch (error) {
    //handle error
    dispatch(gangImageFail(error.response.data.message));
  }
};

export const createGangImage = (gangImageData) => async (dispatch) => {
  try {
    dispatch(newGangImageRequest());
    const { data } = await axios.post(`/api/v1/admin/gang/upload`, gangImageData);
    dispatch(newGangImageSuccess(data));
  } catch (error) {
    //handle error
    dispatch(newGangImageFail(error.response.data.message));
  }
};

export const deleteGangImage = (id) => async (dispatch) => {
  try {
    dispatch(deleteGangImageRequest());
    const { data } = await axios.delete(`/api/v1/admin/gang/${id}`);
    dispatch(deleteGangImageSuccess(data));
  } catch (error) {
    //handle error
    dispatch(deleteGangImageFail(error.response));
  }
};


export const getUserGangImages = () => async (dispatch) => {
  try {
    dispatch(userGangImagesRequest());
    const { data } = await axios.get(`/api/v1/admin/usergang/images`);
    dispatch(userGangImagesSuccess(data));
  } catch (error) {
    //handle error
    dispatch(userGangImagesFail(error.response.data.message));
  }
};

export const getUserGangImage = (id) => async (dispatch) => {
  try {
    dispatch(userGangImageRequest());
    const { data } = await axios.get(`/api/v1/admin/usergang/image/${id}`);
    dispatch(userGangImageSuccess(data));
  } catch (error) {
    //handle error
    dispatch(userGangImageFail(error.response.data.message));
  }
};


export const createUserGangImage = (gangImageData) => async (dispatch) => {
  try {
    dispatch(newUserGangImageRequest());
    const { data } = await axios.post(`/api/v1/gang/upload`, gangImageData);
    dispatch(newUserGangImageSuccess(data));
  } catch (error) {
    //handle error
    dispatch(newUserGangImageFail(error.response.data.message));
  }
};


export const createGangImageComment = (commentData) => async (dispatch) => {
  try {
    dispatch(createCommentRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/gang/comment/create`,
      commentData,
      config
    );
    dispatch(createCommentSuccess(data));
  } catch (error) {
    //handle error
    dispatch(createCommentFail(error.response.data.message));
  }
};

export const getComments = (id) => async (dispatch) => {
  try {
    dispatch(commentsRequest());
    const { data } = await axios.get(`/api/v1/gang/comments`, {
      params: { id },
    });
    dispatch(commentsSuccess(data));
  } catch (error) {
    //handle error
    dispatch(commentsFail(error.response.data.message));
  }
};
