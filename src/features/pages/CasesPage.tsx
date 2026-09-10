import { useTranslation } from "react-i18next"
import { CasesBrandSection } from "../cases/CasesBrandSection"
import { CasesConceptualSection } from "../cases/CasesConceptualSection"
import { CasesEditorialSection } from "../cases/CasesEditorialSection"
import { CasesEventsSection } from "../cases/CasesEventsSection"
import { CasesPrintsSection } from "../cases/CasesPrintsSection"
import styles from "./CasesPage.module.css"

export const CasesPage = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t("cases.sectionLabel")}>
      <CasesEditorialSection />
      <CasesEventsSection />
      <CasesBrandSection />
      <CasesConceptualSection />
      <CasesPrintsSection />
    </section>
  )
}
