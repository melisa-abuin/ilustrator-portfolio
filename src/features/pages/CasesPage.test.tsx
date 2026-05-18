import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { CasesPage } from "./CasesPage"

describe("CasesPage", () => {
  it("renders without crashing", () => {
    const { container } = render(<CasesPage />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
  })
})
