import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { CasesIntroSection } from "./CasesIntroSection"

describe("CasesIntroSection", () => {
  it("renders translated title, subtitle, and overlap images", () => {
    const { container } = renderWithRouter(<CasesIntroSection />)

    expect(
      screen.getByRole("heading", { name: "Editorial" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        "Illustrations and covers created for inTrieste Magazine during a collaboration that lasted more than two years, across editorial covers and illustrations for in-depth articles.",
      ),
    ).toBeInTheDocument()

    const overlapStack = container.querySelector("[aria-hidden='true']")
    expect(overlapStack).toBeInTheDocument()
    expect(overlapStack?.querySelectorAll("img")).toHaveLength(2)
  })
})
