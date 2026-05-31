import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CasesPage } from "./CasesPage"

describe("CasesPage", () => {
  it("renders title, subtitle, and masonry image grid", () => {
    render(<CasesPage />)

    expect(
      screen.getByRole("heading", { name: "Editorial" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        "Illustrations and covers created for inTrieste Magazine during a collaboration that lasted more than two years, across editorial covers and illustrations for in-depth articles.",
      ),
    ).toBeInTheDocument()

    const grid = screen.getByTestId("cases-image-grid")
    expect(grid).toBeInTheDocument()
    expect(grid.querySelectorAll("img")).toHaveLength(6)
  })
})
