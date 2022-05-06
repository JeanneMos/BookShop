import { MODAL_CLOSED, MODAL_OPENED } from "./modalAction";

const initialModalState = {
  isOpen: false,
  theme: "white",
  hasCloseButton: true,
};

const modalReducer = (state = initialModalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MODAL_CLOSED:
      return {
        ...state,
        isOpen: false,
        theme: state.theme,
        hasCloseButton: state.hasCloseButton,
        element: null,
      };
    case MODAL_OPENED:
      return {
        ...state,
        isOpen: true,
        theme: payload?.theme ?? state.theme,
        hasCloseButton: payload?.hasCloseButton ?? state.hasCloseButton,
        element: payload?.element ?? null,
      };
    default:
      return state;
  }
};

export { modalReducer, initialModalState };
