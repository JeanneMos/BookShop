import { configureStore } from "@reduxjs/toolkit";

import administratorSlice from "../providers/administratorSlice";
import biographySlice from "../providers/biographySlice";
import globalInfoSlice from "../providers/globalInfoSlice";
import messageSlice from "../providers/messageSlice";
import modalSlice from "../providers/modalSlice";

export const store = configureStore({
  reducer: {
    globalInfo: globalInfoSlice,
    messages: messageSlice,
    modal: modalSlice,
    biography: biographySlice,
    administrator: administratorSlice,
  },
});
