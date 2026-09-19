import { useTranslation } from "react-i18next"
import { CasesBrandSection } from "../cases/CasesBrandSection/CasesBrandSection"
import { CasesConceptualSection } from "../cases/CasesConceptualSection/CasesConceptualSection"
import { CasesEditorialSection } from "../cases/CasesEditorialSection/CasesEditorialSection"
import { CasesEventsSection } from "../cases/CasesEventsSection/CasesEventsSection"
import { CasesPrintsSection } from "../cases/CasesPrintsSection/CasesPrintsSection"
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
