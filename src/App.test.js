import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("should render header and main sections", () => {
  const { container } = render(<App />)
  const header = container.querySelector("header")
  const main = container.querySelector("main")
  expect(header).toBeInTheDocument()
  expect(main).toBeInTheDocument()
})
