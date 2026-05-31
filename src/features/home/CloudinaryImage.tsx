import { AdvancedImage } from "@cloudinary/react"
import { getCloudinaryImage } from "../../utils/cloudinary"

interface CloudinaryImageProps {
  publicId?: string
  imageSrc?: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const CloudinaryImage = ({
  publicId,
  imageSrc,
  alt,
  width = 500,
  height = 500,
  className,
}: CloudinaryImageProps) => {
  const inlineStyle = className ? undefined : { width, height }

  if (publicId) {
    const img = getCloudinaryImage(
      publicId,
      inlineStyle?.width as number,
      inlineStyle?.height as number,
    )
    return (
      <AdvancedImage
        cldImg={img}
        alt={alt}
        className={className}
        style={inlineStyle}
      />
    )
  }

  return (
    <img src={imageSrc} alt={alt} className={className} style={inlineStyle} />
  )
}
