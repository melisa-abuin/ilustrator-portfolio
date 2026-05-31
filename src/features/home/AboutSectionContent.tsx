import { useTranslation } from "react-i18next"
import styles from "./AboutSectionContent.module.css"

interface AboutSectionContentProps {
  bodyKey?: string
  listLabelKey?: string
  pointKeys?: string[]
}

const DEFAULT_BODY_KEY = "aboutSection.body"
const DEFAULT_POINT_KEYS = [
  "aboutSection.point1",
  "aboutSection.point2",
  "aboutSection.point3",
  "aboutSection.point4",
]

export const AboutSectionContent = ({
  bodyKey = DEFAULT_BODY_KEY,
  listLabelKey,
  pointKeys = DEFAULT_POINT_KEYS,
}: AboutSectionContentProps) => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t(bodyKey)}</p>
      {pointKeys.length > 0 ? (
        <div className={listLabelKey ? styles.listRow : undefined}>
          {listLabelKey ? (
            <p className={styles.listLabel}>{t(listLabelKey)}</p>
          ) : null}
          <ul className={styles.list}>
            {pointKeys.map((pointKey) => {
              const href = t(`${pointKey}.href`, { defaultValue: "" })

              return (
                <li key={pointKey} className={styles.listItem}>
                  {href ? (
                    <a
                      className={styles.link}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(pointKey)}
                    </a>
                  ) : (
                    t(pointKey)
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </>
  )
}
