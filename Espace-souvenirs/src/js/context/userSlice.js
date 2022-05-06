import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialUserState = {
  isLogged: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo'))?.isLogged : false,
  isAdmin: false,
  civility: null,
  lastName:null,
  gp_entities: null,
  defunt:null,
  prestations: [],
  defuntImage: null,
  heroBannerImage: {name:"img-bg-default.jpg"},
  isBiographyEdited:false,
  biography:"",
  agency: null,
  homageText: ""
};


export const userSlice = createSlice({
  name: 'user',
  initialState:initialUserState,
  reducers: {
    userLoggedIn: (state) => {
      state.isLogged = true;
    },
    userLoggedOut: (state) => {
      state.isLogged = false;
    },
    isAdminSet: (state, action) => {
      const {payload} = action;
      state.isAdmin = payload.isAdmin;
    },
    espaceInfoUpdated: (state, action) => {
      const {payload} = action;
      state.defunt = payload?.defunt;
      state.prestations = payload?.prestations;
      state.homageText = payload?.homageText;
      state.agency = payload?.agency;
      state.biography = payload?.biography;
      state.isBiographyEdited = payload?.isBiographyEdited;
    },
    defuntImageUpdated: (state, action) => {
      const {payload} = action;
      state.defuntImage = payload.defuntImage ? {
        url: payload.defuntImage.url,
        name: payload.defuntImage.name
      } : null;
    },
    heroImageUpdated: (state, action) => {
      const {payload} = action;
      state.heroBannerImage = payload.heroBannerImage ? {
        //url: payload.heroBannerImage.url,
        name: payload.heroBannerImage.name
      } : null;
    },
    homageTextUpdated: (state, action) => {
      const {payload} = action;
      state.homageText = payload?.homageText;
    },

    defuntImageDeleted: (state) => {
      state.defuntImage = null;
    }
  }
})

// Action creators are generated for each case reducer function
export const { userLoggedIn,
  userLoggedOut,
  espaceInfoUpdated,
  defuntImageUpdated,
  heroImageUpdated,
  homageTextUpdated,
  defuntImageDeleted,
  isAdminSet
} = userSlice.actions

export default userSlice.reducer
