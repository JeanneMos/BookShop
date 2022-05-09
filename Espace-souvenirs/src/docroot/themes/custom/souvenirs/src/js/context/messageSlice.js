import { createSlice } from "@reduxjs/toolkit";

import { fakeMessages } from "../services/fakeMessages";

const initialState = {
  messagePictures: null,
  messages: fakeMessages,
  messagesViewed: [],
};

export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    messagePictureUpdated: (state, action) => {
      const { payload } = action;
      state.messagePictures = payload?.messagePictures
        ? [...payload.messagePictures]
        : null;
    },
    messagePictureDeleted: (state) => {
      state.messagePictures = null;
    },
    messagesViewed: (state, action) => {
      const { payload } = action;
      state.messagesViewed = [...payload.messagesViewed];
    },
    messageAdded: (state, action) => {
      const { payload } = action;
      state.messages = [...state.messages, payload?.message];
    },
    messageUnpublished: (state, action) => {
      const { payload } = action;
      state.messages.map((message) => {
        if (message.id === payload.id) {
          message.published = !message.published;
        }
        return message;
      });
    },
    messagePublished: (state, action) => {
      const { payload } = action;
      state.messages.map((message) => {
        if (message.id === payload.id) {
          message.published = !message.published;
        }
        return message;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  messagePictureUpdated,
  messagePictureDeleted,
  messageAdded,
  messageUnpublished,
  messagePublished,
  messagesViewed,
} = messageSlice.actions;

export default messageSlice.reducer;
