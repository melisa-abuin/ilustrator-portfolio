import { CloudinaryImage } from "../home/CloudinaryImage"
import styles from "./CasesImageGridSection.module.css"

const imageTiles = [
  { publicId: "editorial_crdbvi", variant: "tileWide" },
  { publicId: "eventi_c4jsl3", variant: "tileNarrow" },
  { publicId: "marca_zxpz35", variant: "tileMedium" },
  { publicId: "stampe_obifx1", variant: "tileWide" },
  { publicId: "editorial_crdbvi", variant: "tileMedium" },
  { publicId: "eventi_c4jsl3", variant: "tileNarrow" },
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
