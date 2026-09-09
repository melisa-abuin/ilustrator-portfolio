import { CasesEventCarouselsSection } from "./CasesEventCarouselsSection"
import { CasesIntroSection } from "./CasesIntroSection"
import styles from "./CasesSection.module.css"

export const CasesEventsSection = () => {
  return (
    <div
      className={`${styles.section} ${styles.events}`}
      data-testid="cases-events-section"
    >
      <CasesIntroSection
        padding="24px"
        showImages={false}
        subtitleKey="cases.events.subtitle"
        titleKey="cases.events.title"
      />
      <CasesEventCarouselsSection />
    </div>
  )
}
