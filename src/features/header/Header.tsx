import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../../utils/language";
import styles from "./Header.module.css";

interface HeaderProps {
  onLanguageChange?: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onLanguageChange }) => {
  const { i18n, t } = useTranslation();

  const handleLanguageToggle = (): void => {
    const newLang = toggleLanguage(i18n.language);
    i18n.changeLanguage(newLang);
    onLanguageChange?.(newLang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.title}>Portfolio</h1>
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.navLink} href="#home">
            {t("header.home")}
          </a>
          <a className={styles.navLink} href="#cases">
            {t("header.cases")}
          </a>
          <a className={styles.navLink} href="#about">
            {t("header.aboutMe")}
          </a>
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
  );
};
