import { CloudinaryImage } from "./CloudinaryImage"
import styles from "./PageHero.module.css"

interface PageHeroProps {
  title: string
  subtitle: string
  imageSrc?: string
  cloudinaryPublicId?: string
  imageAlt?: string
}

export const PageHero = ({
  title,
  subtitle,
  imageSrc,
  cloudinaryPublicId,
  imageAlt = "",
}: PageHeroProps) => {
  return (
    <section className={styles.pageHero}>
      <div className={styles.contentRow}>
        <div className={styles.textSide}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
        <div className={styles.imageSide}>
          <div className={styles.container}>
            <div className={styles.decorSquares} aria-hidden="true">
              <span className={`${styles.square} ${styles.squareTopLeft}`} />
              <span className={`${styles.square} ${styles.squareTopRight}`} />
              <span className={`${styles.square} ${styles.squareBottomLeft}`} />
              <span
                className={`${styles.square} ${styles.squareBottomRight}`}
              />
            </div>
            <div className={styles.imageWrapper}>
              <CloudinaryImage
                publicId={cloudinaryPublicId}
                imageSrc={imageSrc}
                alt={imageAlt}
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
