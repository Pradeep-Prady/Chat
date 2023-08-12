import axios from "axios";
import {
  chatFail,
  chatRequest,
  chatSuccess,
  chatsFail,
  chatsRequest,
  chatsSuccess,
  createChatFail,
  createChatRequest,
  createChatSuccess,
} from "../slices/chatSlice";

export const getChats = () => async (dispatch) => {
  try {
    dispatch(chatsRequest());
    const { data } = await axios.get("/api/v1/chats");
    dispatch(chatsSuccess(data));
  } catch (error) {
    dispatch(chatsFail(error.response.data.message));
  }
};

export const getChat = (id) => async (dispatch) => {
  try {
    dispatch(chatRequest());
    const { data } = await axios.get(`/api/v1/chats/${id}`);
    dispatch(chatSuccess(data));
  } catch (error) {
    dispatch(chatFail(error.response.data.message));
  }
};

export const sendMessage = (formData) => async (dispatch) => {
  try {
    dispatch(createChatRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post("/api/v1/chats/create", formData, config);
    dispatch(createChatSuccess(data));
  } catch (error) {
    dispatch(createChatFail(error.response.data.message));
  }
};
