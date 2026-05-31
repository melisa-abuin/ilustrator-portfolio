import { useTranslation } from "react-i18next"
import { CasesImageGridSection } from "../cases/CasesImageGridSection"
import { CasesIntroSection } from "../cases/CasesIntroSection"
import styles from "./CasesPage.module.css"

export const CasesPage = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t("cases.sectionLabel")}>
      <CasesIntroSection />
      <CasesImageGridSection />
    </section>
  )
}
