import React from "react"
import { render, getByTestId,cleanup } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { BooksContext } from "../../Context/bookContext"
import Header from "./Header"

describe("should render components", () => {
  const books = [
    {
      title: "Book 1",
      cover: "img.jpg",
      price: 25,
      isbn: "SDFSlfsklk",
      synopsis: ["Blabla", "Blabla"],
    },
    {
      title: "Book 2",
      cover: "img2.jpg",
      price: 35,
      isbn: "SDFSlfEklk",
      synopsis: ["Blabla", "Blabla"],
    },
    {
      title: "Henri PPP",
      cover: "img3.jpg",
      price: 35,
      isbn: "SDFSlfklk",
      synopsis: ["Blabla", "Blabla"],
    },
  ]
  const state = {
    cartItems: books,
  }
  afterAll(cleanup)

  test("should render the Header with 3 articles in cart link", () => {
    const { container } = render(
      <BooksContext.Provider value={{ state }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </BooksContext.Provider>
    )
    const itemsNumber = getByTestId(container, "cartItemsSpan")
    expect(itemsNumber).toBeTruthy()
    expect(itemsNumber.textContent).toBe("3 articles")
  })
})
