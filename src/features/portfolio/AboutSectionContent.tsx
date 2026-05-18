import { useTranslation } from "react-i18next"

interface AboutSectionContentProps {
  bodyKey?: string
  pointKeys?: string[]
}

const DEFAULT_BODY_KEY = "aboutSection.body"
const DEFAULT_POINT_KEYS = [
  "aboutSection.point1",
  "aboutSection.point2",
  "aboutSection.point3",
]

export const AboutSectionContent = ({
  bodyKey = DEFAULT_BODY_KEY,
  pointKeys = DEFAULT_POINT_KEYS,
}: AboutSectionContentProps) => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t(bodyKey)}</p>
      {pointKeys.length > 0 ? (
        <ul>
          {pointKeys.map((pointKey) => (
            <li key={pointKey}>{t(pointKey)}</li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
