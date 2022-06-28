import React, { useReducer, createContext } from "react"
import booksReducer from "./bookReducer"

const initialState = {
  openSlider: false,
  bookToDisplay: null,
  cartItems: [],
  alertMessage: null,
  searching: false,
}

const BooksContext = createContext(initialState)
const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState)
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksContext, BooksProvider }
