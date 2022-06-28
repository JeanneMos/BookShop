import React from "react"

import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitFor,
  getAllByText,
  getByTestId,
  queryByTestId,

} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import BooksList from "./BooksList"
import SlidePopup from "../SidePanel/SlidePopup"


import { BooksContext } from "../../Context/bookContext"
import "@testing-library/jest-dom/extend-expect"

const books = [
  {
    title: "Book 1",
    cover: "img.jpg",
    price: 25,
    isbn: "SDFSlfsklk",
    synopsis: ["Blablae", "Blablav"],
  },
  {
    title: "Book 2",
    cover: "img2.jpg",
    price: 35,
    isbn: "SDFSlfEklk",
    synopsis: ["Blabwla", "Blabbla"],
  },
  {
    title: "Book 3",
    cover: "img3.jpg",
    price: 35,
    isbn: "SDFSlfklk",
    synopsis: ["Blab&la", "Bladbla"],
  },
]

const state = {
  cartItems: books,
  openSlider: false,
}

describe("should render components", () => {
  let renderer = null
  const bookSearch = jest.fn()
  const closeSlider = jest.fn()
  beforeEach(() => {
    const { container } = render(
      <BooksContext.Provider value={{ state, dispatch: () =>jest.fn() }}>
        <BooksList books={books} />
      </BooksContext.Provider>
    )
    renderer = container
  })
  afterEach(() => {
    renderer = null
    cleanup()
  })
  test("should render a list of books", () => {
    const list = renderer.querySelectorAll("article")
    expect(list).toHaveLength(3)
  })
  test("should show a slider if click on add to cart button", async () => {
    const btn = getAllByText(renderer, "Ajouter au panier")[0]
    const {getByTestId} = render(
      <BooksContext.Provider value={{ state, dispatch: () =>jest.fn() }}>
        <MemoryRouter>
          <SlidePopup cartItems={books} open={false} closeSlider={closeSlider} />
        </MemoryRouter>
      </BooksContext.Provider>
    )
    fireEvent.click(btn)
    expect(getByTestId("modalDialog")).toBeTruthy();
  })
  test("should show a slider if click on See Book button", async () => {
    const btn = getAllByText(renderer, "Ajouter au panier")[0]
    const {getByTestId} = render(
        <BooksContext.Provider value={{ state, dispatch: () =>jest.fn() }}>
          <MemoryRouter>
            <SlidePopup book={books[0]} open={false} closeSlider={closeSlider} />
          </MemoryRouter>
        </BooksContext.Provider>
      ) 
      fireEvent.click(btn)
      expect(getByTestId("modalDialog")).toBeTruthy();
    })
})
