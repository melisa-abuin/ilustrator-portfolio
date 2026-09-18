import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

interface HeaderProps {
  onLanguageChange?: (lang: string) => void
}

export const Header = ({ onLanguageChange }: HeaderProps) => {
  const { i18n, t } = useTranslation()

  const activeLanguage = i18n.resolvedLanguage ?? i18n.language

  const handleLanguageChange = (language: "it" | "en"): void => {
    i18n.changeLanguage(language)
    onLanguageChange?.(language)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label={t("header.mainNavigation")}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            to="/"
            end
          >
            {t("header.home")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            to="/cases"
          >
            {t("header.cases")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            to="/about"
          >
            {t("header.aboutMe")}
          </NavLink>
        </nav>
        <div
          className={styles.languageSwitcher}
          role="group"
          aria-label={t("header.languageSwitcher")}
        >
          <button
            className={`${styles.languageButton} ${activeLanguage.startsWith("it") ? styles.languageButtonActive : ""}`}
            onClick={() => handleLanguageChange("it")}
            aria-label={t("header.switchToItalian")}
            aria-pressed={activeLanguage.startsWith("it")}
            type="button"
          >
            {t("header.languageIt")}
          </button>
          <span className={styles.languageDivider} aria-hidden="true">
            |
          </span>
          <button
            className={`${styles.languageButton} ${activeLanguage.startsWith("en") ? styles.languageButtonActive : ""}`}
            onClick={() => handleLanguageChange("en")}
            aria-label={t("header.switchToEnglish")}
            aria-pressed={activeLanguage.startsWith("en")}
            type="button"
          >
            {t("header.languageEn")}
          </button>
        </div>
      </div>
    </header>
  )
}
