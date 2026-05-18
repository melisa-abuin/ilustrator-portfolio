import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import { App } from "./App"

describe("App", () => {
  it("renders home route for unknown paths", () => {
    render(
      <MemoryRouter
        initialEntries={["/unknown-route"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Illustrations Portfolio" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText("©2026 Illustrator Portfolio. | Anastasia Bakastikova"),
    ).toBeInTheDocument()
  })
})
