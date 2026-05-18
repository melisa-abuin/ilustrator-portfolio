import type { ReactElement } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

interface RenderWithRouterOptions {
  route?: string
}

export const renderWithRouter = (
  ui: ReactElement,
  { route = "/" }: RenderWithRouterOptions = {},
) => {
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {ui}
    </MemoryRouter>,
  )
}
