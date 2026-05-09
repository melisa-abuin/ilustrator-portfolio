import { useTranslation } from "react-i18next";
import type { CMSImage } from "../../utils/types";
import styles from "./Hero.module.css";

interface HeroProps {
  bannerImage: CMSImage;
  title: string;
  subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({ bannerImage, title, subtitle }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div
        className={styles.bannerContainer}
        style={{
          backgroundImage: `url(${bannerImage.url})`,
        }}
      >
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <button className={styles.ctaButton}>
            {t("portfolio.viewWorks")}
          </button>
        </div>
      </div>
    </section>
  );
};
