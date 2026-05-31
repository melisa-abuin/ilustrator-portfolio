import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { CasesImageGridSection } from "./CasesImageGridSection"

describe("CasesImageGridSection", () => {
  it("renders the grid container and all six images", () => {
    renderWithRouter(<CasesImageGridSection />)

    const grid = screen.getByTestId("cases-image-grid")
    expect(grid).toBeInTheDocument()
    expect(grid).toHaveAttribute("aria-hidden", "true")
    expect(grid.querySelectorAll("img")).toHaveLength(6)
  })
})
