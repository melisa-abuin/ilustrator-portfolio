import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { AboutHeroSection } from "./AboutHeroSection"

describe("AboutHeroSection", () => {
  it("renders translated title and image placeholder area", () => {
    renderWithRouter(<AboutHeroSection />)

    expect(
      screen.getByRole("heading", { name: "Who I am" }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", { name: "Image area" }),
    ).toBeInTheDocument()
  })
})
