import {
  REMOVE_FROM_CART,
  HIDE_SLIDER,
  SHOW_SLIDER,
  ITEM_ALREADY_ADDED,
  ADD_TO_CART,
  LOADING_DATA,
  LOADED_DATA,
  ERROR,
  SEARCHING,
  CANCEL_SEARCH,
} from "../Utilities/constants"

const booksReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case LOADED_DATA:
      return {
        ...state,
        loading: false,
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: "Oups, il y a eu une erreur :(",
      }
    case SHOW_SLIDER:
      return {
        ...state,
        openSlider: true,
        bookToDisplay: payload.book,
        alertMessage: null,
        searching: false,
      }
    case "SET_BOOK":
      return {
        ...state,
        bookToDisplay: payload.book,
        alertMessage: null,
        searching: false,
      }
    case HIDE_SLIDER:
      return {
        ...state,
        openSlider: false,
        bookToDisplay: null,
        alertMessage: null,
        searching: false,
      }
    case ADD_TO_CART:
      return {
        ...state,
        openSlider: true,
        bookToDisplay: null,
        cartItems: [...state.cartItems, payload.book],
        alertMessage: null,
        searching: false,
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.isbn !== payload.item.isbn
        ),
      }
    case ITEM_ALREADY_ADDED:
      return {
        ...state,
        openSlider: true,
        bookToDisplay: null,
        alertMessage: "Vous avez déjà ce livre dans votre panier.",
        searching: false,
      }
    case SEARCHING:
      return {
        ...state,
        searching: true,
      }
    case CANCEL_SEARCH:
      return {
        ...state,
        searching: false,
      }
    default:
      return state
  }
}
export default booksReducer
