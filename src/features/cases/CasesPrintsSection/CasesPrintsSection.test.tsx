import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../../test/test-utils"
import { CasesPrintsSection } from "./CasesPrintsSection"

describe("CasesPrintsSection", () => {
  it("renders the intro heading, prints images, and both carousels", () => {
    renderWithRouter(<CasesPrintsSection />)

    expect(screen.getByTestId("cases-prints-section")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Prints and products" }),
    ).toBeInTheDocument()

    expect(
      screen.getByTestId("cases-prints-images").querySelectorAll("img"),
    ).toHaveLength(2)
    expect(
      screen
        .getByTestId("cases-prints-carousel-1-images")
        .querySelectorAll("img"),
    ).toHaveLength(5)
    expect(
      screen
        .getByTestId("cases-prints-carousel-2-images")
        .querySelectorAll("img"),
    ).toHaveLength(5)
  })
})
