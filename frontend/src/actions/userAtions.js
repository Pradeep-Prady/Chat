import axios from "axios";
import {
  clearError,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  updatePasswordFail,
  updatePasswordRequest,
  updatePasswordSuccess,
  updateProfileFail,
  updateProfileRequest,
  updateProfileSuccess,
} from "../slices/authSlice";
import { userFail, userRequest, userSuccess } from "../slices/userSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`/chat/v1/login`, { email, password });
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const clearAuthError = (dispatch) => {
  dispatch(clearError());
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    console.log(formData);
    const { data } = await axios.post(`/chat/v1/register`, formData, config);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data));
  }
};

export const loadUser = async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`/chat/v1/myprofile`);
    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFail(error.response.data));
  }
};

export const logout = async (dispatch) => {
  try {
    await axios.get(`/chat/v1/logout`);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFail(error.response.data));
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(`/chat/v1/update`, userData, config);
    dispatch(updateProfileSuccess(data));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  try {
    dispatch(updatePasswordRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.put(`/chat/v1/password/change`, formData, config);
    dispatch(updatePasswordSuccess());
  } catch (error) {
    dispatch(updatePasswordFail(error.response.data.message));
  }
};

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/chat/v1/password/forgot`,
      formData,
      config
    );
    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response.data.message));
  }
};

export const resetPassword = (formData, token) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/chat/v1/password/reset/${token}`,
      formData,
      config
    );
    dispatch(resetPasswordSuccess(data));
  } catch (error) {
    dispatch(resetPasswordFail(error.response.data.message));
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch(userRequest());
     
    const { data } = await axios.get(`/chat/v1/admin/user/${id}`);
    dispatch(userSuccess(data));
  } catch (error) {
    dispatch(userFail(error.response.data.message));
  }
};
