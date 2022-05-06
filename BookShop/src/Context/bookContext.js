import React, { useReducer, createContext } from "react"
import booksReducer from "./bookReducer"

const initialState = {
  openSlider: false,
  bookToDisplay: null,
  cartItems: [],
  alertMessage: null,
  searching: false,
  loading: false,
}

const BooksContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState)
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksContext, BooksProvider }
