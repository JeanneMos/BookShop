import React from "react"
import { render, queryByLabelText, cleanup } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { BooksContext } from "../../Context/bookContext"
import BooksList from "../Home/BooksList"
import SlidePopup from "./SlidePopup"

describe("should render components", () => {
  const book = {
    title: "Book Title",
    price: 105,
    cover: "image_of_the_book.jpg",
    isbn: "SDFSlfsklk",
    synopsis: ["Blabla", "Blabla"],
  }
  const state = {
    openSlider: true,
    cartItems: [],
    alertMessage: null,
  }
  let content = null
  const dispatch = jest.fn()
  const closeSidePanel = jest.fn()
  beforeEach(() => {
    const { container } = render(
      <BooksContext.Provider value={{ state, dispatch }}>
        <Router>
          <BooksList books={[book]}>
            <SlidePopup props={state} open closeSlider={closeSidePanel} />
          </BooksList>
        </Router>
      </BooksContext.Provider>
    )
    content = container
  })
  afterEach(() => {
    content = null
    cleanup()
  })

  test("should render the component with a button close and the focus must be ib the button", () => {
    const btn = queryByLabelText(content, "Close dialog")
    expect(btn).toBeTruthy()
    expect(document.activeElement).toBe(btn)
  })
})
