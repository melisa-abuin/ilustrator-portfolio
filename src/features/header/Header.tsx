import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { toggleLanguage } from "../../utils/language"
import styles from "./Header.module.css"

interface HeaderProps {
  onLanguageChange?: (lang: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const { i18n, t } = useTranslation()

  const handleLanguageToggle = (): void => {
    const newLang = toggleLanguage(i18n.language)
    i18n.changeLanguage(newLang)
    onLanguageChange?.(newLang)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Main navigation">
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
        <button
          className={styles.languageButton}
          onClick={handleLanguageToggle}
          aria-label="Toggle language"
        >
          {i18n.language === "en" ? "IT" : "EN"}
        </button>
      </div>
    </header>
  )
}
