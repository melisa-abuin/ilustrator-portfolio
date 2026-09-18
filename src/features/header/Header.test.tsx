import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { renderWithRouter } from "../../test/test-utils"
import { Header } from "./Header"

describe("Header", () => {
  it("renders navigation links and marks active route", () => {
    renderWithRouter(<Header />, { route: "/cases" })

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Cases" })).toHaveAttribute(
      "aria-current",
      "page",
    )
    expect(screen.getByRole("link", { name: "About Me" })).toBeInTheDocument()
  })

  it("switches language to Italian and notifies callback", async () => {
    const user = userEvent.setup()
    const onLanguageChange = vi.fn()

    renderWithRouter(<Header onLanguageChange={onLanguageChange} />)

    await user.click(screen.getByRole("button", { name: "Switch to Italian" }))

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Progetti" })).toBeInTheDocument()
    })

    expect(onLanguageChange).toHaveBeenCalledWith("it")
    expect(
      screen.getByRole("button", { name: "Passa all'italiano" }),
    ).toHaveAttribute("aria-pressed", "true")
  })
})
