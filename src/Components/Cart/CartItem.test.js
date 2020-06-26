import React from "react"
import {
  render,
  getByText,
  getByAltText,
  queryByText,
} from "@testing-library/react"
import CartItem from "./CartItem"

const book = {
  title: "Book 1",
  cover: "img.jpg",
  price: 25,
  isbn: "SDFSlfsklk",
}
const clickToRemove = jest.fn()
describe("should render components", () => {
  test("should render the CartItem with a title, a price, an img and a button to delete the article if CART element", () => {
    const { container } = render(
      <CartItem item={book} canDelete removeItem={clickToRemove} />
    )
    const img = getByAltText(container, book.title)
    const title = getByText(container, book.title)
    const price = getByText(container, `Prix: ${book.price}€`)
    const btn = getByText(container, "Supprimer l'article")
    expect(img).toBeTruthy()
    expect(title).toBeTruthy()
    expect(price).toBeTruthy()
    expect(btn).toBeTruthy()
  })
  test("should render the CartItem with a title, a price, an img and no button to delete if BOOK element", () => {
    const { container } = render(
      <CartItem item={book} canRemove={false} removeItem={clickToRemove} />
    )
    const img = getByAltText(container, book.title)
    const title = getByText(container, book.title)
    const price = getByText(container, `Prix: ${book.price}€`)
    expect(img).toBeTruthy()
    expect(title).toBeTruthy()
    expect(price).toBeTruthy()
    expect(
      queryByText(container, "Supprimer l'article")
    ).not.toBeInTheDocument()
  })
})
