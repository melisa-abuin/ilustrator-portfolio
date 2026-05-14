import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./i18n/config"
import "./index.css"
import { App } from "./App"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found in HTML")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
