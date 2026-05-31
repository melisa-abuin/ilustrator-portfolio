import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { OverlayImageGallery } from "./OverlayImageGallery"

describe("OverlayImageGallery", () => {
  it("renders up to four gallery items", () => {
    renderWithRouter(
      <OverlayImageGallery
        items={[
          { imageSrc: "1.jpg", imageAlt: "One", text: "Item 1" },
          { imageSrc: "2.jpg", imageAlt: "Two", text: "Item 2" },
          { imageSrc: "3.jpg", imageAlt: "Three", text: "Item 3" },
          { imageSrc: "4.jpg", imageAlt: "Four", text: "Item 4" },
          { imageSrc: "5.jpg", imageAlt: "Five", text: "Item 5" },
        ]}
      />,
    )

    expect(
      screen.getByLabelText("Featured artwork gallery"),
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "One" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Four" })).toBeInTheDocument()
    expect(screen.queryByRole("img", { name: "Five" })).not.toBeInTheDocument()
  })
})
