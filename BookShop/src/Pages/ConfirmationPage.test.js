import React from "react"
import { render } from "@testing-library/react"
import ConfirmationPage from "./ConfirmationPage"
import { BooksContext } from "../Context/bookContext"
import { MemoryRouter } from "react-router-dom"

const state = {
  cartItems: [],
}
describe("Confirmation page", () => {
  test("should render confirmation message on confirmation page", () => {
    const { container } = render(
      <BooksContext.Provider value={{ state }}>
        <MemoryRouter>
          <ConfirmationPage />
        </MemoryRouter>
      </BooksContext.Provider>)
    const confirmation = container.querySelector(
      '[data-testid="confirmationMessage"]'
    )
    expect(confirmation).toBeInTheDocument()
  })
})

