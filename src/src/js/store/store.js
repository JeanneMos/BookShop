import { configureStore } from "@reduxjs/toolkit";

import administratorSlice from "../context/administratorSlice";
import biographySlice from "../context/biographySlice";
import globalInfoSlice from "../context/globalInfoSlice";
import messageSlice from "../context/messageSlice";
import modalSlice from "../context/modalSlice";

export const store = configureStore({
  reducer: {
    globalInfo: globalInfoSlice,
    messages: messageSlice,
    modal: modalSlice,
    biography: biographySlice,
    administrator: administratorSlice,
  },
});
