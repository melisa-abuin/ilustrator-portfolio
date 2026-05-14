import { useEffect, useState } from "react"
import { Header } from "./features/header/Header"
import { HomePage } from "./features/pages/HomePage"
import { CasesPage } from "./features/pages/CasesPage"
import { AboutMePage } from "./features/pages/AboutMePage"
import styles from "./App.module.css"

type Page = "home" | "cases" | "about"

const getPageFromHash = (hash: string): Page => {
  if (hash === "#cases") {
    return "cases"
  }

  if (hash === "#about") {
    return "about"
  }

  return "home"
}

export const App: React.FC = () => {
  const [page, setPage] = useState<Page>(() =>
    getPageFromHash(window.location.hash),
  )

  useEffect(() => {
    const handleHashChange = (): void => {
      setPage(getPageFromHash(window.location.hash))
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const renderPage = (): React.ReactElement => {
    switch (page) {
      case "cases":
        return <CasesPage />
      case "about":
        return <AboutMePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{renderPage()}</main>
    </div>
  )
}
