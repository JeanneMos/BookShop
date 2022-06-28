import React from "react"
import {
  render,
  fireEvent,
  cleanup,
  getByText,
  waitForElement,
} from "@testing-library/react"
import { BooksContext } from "../Context/bookContext"
import { MemoryRouter } from "react-router-dom"
import Cart from "./Cart"

const books = [
  { title: "Book 1", cover: "img.jpg", price: 25, isbn: "SDFSlfsklk" },
  {
    title: "Book 2",
    cover: "img2.jpg",
    price: 35,
    isbn: "SDFSlfEklk",
  },
  {
    title: "Henri PPP",
    cover: "img3.jpg",
    price: 35,
    isbn: "SDFSlfklk",
  },
]
const state = {
  cartItems: books,
}
let content = null
beforeEach(() => {
  const { container } = render(
    <BooksContext.Provider value={{ state }}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </BooksContext.Provider>
  )
  content = container
})
afterEach(() => {
  content = null
  cleanup()
})
afterAll(cleanup)
describe("should render components", () => {
  test("should render the Cart with 3 items", () => {
    const items = content.querySelectorAll("article")
    expect(items).toHaveLength(3)
  })
  test("should have an initial price and a button to recalculate price", () => {
    const initialPrice = content.querySelector(`[data-testid="initialPrice"]`)
    expect(initialPrice.textContent).toBe("95€")

    const btn = getByText(content, "Appliquer la réduction")
    expect(btn).toBeTruthy()
  })
  test("should calculate a new price", async () => {
    const initialPrice = content.querySelector(`[data-testid="initialPrice"]`)
    expect(initialPrice.textContent).toBe("95€")
    const btn = getByText(content, "Appliquer la réduction")
    fireEvent.click(btn)
    const newPrice = await waitForElement(
      () => content.querySelector('[data-testid="newPrice"]'),
      { content }
    )
    expect(newPrice).toBeTruthy()
  })
})
