import { CloudinaryImage } from "../home/CloudinaryImage"
import styles from "./CasesImageGridSection.module.css"

const imageTiles = [
  { publicId: "gallery_1_wdijqn", variant: "tileWide" },
  { publicId: "gallery_2_q5l8oq", variant: "tileNarrow" },
  { publicId: "gallery_3_xnkwi0", variant: "tileNarrow" },
  { publicId: "gallery_4_v4psvg", variant: "tileWide" },
  { publicId: "gallery_5_gcqvga", variant: "tileWide" },
  { publicId: "gallery_6_wfaez7", variant: "tileNarrow" },
] as const

export const CasesImageGridSection = () => {
  return (
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
  )
}
