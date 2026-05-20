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
        "I draw inspiration from the Italy that is lived every day — the morning light, the scent of coffee, a sky changing color in the late afternoon. In my work, I aim to capture the moment: that fraction of a second when a scene still has warmth, movement, life. I live and work in Friuli-Venezia Giulia, a region that has taught me that beauty doesn't need to be loud.",
      ),
    ).toBeInTheDocument()
    expect(screen.getByText("Editorial")).toBeInTheDocument()
    expect(screen.getByText("Festival and events")).toBeInTheDocument()
  })

  it("renders links when point href keys are provided", () => {
    renderWithRouter(
      <AboutSectionContent
        bodyKey="home.extraSection2.body"
        pointKeys={[
          "home.extraSection2.point1",
          "home.extraSection2.point2",
          "home.extraSection2.point3",
          "home.extraSection2.point4",
        ]}
      />,
    )

    expect(
      screen.getByText("EMAIL: anabakas.art@gmail.com").closest("a"),
    ).toHaveAttribute("href", "mailto:anabakas.art@gmail.com")
    expect(
      screen.getByText("BEHANCE: behance.net/anabakas").closest("a"),
    ).toHaveAttribute("href", "https://www.behance.net/anabakas")
    expect(
      screen.getByText("INSTAGRAM: @illustrator_anabakas").closest("a"),
    ).toHaveAttribute("href", "https://www.instagram.com/illustrator_anabakas")
    expect(
      screen.getByText("WhatsAPP: click here").closest("a"),
    ).toHaveAttribute("href", "https://wa.me/393331234567")
  })
})
