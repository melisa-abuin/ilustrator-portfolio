import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import "../i18n/config"
import i18n from "../i18n/config"
import { afterEach, beforeEach } from "vitest"

afterEach(() => {
  cleanup()
})

beforeEach(async () => {
  await i18n.changeLanguage("en")
})
