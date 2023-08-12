import axios from "axios";
import {
  adminReviewsFail,
  adminReviewsRequest,
  adminReviewsSuccess,
  createReviewFail,
  createReviewRequest,
  createReviewSuccess,
  deleteReviewFail,
  deleteReviewRequest,
  deleteReviewSuccess,
  reviewFail,
  reviewRequest,
  reviewSuccess,
  reviewsFail,
  reviewsRequest,
  reviewsSuccess,
  updateReviewFail,
  updateReviewRequest,
  updateReviewSuccess,
} from "../slices/reviewSlice";

export const getReviews = () => async (dispatch) => {
  try {
    dispatch(reviewsRequest());
    const { data } = await axios.get("/api/v1/reviews");
    dispatch(reviewsSuccess(data));
  } catch (error) {
    dispatch(reviewsFail(error.response.data.message));
  }
};

export const getReview = (id) => async (dispatch) => {
  try {
    dispatch(reviewRequest());
    const { data } = await axios.get(`/api/v1/admin/review/${id}`);
    dispatch(reviewSuccess(data));
  } catch (error) {
    dispatch(reviewFail(error.response.data.message));
  }
};

export const createReview = (formData) => async (dispatch) => {
  try {
    dispatch(createReviewRequest());
    
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/review/create", formData, config);

    dispatch(createReviewSuccess(data));
  } catch (error) {
    dispatch(createReviewFail(error.response.data.message));
  }
};

export const deleteReview = (id) => async (dispatch) => {
  try {
    dispatch(deleteReviewRequest());
    await axios.delete(`/api/v1/admin/review/${id}`);
    dispatch(deleteReviewSuccess());
  } catch (error) {
    //handle error
    dispatch(deleteReviewFail(error.response.data.message));
  }
};

export const getAdminReviews = (category) => async (dispatch) => {
  try {
    dispatch(adminReviewsRequest());

    let link = `/api/v1/admin/reviews`;

    if(category){
      link += `?category=${category}`;
    }

    const { data } = await axios.get(link);
    dispatch(adminReviewsSuccess(data));
  } catch (error) {
    dispatch(adminReviewsFail(error.response.data.message));
  }
};

export const updateReview = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateReviewRequest());

    console.log(formData)
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/admin/review/${id}`, formData,config);

    dispatch(updateReviewSuccess(data));
  } catch (error) {
    dispatch(updateReviewFail(error.response.data.message));
  }
};
