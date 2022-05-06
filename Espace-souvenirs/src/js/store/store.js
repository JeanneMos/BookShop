import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../context/userSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";
import biographySlice from "../context/biographySlice";
import administratorSlice from "../context/administratorSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    messages: messageSlice,
    modal: modalSlice,
    biography: biographySlice,
    administrator: administratorSlice,
  },
});
