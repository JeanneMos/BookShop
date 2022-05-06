import React from "react"
import { render } from "@testing-library/react"
import ConfirmationPage from "./ConfirmationPage"

test("should render header and main sections", () => {
  const { container } = render(<ConfirmationPage />)
  const confirmation = container.querySelector(
    '[data-testid="confirmationMessage"]'
  )
  expect(confirmation).toBeInTheDocument()
})
