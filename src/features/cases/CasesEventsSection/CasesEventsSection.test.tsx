import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../../test/test-utils"
import { CasesEventsSection } from "./CasesEventsSection"

describe("CasesEventsSection", () => {
  it("renders the intro heading and the event carousels", () => {
    renderWithRouter(<CasesEventsSection />)

    expect(screen.getByTestId("cases-events-section")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Events and festivals" }),
    ).toBeInTheDocument()
    expect(screen.getByTestId("cases-event-carousels")).toBeInTheDocument()
  })
})
