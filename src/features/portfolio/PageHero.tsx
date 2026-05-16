import styles from "./PageHero.module.css"

interface PageHeroProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt?: string
}

export const PageHero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) => {
  return (
    <section className={styles.pageHero}>
      <div className={styles.textSide}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.decorSquares} aria-hidden="true">
          <span className={`${styles.square} ${styles.squareTopLeft}`} />
          <span className={`${styles.square} ${styles.squareTopRight}`} />
          <span className={`${styles.square} ${styles.squareBottomLeft}`} />
          <span className={`${styles.square} ${styles.squareBottomRight}`} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  )
}
