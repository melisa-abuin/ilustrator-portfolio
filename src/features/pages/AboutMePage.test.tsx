import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { AboutMePage } from "./AboutMePage"

describe("AboutMePage", () => {
  it("renders section title and body", () => {
    renderWithRouter(<AboutMePage />)

    expect(screen.getByText("About me")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Illustration with intention" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        "I create images that balance narrative, texture, and color. This slot is passed in as children, so you can place any content here.",
      ),
    ).toBeInTheDocument()
  })
})
