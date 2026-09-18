import { CloudinaryImage } from "./CloudinaryImage"

interface ImageRowItem {
  publicId: string
  itemClassName?: string
}

interface ImageRowProps {
  items: readonly ImageRowItem[]
  imageClassName?: string
  className?: string
  ariaHidden?: boolean
  testId?: string
}

// renders a list of CloudinaryImages; items with itemClassName get their own wrapper div, others render as direct children
export const ImageRow = ({
  items,
  imageClassName,
  className,
  ariaHidden,
  testId,
}: ImageRowProps) => (
  <div className={className} aria-hidden={ariaHidden} data-testid={testId}>
    {items.map((item, index) =>
      item.itemClassName ? (
        <div key={`${item.publicId}-${index}`} className={item.itemClassName}>
          <CloudinaryImage
            alt=""
            className={imageClassName}
            publicId={item.publicId}
          />
        </div>
      ) : (
        <CloudinaryImage
          alt=""
          className={imageClassName}
          key={`${item.publicId}-${index}`}
          publicId={item.publicId}
        />
      ),
    )}
  </div>
)
