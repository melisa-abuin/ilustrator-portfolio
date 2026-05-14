import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "./features/header/Header"
import { HomePage } from "./features/pages/HomePage"
import { CasesPage } from "./features/pages/CasesPage"
import { AboutMePage } from "./features/pages/AboutMePage"
import { Footer } from "./features/footer/Footer"
import styles from "./App.module.css"

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
