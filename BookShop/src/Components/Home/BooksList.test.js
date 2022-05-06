import React from "react"
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  getAllByText,
} from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { act } from "react-dom/test-utils"
import BooksList from "./BooksList"
import SlidePopup from "../SidePanel/SlidePopup"
import Search from "../Search/Search"
import { BooksProvider } from "../../Context/bookContext"
import { globalSearch } from "../../Tests/constants"
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
    title: "Henri PPP",
    cover: "img3.jpg",
    price: 35,
    isbn: "SDFSlfklk",
    synopsis: ["Blab&la", "Bladbla"],
  },
]

describe("should render components", () => {
  let renderer = null
  const bookSearch = jest.fn()
  const closeSlider = jest.fn()
  beforeEach(() => {
    const { container } = render(
      <BooksProvider>
        <BooksList books={books}>
          <Search bookSearch={bookSearch} />
        </BooksList>
      </BooksProvider>
    )
    renderer = container
  })
  afterEach(() => {
    renderer = null
    cleanup()
  })
  test("should render the global search", () => {
    const globaSearch = renderer.querySelector(
      `[data-testid="${globalSearch}"]`
    )
    expect(globaSearch).toBeTruthy()
  })
  test("should render a list of books", () => {
    const list = renderer.querySelectorAll("article")
    expect(list).toHaveLength(3)
  })
  test("should show a slider if click on add to cart button", async () => {
    const btn = getAllByText(renderer, "Ajouter au panier")[0]
    const Slider = render(
      <Router>
        <SlidePopup cartItems={books} open={false} closeSlider={closeSlider} />
      </Router>
    )
    act(() => {
      fireEvent.click(btn)
    })
    expect(Slider).toBeTruthy()
  })
  test("should show a slider if click on See Book button", async () => {
    const btn = getAllByText(renderer, "Ajouter au panier")[0]
    const Slider = render(
      <SlidePopup book={books[0]} open={false} closeSlider={closeSlider} />
    )
    act(() => {
      fireEvent.click(btn)
    })
    expect(Slider).toBeTruthy()
  })

  test("should show results when searching", async () => {
    const input = renderer.querySelector("input")
    fireEvent.change(input, { target: { value: "book 2" } })
    const results = await waitForElement(
      () => renderer.querySelector('[data-testid="resultArray"]'),
      { renderer }
    )
    expect(results).toBeTruthy()
    fireEvent.change(input, { target: { value: "Book" } })
    expect(results.querySelectorAll("article")).toHaveLength(2)
  })
})
