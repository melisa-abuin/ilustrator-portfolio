import { useTranslation } from "react-i18next"

export const AboutSectionContent = () => {
  const { t } = useTranslation()

  return (
    <>
      <p>{t("aboutSection.body")}</p>
      <ul>
        <li>{t("aboutSection.point1")}</li>
        <li>{t("aboutSection.point2")}</li>
        <li>{t("aboutSection.point3")}</li>
      </ul>
    </>
  )
}
