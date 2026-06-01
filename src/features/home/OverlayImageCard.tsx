import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./OverlayImageCard.module.css"

interface OverlayImageCardProps {
  imageSrc?: string
  publicId?: string
  imageAlt: string
  text: string
}

export const OverlayImageCard = ({
  imageSrc,
  publicId,
  imageAlt,
  text,
}: OverlayImageCardProps) => {
  return (
    <article className={styles.card}>
      <CloudinaryImage
        className={styles.image}
        publicId={publicId}
        imageSrc={imageSrc}
        alt={imageAlt}
      />
      <div className={styles.overlayText}>{text}</div>
    </article>
  )
}
