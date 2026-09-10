import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./CasesEventCarouselsSection.module.css"

const carouselRows = [
  ["1-1_1_s5qswe", "1-2_1_u0jtrq"],
  ["2-1_1_gxyt7f", "2-2_1_qtiazx", "2-3_1_kybroj"],
  ["3-1_1_bekeae", "3-2_1_crgbrj", "3-3_1_tlbdum"],
] as const

export const CasesEventCarouselsSection = () => {
  return (
    <div
      aria-hidden="true"
      className={styles.eventCarousels}
      data-testid="cases-event-carousels"
    >
      {carouselRows.map((row, rowIndex) => (
        <div
          className={`${styles.carousel} ${styles[`carouselRow${rowIndex + 1}`]}`}
          data-testid={`cases-event-carousel-${rowIndex + 1}`}
          key={rowIndex}
        >
          <div className={styles.carouselTrack}>
            {row.map((publicId) => (
              <CloudinaryImage
                alt=""
                className={styles.carouselImage}
                key={publicId}
                publicId={publicId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
