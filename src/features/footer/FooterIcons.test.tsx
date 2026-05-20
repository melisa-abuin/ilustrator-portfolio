import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BehanceIcon, InstagramIcon, WhatsAppIcon } from "./FooterIcons"

describe("FooterIcons", () => {
  it("renders WhatsApp icon", () => {
    const { container } = render(<WhatsAppIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders Instagram icon", () => {
    const { container } = render(<InstagramIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders Behance icon", () => {
    const { container } = render(<BehanceIcon />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
