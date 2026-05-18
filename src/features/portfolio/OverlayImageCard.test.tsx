import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { OverlayImageCard } from "./OverlayImageCard"

describe("OverlayImageCard", () => {
  it("renders image and overlay text", () => {
    renderWithRouter(
      <OverlayImageCard
        imageSrc="https://example.com/image.jpg"
        imageAlt="Artwork"
        text="Editorial"
      />,
    )

    expect(screen.getByRole("img", { name: "Artwork" })).toHaveAttribute(
      "src",
      "https://example.com/image.jpg",
    )
    expect(screen.getByText("Editorial")).toBeInTheDocument()
  })
})
