import type { ReactNode } from "react"
import styles from "./SplitTextSection.module.css"

interface SplitTextSectionProps {
  sectionName: string
  title: string
  children?: ReactNode
}

export const SplitTextSection = ({
  sectionName,
  title,
  children,
}: SplitTextSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.sectionName}>{sectionName}</p>
        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          {children ? <div className={styles.children}>{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
