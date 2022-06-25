import React, { useState, useEffect, useContext } from "react"
import DotLoader from "react-spinners/DotLoader"
import { PropTypes } from "prop-types"
import { BooksContext } from "../../Context/bookContext"
import {
  hideSlider,
  showSlider,
  itemAlreadyAdded,
  addToCart,
} from "../../Context/bookActions"
import Book from "./Book"
import Search from "../Search/Search"
import SlidePopup from "../SidePanel/SlidePopup"
import styledComponents from "../../StyledComponents/styledComponents"

const BooksList = ({ books }) => {
  const { state, dispatch } = useContext(BooksContext)
  const { cartItems, openSlider, alertMessage, bookToDisplay, loading } = state
  const { LoaderWrapper, Wrapper, NoResultsWrapper } = styledComponents
  const [searchValue, setSearchValue] = useState("")
  const [searchArray, setSearchArray] = useState([])
  const bookSearch = (val) => {
    setSearchValue(val)
    if (val !== "" && val.length > 2) {
      setSearchArray(
        books.filter((book) =>
          book.title.toLowerCase().includes(val.toLowerCase())
        )
      )
    }
  }
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

  useEffect(() => {
    let isMounted = true
    if (isMounted && books) {
      setSearchArray(
        books.filter((book) => book.title.toLowerCase().includes(searchValue))
      )
    }

    return () => {
      dispatch(hideSlider())
      isMounted = false
    }
  }, [searchValue, books, dispatch])
  return (
    <>
      <Search bookSearch={bookSearch} inputSearchValue={searchValue} />
      {loading && (
        <LoaderWrapper>
          <DotLoader size={200} color="#feaf46" />
        </LoaderWrapper>
      )}
      {!loading && searchArray.length === 0 && (
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
      {!loading && searchArray.length > 0 && (
        <Wrapper
          aria-live={searchValue ? "assertive" : null}
          data-testid={searchValue ? "resultArray" : null}
        >
          {searchArray.map((book) => (
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
