import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isAdmin: false,
  civility: null,
  lastName: null,
  firstName: null,
  gp_entities: null,
  administrators: [],
  currentUser: {},
  isEditingAdministator: false,
  isEditingPersonalInfo: false,
};

export const administratorSlice = createSlice({
  name: "administrator",
  initialState,
  reducers: {
    userLoggedIn: (state) => {
      state.isLogged = true;
    },
    userLoggedOut: (state) => {
      state.isLogged = false;
    },
    isAdminSet: (state, action) => {
      const { payload } = action;
      state.isAdmin = payload.isAdmin;
    },
    administratorsRetrieved: (state, action) => {
      const { payload } = action;
      state.administrators = payload.administrators;
    },
    administratorEdited: (state, action) => {
      const { payload } = action;
      state.isEditingAdministator = payload.isEditingAdministator;
      state.isEditingPersonalInfo = false;
    },
    currentUserSet: (state, action) => {
      const { payload } = action;
      state.currentUser = payload.user;
    },
    currentAdministratorSet: (state, action) => {
      const { payload } = action;
      state.currentAdministrator = payload.user;
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
  userLoggedIn,
  userLoggedOut,
  isAdminSet,
  administratorEdited,
  administratorsRetrieved,
  administratorPersonalInfoModified,
  currentAdministratorSet,
  currentUserSet,
} = administratorSlice.actions;

export default administratorSlice.reducer;
