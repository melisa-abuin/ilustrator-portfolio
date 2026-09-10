import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./CasesPrintsCarousel.module.css"

interface CasesPrintsCarouselProps {
  images: readonly string[]
  testId: string
}

export const CasesPrintsCarousel = ({
  images,
  testId,
}: CasesPrintsCarouselProps) => {
  const { t } = useTranslation()
  const [items, setItems] = useState<readonly string[]>(images)

  const showNext = () => {
    setItems((current) => [...current.slice(1), current[0]])
  }

  const showPrevious = () => {
    setItems((current) => [
      current[current.length - 1],
      ...current.slice(0, -1),
    ])
  }

  return (
    <div className={styles.carousel} data-testid={testId}>
      <button
        aria-label={t("cases.prints.previous")}
        className={`${styles.button} ${styles.buttonPrevious}`}
        onClick={showPrevious}
        type="button"
      >
        <ChevronIcon className={styles.icon} />
      </button>
      <div className={styles.track} data-testid={`${testId}-images`}>
        {items.map((publicId, index) => (
          <div
            className={`${styles.imageWrapper} ${getPositionClassName(index, items.length)}`}
            key={publicId}
          >
            <CloudinaryImage
              alt=""
              className={styles.image}
              publicId={publicId}
            />
          </div>
        ))}
      </div>
      <button
        aria-label={t("cases.prints.next")}
        className={styles.button}
        onClick={showNext}
        type="button"
      >
        <ChevronIcon className={styles.icon} />
      </button>
    </div>
  )
}

// distance from either edge determines the item's height, regardless of which image occupies it
const getPositionClassName = (index: number, total: number) => {
  const distanceFromEdge = Math.min(index, total - 1 - index)
  if (distanceFromEdge === 0) return styles.imageEdge
  if (distanceFromEdge === 1) return styles.imageSide
  return styles.imageCenter
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)
