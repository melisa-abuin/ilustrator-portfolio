import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./FooterIcons"

describe("FooterIcons", () => {
  it("renders WhatsApp icon", () => {
    const { container } = render(<WhatsAppIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders Instagram icon", () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders Facebook icon", () => {
    const { container } = render(<FacebookIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
