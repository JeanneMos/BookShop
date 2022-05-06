import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isOpen: false,
  theme: 'white',
  hasCloseButton: true,
  modalType: null
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalClosed: (state) => {
      state.isOpen= false;
      state.theme = initialState.theme;
      state.hasCloseButton= initialState.hasCloseButton;

      state.modalType = null;
    },
    modalOpened: (state, action) => {
      const {payload} = action;
      state.isOpen = true;
      state.theme = payload?.theme ?? state.theme;
      state.hasCloseButton = payload?.hasCloseButton ?? state.hasCloseButton;

      state.modalType = payload?.modalType ?? null
    }

  }
})

// Action creators are generated for each case reducer function
export const {
  modalClosed,
  modalOpened
} = modalSlice.actions

export default modalSlice.reducer
