import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { renderWithRouter } from "../../../test/test-utils"
import { CasesPrintsCarousel } from "./CasesPrintsCarousel"

const images = ["one_1_abc123", "two_1_def456", "three_1_ghi789"] as const

describe("CasesPrintsCarousel", () => {
  const getOrder = (testId: string) =>
    Array.from(
      screen.getByTestId(`${testId}-images`).querySelectorAll("img"),
    ).map((img) => img.getAttribute("src"))

  // the Cloudinary image src is populated asynchronously after mount
  const waitForLoadedOrder = (testId: string) =>
    waitFor(() => {
      const order = getOrder(testId)
      expect(order.every((src) => src !== null)).toBe(true)
      return order
    })

  it("renders all images", () => {
    renderWithRouter(<CasesPrintsCarousel images={images} testId="carousel" />)

    expect(getOrder("carousel")).toHaveLength(3)
  })

  it("rotates images forward and backward via the next/previous buttons", async () => {
    const user = userEvent.setup()
    renderWithRouter(<CasesPrintsCarousel images={images} testId="carousel" />)

    const initialOrder = await waitForLoadedOrder("carousel")

    await user.click(
      screen.getByRole("button", { name: "Scroll prints carousel right" }),
    )
    await waitFor(() => {
      expect(getOrder("carousel")).toEqual([
        initialOrder[1],
        initialOrder[2],
        initialOrder[0],
      ])
    })

    await user.click(
      screen.getByRole("button", { name: "Scroll prints carousel left" }),
    )
    await waitFor(() => {
      expect(getOrder("carousel")).toEqual(initialOrder)
    })
  })
})
