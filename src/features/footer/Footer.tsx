import { useTranslation } from "react-i18next"
import { BehanceIcon, InstagramIcon, WhatsAppIcon } from "./FooterIcons"
import styles from "./Footer.module.css"

export const Footer = () => {
  const { t } = useTranslation()

  const socialLinks = [
    {
      href: "https://wa.me/393383178245",
      label: t("footer.whatsapp"),
      icon: <WhatsAppIcon />,
    },
    {
      href: "https://instagram.com/illustrator_anabakas",
      label: t("footer.instagram"),
      icon: <InstagramIcon />,
    },
    {
      href: "https://www.behance.net/anabakas",
      label: t("footer.behance"),
      icon: <BehanceIcon />,
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>{t("footer.copyright")}</p>
          </div>
          <ul
            className={styles.socialLinks}
            aria-label={t("footer.socialLinksLabel")}
          >
            {socialLinks.map((item) => (
              <li key={item.label} className={styles.socialItem}>
                <a
                  href={item.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
