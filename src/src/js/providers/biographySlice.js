import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBiographyEdited: false,
  biographyPhotos: [],
  biography: "",
};

export const biographySlice = createSlice({
  name: "biography",
  initialState,
  reducers: {
    biographyUpdated: (state, action) => {
      const { payload } = action;
      state.biography = payload?.biography ?? state.biography;
      state.isBiographyEdited = payload?.isBiographyEdited;
    },
    biographyDeleted: (state) => {
      state.biography = initialState.biography;
    },
    biographyPhotoAdded: (state, action) => {
      state.biographyPhotos = [...action.payload.biographyPhotos];
    },
  },
});

// Action creators are generated for each case reducer function
export const { biographyPhotoAdded, biographyUpdated, biographyDeleted } =
  biographySlice.actions;

export default biographySlice.reducer;
