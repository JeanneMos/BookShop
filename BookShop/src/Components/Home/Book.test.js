import React from "react"
import { render, getByAltText, queryByText, cleanup } from "@testing-library/react"
import Book from "./Book"

describe("should render components", () => {
  const book = {
    title: "Book Title",
    price: 105,
    cover: "image_of_the_book.jpg",
  }
  afterAll(cleanup)

  test("should render the component with alt on img", () => {
    const { container } = render(<Book book={book} />)
    const alt = getByAltText(container, book.title)
    expect(alt).toBeTruthy()
  })
  test("should render the component with price", () => {
    const { container } = render(<Book book={book} />)
    const price = queryByText(container, `Prix: ${book.price} €`)
    expect(price).toBeTruthy()
  })
  test("should render the component button Add To Cart", () => {
    const { container } = render(<Book book={book} />)
    const CTA = queryByText(container, "Ajouter au panier")
    expect(CTA).toBeTruthy()
  })
})
