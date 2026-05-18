import { useTranslation } from "react-i18next"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./FooterIcons"
import styles from "./Footer.module.css"

export const Footer = () => {
  const { t } = useTranslation()

  const socialLinks = [
    {
      href: "https://wa.me/",
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <InstagramIcon />,
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: <FacebookIcon />,
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>{t("footer.copyright")}</p>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
