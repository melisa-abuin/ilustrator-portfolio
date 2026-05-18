import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { Hero } from "./Hero"

describe("Hero", () => {
  it("renders title, subtitle and CTA text", () => {
    renderWithRouter(
      <Hero
        bannerImage={{
          id: "1",
          url: "https://example.com/banner.jpg",
          alt: "Banner",
        }}
        title="Featured"
        subtitle="Latest work"
      />,
    )

    expect(
      screen.getByRole("heading", { name: "Featured" }),
    ).toBeInTheDocument()
    expect(screen.getByText("Latest work")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "View My Works" }),
    ).toBeInTheDocument()
  })
})
