import React from "react"
import { render, getByTestId } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
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

  test("should render the Header with 3 articles in cart link", () => {
    const { container } = render(
      <BooksContext.Provider value={{ state }}>
        <Router>
          <Header />
        </Router>
      </BooksContext.Provider>
    )
    const span = getByTestId(container, "cartItemsSpan")
    expect(span).toBeTruthy()
    expect(span.textContent).toBe("3 articles")
  })
})
