import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { ContactCta } from "./ContactCta"

describe("ContactCta", () => {
  it("renders centered contact button with email link", () => {
    renderWithRouter(<ContactCta />)

    expect(screen.getAllByText("Let's create together").length).toBeGreaterThan(
      0,
    )
    expect(screen.getByRole("link", { name: "Contact me" })).toHaveAttribute(
      "href",
      "mailto:anabakas.art@gmail.com",
    )
  })
})
