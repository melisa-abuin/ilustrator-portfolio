import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterProps {
  links?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({
  links = [
    { label: "About", url: "#about" },
    { label: "Contact", url: "#contact" },
    { label: "Instagram", url: "https://instagram.com" },
    { label: "Twitter", url: "https://twitter.com" },
  ],
}) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.copyright}>
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
