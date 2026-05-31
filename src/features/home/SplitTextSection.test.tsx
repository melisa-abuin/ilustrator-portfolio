import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { SplitTextSection } from "./SplitTextSection"

describe("SplitTextSection", () => {
  it("renders title and section name", () => {
    renderWithRouter(
      <SplitTextSection sectionName="About" title="Illustration">
        <p>Custom content</p>
      </SplitTextSection>,
    )

    expect(screen.getByText("About")).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Illustration" }),
    ).toBeInTheDocument()
    expect(screen.getByText("Custom content")).toBeInTheDocument()
    expect(screen.getByRole("separator")).toBeInTheDocument()
  })

  it("does not render children container when children are missing", () => {
    renderWithRouter(
      <SplitTextSection sectionName="About" title="Illustration" />,
    )

    expect(screen.queryByText("Custom content")).not.toBeInTheDocument()
    expect(screen.queryByRole("separator")).not.toBeInTheDocument()
  })
})
