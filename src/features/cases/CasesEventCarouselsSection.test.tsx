import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { CasesEventCarouselsSection } from "./CasesEventCarouselsSection"

describe("CasesEventCarouselsSection", () => {
  it("renders three carousel rows with their images, hidden from assistive tech", () => {
    renderWithRouter(<CasesEventCarouselsSection />)

    expect(screen.getByTestId("cases-event-carousels")).toHaveAttribute(
      "aria-hidden",
      "true",
    )

    expect(
      screen.getByTestId("cases-event-carousel-1").querySelectorAll("img"),
    ).toHaveLength(2)
    expect(
      screen.getByTestId("cases-event-carousel-2").querySelectorAll("img"),
    ).toHaveLength(3)
    expect(
      screen.getByTestId("cases-event-carousel-3").querySelectorAll("img"),
    ).toHaveLength(3)
  })
})
