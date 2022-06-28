import {
  REMOVE_FROM_CART,
  HIDE_SLIDER,
  SHOW_SLIDER,
  ITEM_ALREADY_ADDED,
  ADD_TO_CART,
  ERROR,
} from "../Utilities/constants"

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: { item },
})
export const hideSlider = () => ({ type: HIDE_SLIDER })
export const showSlider = (book) => ({ type: SHOW_SLIDER, payload: { book } })
export const itemAlreadyAdded = () => ({ type: ITEM_ALREADY_ADDED })
export const addToCart = (book) => ({ type: ADD_TO_CART, payload: { book } })
export const displayError = (error) => ({ type: ERROR, payload: { error } })
