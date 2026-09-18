import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { CasesConceptualSection } from "./CasesConceptualSection"

describe("CasesConceptualSection", () => {
  it("renders the conceptual heading with no images", () => {
    renderWithRouter(<CasesConceptualSection />)

    const section = screen.getByTestId("cases-conceptual-section")
    expect(section).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Conceptual projects" }),
    ).toBeInTheDocument()
    expect(section.querySelectorAll("img")).toHaveLength(0)
  })
})
