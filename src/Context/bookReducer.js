import {
  REMOVE_FROM_CART,
  HIDE_SLIDER,
  SHOW_SLIDER,
  ITEM_ALREADY_ADDED,
  ADD_TO_CART,
  SET_BOOK,
  ERROR,
  SEARCHING,
  CANCEL_SEARCH,
} from "../Utilities/constants"

const booksReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ERROR:
      return {
        ...state,
        error: "Oups, il y a eu une erreur :(",
      }
      case SET_BOOK:
        return {
          ...state,
          bookToDisplay: payload.book,
          alertMessage: null,
          searching: false,
        }
    case SHOW_SLIDER:
      return {
        ...state,
        openSlider: true,
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
