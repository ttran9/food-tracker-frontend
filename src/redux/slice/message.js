import { createSlice } from "@reduxjs/toolkit";

/**
 * state to store a message useful for situations such as displaying informative error messages.
 * state also has an array to store a list of messages.
 */
const initialState = {
  message: null,
  messages: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    clearMessages: (state, action) => {
      state.messages = [];
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage, setMessages, clearMessages } = actions;
export default reducer;
