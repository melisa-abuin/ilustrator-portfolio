import { PageHero } from "../portfolio/PageHero"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <PageHero
      title={t("portfolio.title")}
      subtitle={t("portfolio.subtitle")}
      imageSrc="https://picsum.photos/id/1025/900/1100"
      imageAlt="Portfolio hero image"
    />
  )
}
