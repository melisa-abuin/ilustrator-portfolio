import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { CasesEditorialSection } from "./CasesEditorialSection"

describe("CasesEditorialSection", () => {
  it("renders the intro heading and image grid", () => {
    renderWithRouter(<CasesEditorialSection />)

    expect(screen.getByTestId("cases-editorial-section")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Editorial" }),
    ).toBeInTheDocument()

    const grid = screen.getByTestId("cases-image-grid-editorial")
    expect(grid).toBeInTheDocument()
    expect(grid.querySelectorAll("img")).toHaveLength(6)
  })
})
