import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagePictures: null,
  messages: [],
  customMessagePicture: false,
  messagesViewed: [],
  messagesNumber: null,
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
      state.customMessagePicture = payload?.customMessagePicture || false;
    },
    messagePictureDeleted: (state) => {
      state.messagePictures = null;
      state.customMessagePicture = false;
    },
    messagesViewed: (state, action) => {
      const { payload } = action;
      state.messagesViewed = [...payload.messagesViewed];
    },
    messagesNumberReceived: (state, action) => {
      const { payload } = action;
      state.messagesNumber = payload.messagesNumber;
    },
    messageAdded: (state, action) => {
      const { payload } = action;
      state.messages = [...state.messages, payload?.message];
    },
    messagesListUpdated: (state, action) => {
      const { payload } = action;
      state.messages = payload?.messages;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  messagePictureUpdated,
  messagePictureDeleted,
  messageAdded,
  messagesNumberReceived,
  messagesViewed,
  messagesListUpdated,
} = messageSlice.actions;

export default messageSlice.reducer;
