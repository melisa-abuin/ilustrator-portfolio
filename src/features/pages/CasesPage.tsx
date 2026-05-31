import { useTranslation } from "react-i18next"
import { CloudinaryImage } from "../portfolio/CloudinaryImage"
import styles from "./CasesPage.module.css"

export const CasesPage = () => {
  const { t } = useTranslation()
  const imageTiles = [
    { publicId: "editorial_crdbvi", variant: "tileWide" },
    { publicId: "eventi_c4jsl3", variant: "tileNarrow" },
    { publicId: "marca_zxpz35", variant: "tileMedium" },
    { publicId: "stampe_obifx1", variant: "tileWide" },
    { publicId: "editorial_crdbvi", variant: "tileMedium" },
    { publicId: "eventi_c4jsl3", variant: "tileNarrow" },
  ] as const

  return (
    <section className={styles.section} aria-label={t("cases.sectionLabel")}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t("cases.title")}</h1>
        <p className={styles.subtitle}>{t("cases.subtitle")}</p>
        <div className={styles.overlapStack} aria-hidden="true">
          <CloudinaryImage
            publicId="editorial_crdbvi"
            alt=""
            className={`${styles.overlapCardTop} ${styles.tileImage}`}
          />
          <CloudinaryImage
            publicId="marca_zxpz35"
            alt=""
            className={`${styles.overlapCardBottom} ${styles.tileImage}`}
          />
        </div>
      </div>
      <div
        className={styles.imageGrid}
        aria-hidden="true"
        data-testid="cases-image-grid"
      >
        {imageTiles.map((tile, index) => (
          <div
            key={`${tile.publicId}-${index}`}
            className={`${styles.tile} ${styles[tile.variant]}`}
          >
            <CloudinaryImage
              publicId={tile.publicId}
              alt=""
              className={styles.tileImage}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
