import { Cloudinary } from "@cloudinary/url-gen"
import { auto } from "@cloudinary/url-gen/actions/resize"
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity"

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

if (!cloudName) {
  throw new Error(
    "Missing VITE_CLOUDINARY_CLOUD_NAME environment variable. Please set it in your .env file.",
  )
}

const cld = new Cloudinary({
  cloud: { cloudName },
})

export const getCloudinaryImage = (
  publicId: string,
  width?: number,
  height?: number,
) => {
  const transform = cld.image(publicId).format("auto").quality("auto")

  if (width || height) {
    const resize = auto().gravity(autoGravity())
    if (width) resize.width(width)
    if (height) resize.height(height)
    transform.resize(resize)
  }

  return transform
}

export default cld
