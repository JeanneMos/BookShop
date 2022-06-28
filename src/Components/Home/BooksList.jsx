import React, { useContext } from "react"

import { PropTypes } from "prop-types"
import { BooksContext } from "../../Context/bookContext"
import {
  hideSlider,
  showSlider,
  itemAlreadyAdded,
  addToCart,
} from "../../Context/bookActions"
import Book from "./Book"

import SlidePopup from "../SidePanel/SlidePopup"
import styledComponents from "../../StyledComponents/styledComponents"

const BooksList = ({ books }) => {
  const { state, dispatch } = useContext(BooksContext)
  const { cartItems, openSlider, alertMessage, bookToDisplay } = state
  const { Wrapper, NoResultsWrapper } = styledComponents


  const displaySliderForNewBook = (book) => {
    dispatch(hideSlider())
    setTimeout(() => {
      dispatch(showSlider(book))
    }, 350)
  }
  const addItemToCart = (book) => {
    dispatch(hideSlider())
    const addedBook = cartItems.find((item) => item.isbn === book.isbn)
    setTimeout(() => {
      if (addedBook) {
        return dispatch(itemAlreadyAdded())
      }
      return dispatch(addToCart(book))
    }, 350)
  }
  const closeSlider = () => {
    dispatch(hideSlider())
  }

  if (!books) {
    return null;
  }
  return (
    <>
      {books.length === 0 && (
        <NoResultsWrapper
          role="alert"
          aria-live="assertive"
          id="notFoundResults"
        >
          <p>
            Malheureusement, nous n&apos;avons rien trouvé pour votre
            recherche... Essayez encore une fois
          </p>
        </NoResultsWrapper>
      )}
      {books.length > 0 && (
        <Wrapper
          data-testid={books.length > 0 ? "resultsArray" : "emptyArray"}
        >
          {books.map((book) => (
            <Book
              book={book}
              key={book.isbn}
              addToCart={addItemToCart}
              displayBook={displaySliderForNewBook}
            />
          ))}

          {openSlider && (
            <SlidePopup
              open={openSlider}
              alertMessage={alertMessage}
              book={bookToDisplay}
              cartItems={cartItems}
              addToCart={addItemToCart}
              closeSlider={closeSlider}
            />
          )}
        </Wrapper>
      )}
    </>
  )
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      isbn: PropTypes.string,
    })
  ),
}
BooksList.defaultProps = {
  books: [],
}
export default BooksList
