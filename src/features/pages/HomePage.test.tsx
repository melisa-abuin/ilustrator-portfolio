import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { HomePage } from "./HomePage"

describe("HomePage", () => {
  it("renders hero, about section and gallery content", () => {
    renderWithRouter(<HomePage />)

    expect(
      screen.getByRole("heading", { name: "Illustrations Portfolio" }),
    ).toBeInTheDocument()
    expect(screen.getByText("Who am I")).toBeInTheDocument()

    expect(screen.getByText("Editorial")).toBeInTheDocument()
    expect(screen.getByText("Festival events")).toBeInTheDocument()
    expect(screen.getByText("Brand illustration")).toBeInTheDocument()
    expect(screen.getByText("Product prints")).toBeInTheDocument()
  })
})
