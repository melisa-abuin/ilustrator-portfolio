import { CasesIntroSection } from "./CasesIntroSection"
import styles from "./CasesSection.module.css"

export const CasesPrintsSection = () => {
  return (
    <div className={styles.textOnly} data-testid="cases-prints-section">
      <CasesIntroSection
        padding="24px"
        showImages={false}
        subtitleKey="cases.prints.subtitle"
        titleKey="cases.prints.title"
      />
    </div>
  )
}
