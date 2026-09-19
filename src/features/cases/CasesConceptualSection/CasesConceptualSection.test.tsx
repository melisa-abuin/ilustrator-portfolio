import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../../test/test-utils"
import { CasesConceptualSection } from "./CasesConceptualSection"

describe("CasesConceptualSection", () => {
  it("renders the conceptual heading with an 8-image gallery", () => {
    renderWithRouter(<CasesConceptualSection />)

    const section = screen.getByTestId("cases-conceptual-section")
    expect(section).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Conceptual projects" }),
    ).toBeInTheDocument()
    expect(screen.getByTestId("cases-conceptual-gallery")).toBeInTheDocument()
    expect(section.querySelectorAll("img")).toHaveLength(8)
  })
})
