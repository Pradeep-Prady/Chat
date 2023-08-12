import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    loading: false,
    isChatCreated: false,
     
  },
  reducers: {
    chatsRequest(state, action) {
      return {
        loading: true,
      };
    },
    chatsSuccess(state, action) {
      return {
        loading: false,
        chats: action.payload.gang_chats,
      };
    },
    chatsFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },

    // create a chat

    createChatRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    createChatSuccess(state, action) {
      return {
        ...state,
        loading: false,
        chats: action.payload.chats,
        isChatCreated: true,
      };
    },
    createChatFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    },
    clearChatCreated(state, action) {
      return{
        ...state,
        isChatCreated: false,
      }
    },

    chatRequest(state, action) {
      return {
        loading: true,
      };
    },
    chatSuccess(state, action) {
      return {
        loading: false,
        chat: action.payload.chat,
      };
    },
    chatFail(state, action) {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = chatSlice;

export const {
  chatsRequest,
  chatsSuccess,
  chatsFail,
  createChatRequest,
  createChatSuccess,
  createChatFail,
  chatRequest,
  chatSuccess,
  chatFail,
  clearChatCreated,
} = actions;

export default reducer;
