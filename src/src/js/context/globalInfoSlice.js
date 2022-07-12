import { createSlice } from "@reduxjs/toolkit";

const initialInfoState = {
  defunt: null,
  marque: {
    name: "pfg",
  },
  prestations: [],
  defuntImage: null,
  heroBannerImage: { name: "img-bg-default.jpg" },
  agency: null,
  homageText: "",
  manager: {},
  obituary: {},
};

export const globalInfoSlice = createSlice({
  name: "user",
  initialState: initialInfoState,
  reducers: {
    espaceInfoUpdated: (state, action) => {
      const { payload } = action;
      state.defunt = payload?.defunt;
      state.prestations = payload?.prestations;
      state.homageText = payload?.homageText;
      state.agency = payload?.agency;
      state.defuntImage = payload?.defuntImage;
      state.heroBannerImage = payload?.heroBannerImage;
      state.manager = payload?.manager;
      state.marque = payload?.marque;
      state.obituary = payload?.obituary;
    },
    espaceAdministratorUpdated: (state, action) => {
      const { payload } = action;
      state.manager = {
        ...state.manager,
        field_user_name: payload.firstName,
        field_user_surname: payload.lastName,
      };
    },
    defuntImageUpdated: (state, action) => {
      const { payload } = action;
      state.defuntImage = payload.defuntImage
        ? {
            url: payload.defuntImage.url,
            name: payload.defuntImage.name,
          }
        : null;
    },
    heroImageUpdated: (state, action) => {
      const { payload } = action;
      state.heroBannerImage = payload.heroBannerImage
        ? {
            //url: payload.heroBannerImage.url,
            name: payload.heroBannerImage.name,
          }
        : null;
    },
    homageTextUpdated: (state, action) => {
      const { payload } = action;
      state.homageText = payload?.homageText;
    },

    defuntImageDeleted: (state) => {
      state.defuntImage = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  espaceInfoUpdated,
  defuntImageUpdated,
  heroImageUpdated,
  homageTextUpdated,
  defuntImageDeleted,
  espaceAdministratorUpdated,
} = globalInfoSlice.actions;

export default globalInfoSlice.reducer;
