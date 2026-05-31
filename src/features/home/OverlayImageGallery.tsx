import { OverlayImageCard } from "./OverlayImageCard"
import styles from "./OverlayImageGallery.module.css"

interface OverlayImageGalleryItem {
  imageSrc?: string
  publicId?: string
  imageAlt: string
  text: string
}

interface OverlayImageGalleryProps {
  items: OverlayImageGalleryItem[]
}

export const OverlayImageGallery = ({ items }: OverlayImageGalleryProps) => {
  const visibleItems = items.slice(0, 4)

  return (
    <section className={styles.gallery} aria-label="Featured artwork gallery">
      {visibleItems.map((item, index) => (
        <OverlayImageCard
          key={`${item.publicId ?? item.imageSrc}-${index}`}
          publicId={item.publicId}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          text={item.text}
        />
      ))}
    </section>
  )
}
