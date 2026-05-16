import styles from "./OverlayImageCard.module.css"

interface OverlayImageCardProps {
  imageSrc: string
  imageAlt: string
  text: string
}

export const OverlayImageCard = ({
  imageSrc,
  imageAlt,
  text,
}: OverlayImageCardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      <div className={styles.overlayText}>{text}</div>
    </article>
  )
}
