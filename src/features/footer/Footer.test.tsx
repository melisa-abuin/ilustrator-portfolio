import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "./Footer"
import { renderWithRouter } from "../../test/test-utils"

describe("Footer", () => {
  it("renders social links and translated copyright", () => {
    renderWithRouter(<Footer />)

    expect(screen.getByLabelText("WhatsApp")).toHaveAttribute(
      "href",
      "https://wa.me/",
    )
    expect(screen.getByLabelText("Instagram")).toHaveAttribute(
      "href",
      "https://instagram.com",
    )
    expect(screen.getByLabelText("Facebook")).toHaveAttribute(
      "href",
      "https://facebook.com",
    )

    expect(
      screen.getByText("© 2026 Illustrator Portfolio. All rights reserved."),
    ).toBeInTheDocument()
  })
})
