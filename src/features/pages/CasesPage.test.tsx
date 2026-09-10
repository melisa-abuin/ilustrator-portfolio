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

    expect(screen.getAllByRole("heading")).toHaveLength(5)
    expect(screen.getByTestId("cases-editorial-section")).toBeInTheDocument()
    expect(screen.getByTestId("cases-events-section")).toBeInTheDocument()
    expect(screen.getByTestId("cases-brand-section")).toBeInTheDocument()
    expect(screen.getByTestId("cases-conceptual-section")).toBeInTheDocument()
    expect(screen.getByTestId("cases-prints-section")).toBeInTheDocument()

    const grids = screen.getAllByTestId(/cases-image-grid-/)
    expect(grids).toHaveLength(1)
    expect(grids[0].querySelectorAll("img")).toHaveLength(6)

    const eventCarousels = screen.getByTestId("cases-event-carousels")
    expect(
      eventCarousels.querySelectorAll("[data-testid^='cases-event-carousel-']"),
    ).toHaveLength(3)
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
