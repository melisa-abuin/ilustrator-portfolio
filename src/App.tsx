import { Navigate, Route, Routes } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Header } from "./features/header/Header"
import { HomePage } from "./features/pages/HomePage"
import { CasesPage } from "./features/pages/CasesPage"
import { AboutMePage } from "./features/pages/AboutMePage"
import { Footer } from "./features/footer/Footer"
import styles from "./App.module.css"
import "./utils/cloudinary"

export const App = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main-content">
        {t("a11y.skipToMain")}
      </a>
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
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
