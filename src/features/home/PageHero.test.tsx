import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { PageHero } from "./PageHero"

describe("PageHero", () => {
  it("renders title, subtitle and image", () => {
    renderWithRouter(
      <PageHero
        title="My Portfolio"
        subtitle="Visual storytelling"
        imageSrc="https://example.com/hero.jpg"
        imageAlt="Hero"
      />,
    )

    expect(
      screen.getByRole("heading", { name: "My Portfolio" }),
    ).toBeInTheDocument()
    expect(screen.getByText("Visual storytelling")).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Hero" })).toHaveAttribute(
      "src",
      "https://example.com/hero.jpg",
    )
  })
})
