import { CasesIntroSection } from "../CasesIntroSection"
import styles from "../CasesSection.module.css"
import { CasesEventCarouselsSection } from "./CasesEventCarouselsSection"

export const CasesEventsSection = () => {
  return (
    <div
      className={`${styles.section} ${styles.events}`}
      data-testid="cases-events-section"
    >
      <div className={styles.introPadding}>
        <CasesIntroSection
          showImages={false}
          subtitleKey="cases.events.subtitle"
          titleKey="cases.events.title"
        />
      </div>
      <CasesEventCarouselsSection />
    </div>
  )
}
