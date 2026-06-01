import { useTranslation } from "react-i18next"
import { AboutHeroSection } from "../about/AboutHeroSection"
import { AboutSectionContent } from "../shared/AboutSectionContent"
import { ContactCta } from "../shared/ContactCta"
import { SplitTextSection } from "../shared/SplitTextSection"

export const AboutMePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <AboutHeroSection />
      <SplitTextSection sectionName="" title={t("aboutPage.section1.title")}>
        <p>{t("aboutPage.section1.body")}</p>
      </SplitTextSection>
      <SplitTextSection
        sectionName={t("aboutPage.section2.name")}
        title={t("aboutPage.section2.title")}
      >
        <AboutSectionContent
          bodyKey="aboutPage.section2.body"
          pointKeys={[
            "aboutPage.section2.point1",
            "aboutPage.section2.point2",
            "aboutPage.section2.point3",
            "aboutPage.section2.point4",
          ]}
        />
      </SplitTextSection>

      <ContactCta />
    </>
  )
}
