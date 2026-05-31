import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "./Footer"
import { renderWithRouter } from "../../test/test-utils"

describe("Footer", () => {
  it("renders social links and translated copyright", () => {
    renderWithRouter(<Footer />)

    expect(screen.getByLabelText("WhatsApp")).toHaveAttribute(
      "href",
      "https://wa.me/393383178245",
    )
    expect(screen.getByLabelText("Instagram")).toHaveAttribute(
      "href",
      "https://instagram.com/illustrator_anabakas",
    )
    expect(screen.getByLabelText("Behance")).toHaveAttribute(
      "href",
      "https://www.behance.net/anabakas",
    )

    expect(
      screen.getByText("©2026 Illustrator Portfolio. | Anastasia Bakastikova"),
    ).toBeInTheDocument()
  })
})
