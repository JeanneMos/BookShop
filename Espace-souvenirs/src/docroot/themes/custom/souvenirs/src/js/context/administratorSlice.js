import { createSlice } from "@reduxjs/toolkit";
import {
  primaryAdministrator,
  administrators,
} from "../services/fakeAdministrators";
import Cookies from "js-cookie";

const initialState = {
  administrators: administrators || [],
  currentAdministrator: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : {},
  isEditingAdministator: false,
  isEditingPersonalInfo: false,
};

export const administratorSlice = createSlice({
  name: "administrator",
  initialState,
  reducers: {
    administratorsRetrieved: (state, action) => {
      const { payload } = action;
      state.administrators = payload.administrators;
    },
    administratorEdited: (state, action) => {
      const { payload } = action;
      state.isEditingAdministator = payload.isEditingAdministator;
      state.isEditingPersonalInfo = false;
    },
    currentAdministratorSet: (state, action) => {
      const { payload } = action;
      state.currentAdministrator = payload.administrator;
    },
    administratorPersonalInfoModified: (state, action) => {
      const { payload } = action;
      state.isEditingPersonalInfo = payload.isEditingPersonalInfo;
      state.isEditingAdministator = payload.isEditingAdministator || false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  administratorEdited,
  administratorsRetrieved,
  administratorPersonalInfoModified,
  currentAdministratorSet,
} = administratorSlice.actions;

export default administratorSlice.reducer;
