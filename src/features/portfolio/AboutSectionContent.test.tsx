import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { AboutSectionContent } from "./AboutSectionContent"

describe("AboutSectionContent", () => {
  it("renders translated body and list items", () => {
    renderWithRouter(<AboutSectionContent />)

    expect(
      screen.getByText(
        "I collaborate with magazines, agencies, and events in Friuli-Venezia Giulia since 2023.",
      ),
    ).toBeInTheDocument()

    expect(screen.getByText("editorial")).toBeInTheDocument()
    expect(screen.getByText("for events and festivals")).toBeInTheDocument()
    expect(screen.getByText("for brands and campaigns")).toBeInTheDocument()
  })

  it("renders custom translation keys", () => {
    renderWithRouter(
      <AboutSectionContent
        bodyKey="home.extraSection1.body"
        pointKeys={["gallery.item1", "gallery.item2"]}
      />,
    )

    expect(
      screen.getByText(
        "Each project starts from the story, then evolves through composition, rhythm, and expressive color choices.",
      ),
    ).toBeInTheDocument()
    expect(screen.getByText("Editorial")).toBeInTheDocument()
    expect(screen.getByText("Festival events")).toBeInTheDocument()
  })
})
