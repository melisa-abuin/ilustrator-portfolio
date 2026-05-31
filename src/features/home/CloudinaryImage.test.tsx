import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { CloudinaryImage } from "./CloudinaryImage"

vi.mock("../../utils/cloudinary", () => ({
  getCloudinaryImage: vi.fn(() => ({
    toURL: () => "https://res.cloudinary.com/test/image/upload/sample.jpg",
  })),
}))

vi.mock("@cloudinary/react", () => ({
  AdvancedImage: ({
    alt,
    className,
    style,
  }: {
    alt: string
    className?: string
    style?: React.CSSProperties
  }) => (
    <img
      data-testid="cloudinary-img"
      alt={alt}
      className={className}
      style={style}
    />
  ),
}))

import React from "react"

describe("CloudinaryImage", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders AdvancedImage when publicId is provided", () => {
    render(<CloudinaryImage publicId="editorial_crdbvi" alt="Editorial" />)

    expect(screen.getByTestId("cloudinary-img")).toBeInTheDocument()
    expect(screen.getByAltText("Editorial")).toBeInTheDocument()
  })

  it("renders a plain img when only imageSrc is provided", () => {
    render(
      <CloudinaryImage
        imageSrc="https://example.com/image.jpg"
        alt="Fallback"
      />,
    )

    const img = screen.getByRole("img", { name: "Fallback" })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg")
    expect(img).not.toHaveAttribute("data-testid", "cloudinary-img")
  })

  it("applies inline size when no className is passed", () => {
    render(
      <CloudinaryImage
        imageSrc="https://example.com/image.jpg"
        alt="Sized"
        width={300}
        height={400}
      />,
    )

    const img = screen.getByRole("img", { name: "Sized" })
    expect(img).toHaveStyle({ width: "300px", height: "400px" })
  })

  it("does not apply inline size when className is passed", () => {
    render(
      <CloudinaryImage
        imageSrc="https://example.com/image.jpg"
        alt="Classed"
        className="my-class"
        width={300}
        height={400}
      />,
    )

    const img = screen.getByRole("img", { name: "Classed" })
    expect(img).toHaveClass("my-class")
    expect(img).not.toHaveStyle({ width: "300px" })
  })

  it("prefers publicId over imageSrc when both are provided", () => {
    render(
      <CloudinaryImage
        publicId="editorial_crdbvi"
        imageSrc="https://example.com/image.jpg"
        alt="Priority"
      />,
    )

    expect(screen.getByTestId("cloudinary-img")).toBeInTheDocument()
  })
})
