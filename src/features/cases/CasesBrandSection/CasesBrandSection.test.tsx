import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../../test/test-utils"
import { CasesBrandSection } from "./CasesBrandSection"

describe("CasesBrandSection", () => {
  it("renders the intro heading and brand image gallery", () => {
    renderWithRouter(<CasesBrandSection />)

    expect(screen.getByTestId("cases-brand-section")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Brand illustration" }),
    ).toBeInTheDocument()

    const gallery = screen.getByTestId("cases-brand-gallery")
    expect(gallery.querySelectorAll("img")).toHaveLength(5)
  })
})
